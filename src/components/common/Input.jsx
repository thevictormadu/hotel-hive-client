import React from "react";
import { MdHome, MdOutlineBedroomParent, MdOutlineRoomService, MdPeople } from "react-icons/md";
import './input.css'


const Input = ({setNoOfPeople, setServiceName, setRoomType, noOfPeople, }) => {
  return (  
               <div>         
                  {/* <div className="input-container" >
                    <input type="text" placeholder="Hotel Name" className="" value={""}   onChange={(e) => setNoOfPeople(e.target.value)}/>
                    <div className="icon-box">
                      <MdHome className="icon" />
                    </div> */}
                  {/* </div> */}
                  <div className="input-container">
                    <input type="text" disabled placeholder="Room Type" onChange={(e) => setRoomType(e.target.value)}/>
                    <select className="02eec545-7d7c-4758-ad39-6a7e6c9e27f1" placeholder="Room Type">
                      <option value="088e5374-9dd5-465a-8006-cd568ab82a0f">Standard Room</option>
                      <option value="185ead6f-5f42-49aa-968c-2a433f917b9e">Superior Room-Pool View</option>
                      <option value="295dfa27-a8db-4f77-8d13-ace7b0e9a75c">Premium Room</option>
                    </select>
                    <div className="icon-box">
                      <MdOutlineBedroomParent className="icon" />
                    </div>
                  </div>
                  <div className="input-container">
                    <input type="text" disabled placeholder="No of People"  onChange={(e) => setNoOfPeople(e.target.value)}/>
                    <input type="number" className="general" name="quantity" min="1" max="250" value={noOfPeople}/>
                    <div className="icon-box">
                      <MdPeople className="icon" />
                    </div>
                  </div>
                  <div className="input-container">
                    <input type="text" disabled placeholder="Service" />
                    <select className="input-service general" placeholder="Service">
                      <option value="Personal Service">Personal Service</option>
                      <option value="Hotel Service">Hotel Service</option>
                    </select>
                    <div className="icon-box">
                      <MdOutlineRoomService className="icon" />
                    </div>
                  </div>
                </div>       
  );
};

export default Input;
