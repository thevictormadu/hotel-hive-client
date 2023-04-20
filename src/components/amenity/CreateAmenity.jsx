import {React, useState} from "react";
import Navbar from "../navs/Navbar";
import Sidebar from "../navs/Sidebar";
import NavLink from "../navs/NavLink";
import "./CreateAmenity.css";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function Amenity() {
      const [name, setName] = useState('');
      const [price, setPrice] = useState('');
      const [discount, setDiscount] = useState('');
      const { id } = useParams()
      const navigate = useNavigate();

      const showAlert = () => {
        Swal.fire({
          title: "Success",
          text: "Amenity Created Successfully",
          icon: "success",
       }
  )
}

      const createAmenity = async (name, price, discount) => {
            await fetch( `https://localhost:7255/api/Amenity/CreateAmenity`, {
                method: 'Post',
                body:JSON.stringify({
                  name: name,
                  price:price,
                  discount:discount,
                  hotelId:`${id}`
                }),
                headers: {
                  'Content-type': 'application/json',
                },
            })
              .then(response => response.json())
              .then(data=>{
                setName('');
                setPrice('');
                setDiscount('');
                showAlert()
                navigate("/manager-dashboard");
              })
              .catch((err) => {
                console.log(err.message);
             })

      };

      const handleSubmit = (e) => {
        e.preventDefault();
        createAmenity(name, price, discount);
     }; 

  return (
    <>
         <Navbar/>
         <Sidebar roleValue="Manager"/>
         <NavLink>
          <div className="container">
              <div className="formBody">
                <h1 className="formName">Add Amenity</h1>
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
                      type="number"
                      placeholder="Price"
                      className="amenityInput"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    ></input>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Discount"
                      className="amenityInput"
                      onChange={(e) => setDiscount(e.target.value)}
                      value={discount}
                    ></input>
                  </div>
                  <button type="submit" className="modal-button">
                    Add Amenity
                  </button>
                </form>
              </div>
            </div>
         </NavLink>        
        </>       
  );
}
