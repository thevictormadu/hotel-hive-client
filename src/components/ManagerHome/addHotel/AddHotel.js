import {React, useState} from "react";
import Navbar from "../../navs/Navbar";
import Sidebar from "../../navs/Sidebar";
import NavLink from "../../navs/NavLink";
import "./AddHotel.css";
import {useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function AddHotel() {
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone ] = useState('');
      const [ address, SetAdress] = useState('');
      const [ city, setCity ] = useState('');
      const [ state, setState ] = useState('');
      const [ accountName, setAccountName ] = useState('');
      const [ accountNumber, setAccountNumber] = useState('');
      const [ bankName, setBankName] = useState('');
      const [ bankCode, setBankCode] = useState('');

      const navigate = useNavigate();
      const {id}= useParams();

      const showAlert = () => {
        Swal.fire({
          title: "Success",
          text: "Hotel Created Successfully",
          icon: "success",
       }
  )
}

      const addHotel = async (name, description, email, phone, address, city, state, accountName, accountNumber,bankName, bankCode) => {
            await fetch( `https://localhost:7255/api/Hotel/add-hotel/${id}`, {
                method: 'Post',
                body:JSON.stringify({
                  name: name,
                  description:description,
                  email:email,
                  phone:phone,
                  address:address,
                  city:city,
                  state:state,
                  accountName:accountName,
                  accountNumber:accountNumber,
                  bankName:bankName,
                  bankCode:bankCode
                }),
                headers: {
                  'Content-type': 'application/json',
                },
            })
              .then(response => response.json())
              .then(data=>{
                setName('');
                setDescription('');
                setEmail('');
                setPhone('');
                SetAdress('');
                setCity('');
                setState('');
                setAccountName('');
                setAccountNumber('');
                setBankName('');
                setBankCode('');
                showAlert()
                console.log(data);
                console.log(id)
                navigate("/manager-dashboard");
              })
              .catch((err) => {
                console.log(err.message);
             })

      };

      const handleSubmit = (e) => {
        e.preventDefault();
        addHotel(name, description, email, phone, address, city, state, accountName, accountNumber,bankName, bankCode);
     }; 

  return (
    <>
         <Navbar/>
         <Sidebar roleValue="Manager"/>
         <NavLink>
          <div className="container">
              <div className="formBody">
                <h1 className="formName">Add Hotel</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="amenityInput"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Description"
                      className="amenityInput"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="amenityInput"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="amenityInput"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Address"
                      className="amenityInput"
                      onChange={(e) => SetAdress(e.target.value)}
                      value={address}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="amenityInput"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      className="amenityInput"
                      onChange={(e) => setState(e.target.value)}
                      value={state}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Account Name"
                      className="amenityInput"
                      onChange={(e) => setAccountName(e.target.value)}
                      value={accountName}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Account Number"
                      className="amenityInput"
                      onChange={(e) => setAccountNumber(e.target.value)}
                      value={accountNumber}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Bank Name"
                      className="amenityInput"
                      onChange={(e) => setBankName(e.target.value)}
                      value={bankName}
                    ></input>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Bank Code"
                      className="amenityInput"
                      onChange={(e) => setBankCode(e.target.value)}
                      value={bankCode}
                    ></input>
                  </div>                 
                  <button type="submit" className="modal-button">
                    Add Hotel
                  </button>
                </form>
              </div>
            </div>
         </NavLink>        
        </>       
  );
}
