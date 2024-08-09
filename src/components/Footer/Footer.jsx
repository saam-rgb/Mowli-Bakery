import React from "react";
import { locations, hours } from "./footerData";

const Footer = ({ location }) => {
  return (
    <div>
      <div className="row p-5">
        <div className="hours col-md-2 mx-3">
          <h5>HOURS</h5>
        </div>
        <div className="locations col-md-9">
          <h5>LOCATIONS</h5>

          {locations.map((location) => {
            <div className="col-md-3">
              <div className="area">
                <p>{location.area}</p>
                <p>{location.landmark}</p>
                <p>{console.log(location.area)}</p>
                <p>{console.log(location.landmark)}</p>
                <p>{console.log(location.address)}</p>
                <p>{console.log(location.phone)}</p>
                <p>{console.log(location.landline)}</p>
              </div>
              <div className="area">
                <p>{location.address}</p>
              </div>
              <div className="phone">
                <p>{location.phone}</p>
                <p>{location.landline}</p>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
