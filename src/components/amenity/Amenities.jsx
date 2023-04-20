import "./Amenities.css";
import React from "react";
import { BiFilter } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {
  MdMoreHoriz,
  MdOutlineModeEditOutline,
  MdOutlineDeleteForever,
} from "react-icons/md";
import Modal from "@mui/material/Modal";
import { red } from "@mui/material/colors";
import Navbar from "../navs/Navbar";
import Sidebar from "../navs/Sidebar";
import NavLink from "../navs/NavLink";
import "./CreateAmenity.css";
import { useContext } from "react";
import { HmsContext } from "../navs/DashboardContext";

export default function () {
  const {amenities} = useContext(HmsContext);
  const [open, setOpen] = React.useState(false);
  const [data, setData]= React.useState(amenities)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Navbar/>
    <Sidebar roleValue="Customer"/>
    <NavLink>
    <div className="container1">
      <h1 className="amenities-h1">Amenities</h1>
      <div className="table-header">
        <div className="amenity-filter-search">
          <BiFilter className="filter-icon table-icons-hover" />
          <div className="amenities-search-container">
            <FaSearch className="search-icon table-icons-hover" />
            <input
              className="amenities-search-input"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* <button className="create-amenity-button" onClick={() => handleOpen()}>
          <AiOutlinePlus style={{ marginRight: ".4rem", fontSize: "1rem" }} />
          Create Amenity
        </button> */}

      </div>
      <table className="amenities-table">
        <tr>
          <th className="first-column">
            <input className="table-checkbox" type="checkbox" />
          </th>
          <th>Name</th>
          <th>Price</th>
          <th>Discount</th>
          <th>
            <MdMoreHoriz className="table-icons table-icons-hover" />
          </th>
        </tr>
        {data.map( (amenity, i) => 
              <tr key={i}>                   
                  <td className="first-column">
                    <input type="checkbox" />
                  </td>
                  <td>{amenity.name}</td>
                  <td>{amenity.price}</td>
                  <td>{amenity.discount}</td>
                  {/* <td className="table-icons">
                    <MdOutlineModeEditOutline className="table-icons-hover" />
                    <MdOutlineDeleteForever className="table-icons-hover" />
                    <MdMoreHoriz className="table-icons-hover" />
                  </td> */}
              </tr>
        )}
{/*        
       <tr>                   
                  <td className="first-column">
                    <input type="checkbox" />
                  </td>
                  <td>Victor</td>
                  <td>{1000}</td>
                  <td>{230}</td>
                  <td className="table-icons">
                    <MdOutlineModeEditOutline className="table-icons-hover" />
                    <MdOutlineDeleteForever className="table-icons-hover" />
                    <MdMoreHoriz className="table-icons-hover" />
                  </td>
        </tr> */}

      </table>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
          outline: "none",
          ":focus": {
            outline: "none",
            border: "none",
          },
        }}
      >
        <div className="formBody">
          <h1 className="formName">Add Amenity</h1>
          <form>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="amenityInput"
              ></input>
            </div>
            <div>
              <input
                type="number"
                placeholder="Price"
                className="amenityInput"
              ></input>
            </div>
            <div>
              <input
                type="number"
                placeholder="Discount"
                className="amenityInput"
              ></input>
            </div>
            <button className="modal-button" type="submit">
              Add Amenity
            </button>
          </form>
        </div>
      </Modal> */}
    </div>
  </NavLink>
 </>
  );
}
