import React from "react";
import { locations, hours } from "./footerData";

const Footer = () => {
  return (
    <footer className="fixed-sticky">
      <div className="row p-5">
        <div className="hours col-md-2 ">
          <h5>HOURS</h5>
          {hours.map((hour, index) => (
            <div key={index}>
              <p className="fw-bold">{hour.title}</p>
              <p>{hour.days}</p>
              <p>{hour.time}</p>
            </div>
          ))}
        </div>
        <div className="locations col-md-9">
          <h5>LOCATIONS</h5>

          <div className="row">
            {locations.map((location, index) => (
              <div className="col-md-4" key={index}>
                <div className="">
                  <p>{location.area}</p>
                  <p>{location.landmark}</p>
                </div>
                <div className="area">
                  <p>{location.address}</p>
                </div>
                <div className="phone d-flex gap-3">
                  <p>Phone: {location.phone}</p>
                  <p>Landline: {location.landline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
