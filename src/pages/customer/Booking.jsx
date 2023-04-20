import {React, useState} from "react";
// import Button from '../../components/common/Button';
// import Input from '../../components/common/Input';
import '../../style/Booking.css';
import { MdHome, MdOutlineBedroomParent, MdOutlineRoomService, MdPeople } from "react-icons/md";
import '../../components/common/input.css';
import '../../components/common/Button.css'
import Navbar from '../../components/navs/Navbar';
import NavLink from '../../components/navs/NavLink';
import Sidebar from '../../components/navs/Sidebar';
import {useParams } from "react-router-dom";


const Booking = () => {
      const [noOfPeople, setNoOfPeople] = useState(0);
      const [serviceName, setServiceName] = useState('');
      const [roomType, setRoomType] = useState('');
      const { id, customer } = useParams()
          
      const addBooking =async (noOfPeople, serviceName, roomType, id, customer) =>{
        alert(serviceName)
        await fetch( `https://localhost:7255/api/Booking`, {
          method: 'Post',
          body:JSON.stringify({
            noOfPeople: noOfPeople,
            serviceName:serviceName,
            customerId:customer,
            roomTypeId:roomType,
            hotelId:`${id}`
          }),
          headers: {
            'Content-type': 'application/json',
          },
      })
        .then(response => response.json())
        .then(data=>{
          setNoOfPeople('');
          setServiceName('');
          setRoomType('');
          window.location.href = 'https://paystack.com/pay/hms-sq012';
        })


        }

       const handleSubmit = (e)=>{
          e.preventDefault();
          addBooking(noOfPeople, serviceName, roomType, id, customer);
        }

  return (
    <>
      <Navbar/>
      <NavLink>
      <div className='booking-container'>
        <h1>
            BOOKING
        </h1>
        <form onSubmit={handleSubmit}>
        <div>         
                  {/* <div className="input-container" >
                    <input type="text" placeholder="Hotel Name" className="" value={""}   onChange={(e) => setNoOfPeople(e.target.value)}/>
                    <div className="icon-box">
                      <MdHome className="icon" />
                    </div> */}
                  {/* </div> */}
                  <div className="input-container">
                    <input type="text" disabled placeholder="Room Type" onChange={(e) => setRoomType(e.target.value)}/>
                    <select className="room-type" placeholder="Room Type">
                      <option value="9b8c6634-2a31-40ef-8c4e-f7959dfc5c59">Standard Room</option>
                      <option value="aefc62d4-2127-446a-af63-a786ca41a167">Superior Room-Pool View</option>
                      <option value="fa258904-46ac-4785-bd02-4493aab50b71">Premium Room</option>
                    </select>
                    <div className="icon-box">
                      <MdOutlineBedroomParent className="icon" />
                    </div>
                  </div>
                  <div className="input-container">
                    <input type="text" disabled placeholder="No of People"  />
                    <input type="number" className="general" name="quantity" min="1" max="250" value={noOfPeople} onChange={(e) => setNoOfPeople(e.target.value)}/>
                    <div className="icon-box">
                      <MdPeople className="icon" />
                    </div>
                  </div>
                  <div className="input-container">
                    <input type="text" disabled placeholder="Service" />
                    <select className="input-service general" placeholder="Service" onChange={(e) => setServiceName(e.target.value)}>
                      <option value="Personal Service">Personal Service</option>
                      <option value="Hotel Service">Hotel Service</option>
                    </select>
                    <div className="icon-box">
                      <MdOutlineRoomService className="icon" />
                    </div>
                  </div>
                </div> 

              <div className="btn-box">
                  <button type="summit" className='btn btn-center'>Book</button>
              </div>
        </form>
      </div>
      </NavLink>
      <Sidebar roleValue={"Customer"}/>
    </>
  )
}

export default Booking