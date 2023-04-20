import React from "react";
import NavbarLanding from "../landingPage/navbarLanding/NavbarLanding";
import Sidebar from "../navs/Sidebar";
import "./HotelListing.css";
import ListCard from "./listcard/ListCard";

const HotelListing = () => {
  return (
    <div className="hotel-lists">
      <NavbarLanding/>
      <ListCard />
    </div>
  );
};

export default HotelListing;
