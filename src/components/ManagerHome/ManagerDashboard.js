import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import React from "react";
import "../ManagerHome/ManagerDashboard.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiFilter } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import {AiOutlinePlusCircle} from "react-icons/ai";
// import {IoPersonAddOutline} from "react-icons/io";
import {HiOutlineUserAdd} from "react-icons/hi";


function ManagerDashboard() {
  return (
    <div className="dashboard-container">
            <div className="manager-head">
              <h1>Managers</h1>
              <span><HiOutlineUserAdd/></span>
            </div>
            <div className="top-section">
            {/* <Dashboard /> */}
              <ManagerCard />
              <div className="top-left">
                <AdditionalInfo />
                <TotalAmountGenerated />
              </div>
            </div>
            <div className="manager-dashboard">
              <div className="manager-table-container">
                <div className="table-head">

                <div className="ManagerSearchBar">
                        <BiFilter color="#2067A1" size={"30px"} />
                        <div className="ManagersearchInput">
                          <HiMagnifyingGlass className="ManagerSearchIcon" />
                          <input type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div >
                <button class="add-customer new-style" >
                    <AiOutlinePlusCircle />
                    Add customer
                </button>
                    </div>
                </div>
        <table>
              <tr class="table-head-first">
                <th>
                  <input type="checkbox" />
                </th>
                <th>MANAGER NAME</th>
                <th>HOTEL</th>
                <th>PHONE</th>
                <th>
                  <FaEllipsisH />
                </th>
              </tr>
              <tr>
              <td className="ManagerCheckBox">
                    <input type="checkbox" />
              </td>
                    <td>Kadin Herwitz<tr>5684236583</tr></td>
                    <td>Lorem Ipsumdolor sit</td>
                    <td>66666666</td>
                <td>
              <div className="ManagerCrud">
                    <span>
                          <MdModeEdit />
                    </span>
                    <span>
                          <RiDeleteBin5Fill />
                    </span>
                    <span>
                          <FaEllipsisH />
                    </span>
              </div>
                </td>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>66666666</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz`<tr>5684236583</tr>`</td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                  <div className="ManagerCrud">
                  <span>
                      <MdModeEdit />
                  </span>
                  <span>
                      <RiDeleteBin5Fill />
                  </span>
                  <span>
                      <FaEllipsisH />
                  </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>66666666</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                </table>
                <div className="Manager-pagination">
                  <div>
                      <h15>ACTIVE MANAGERS: 470/706</h15>
                  </div>
                  <div>
                    <label for="Manager-dd">
                        <b>Rows per page</b>
                    </label>
                  <select id="Manager-dd" name="number">
                      <option value="null"> </option>
                      <option value="five">5</option>
                      <option value="ten">10</option>
                      <option value="twenty">20</option>
                  </select>
                <div>
                <h10>1-10 of 706</h10>
                <FaAngleLeft />
                <FaAngleRight />
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
  );
    }
     export function AdminManager() {
      return(
          <>
              <Navbar/>
              <NavLink>
                  <ManagerDashboard/>
              </NavLink>
              <Sidebar roleValue={"Manager"}/>
          </>
      )
  }
    function ManagerCard() {
      return ( 
    <div className="card-body " >
        <div className="card manager-admin-pane" >
      <div className="manager-info-containe" style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{ display: 'flex' }}>
          <img src={require('./avatar.jpg')} alt="Avatar" className="avatar" />
          <div><h3>Angelo Akuhwa</h3><span>28, Male</span></div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          </div>
        </div>
        <div className="details">
            <div className="hotel">Hotel: Radison Blu Hotels</div>
            <div className="mobile">Mobile: 08032342134</div>
            <div className="email">Email: angelo.a@email.com</div>
            <div className="address">Address: 23 Ohen Street, Edo</div>
        </div>
    </div>
    </div>
    </div>
    );
    }

       function AdditionalInfo() {
      return (
            <div className="card additional-info-card">
                <div className="card-body">
                  <div className="additionalInfo">
                      <p className="additionalRecord">Additional Records</p>
                      <div className="record-details">
                      <div>
                      <p>Date Joined</p>
                      <p  style={{fontWeight:"700"}}>12/12/2020</p>
                      </div>
                      <div>
                      <p>Last Update</p>
                      <p  style={{fontWeight:"700"}}> 12/12/2020</p>

                      </div>
                      </div>
                      <div  className="record-details">
                      <div>
                      <p >Manager ID</p>
                      <p style={{fontWeight:"700"}}> 123456789</p>
                      </div>
                      <div>
                      <p >Total Hotels</p>
                      <p style={{fontWeight:"700"}}> 2</p>

                      </div>

                      </div>
                    </div>
                </div>
              </div>
      );
    }
             function TotalAmountGenerated() {
              return (
                    <div className="total-amount-generated-card">
                        <div className="card-body">
                          <div className="total-amount-generated">
                              <div className="total-amount-generated" style={{marginBottom:"15px"}}>Total Amount Generated</div>
                              <div className="amount" style={{fontWeight:"700"}}>₦ 540,000</div>
                            </div>
                        </div>
                      </div>
              );
            }
        export default ManagerDashboard;