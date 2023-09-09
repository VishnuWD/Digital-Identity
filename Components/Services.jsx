import React from "react";

const Services = () => {
  return (
    <div className="services">

      <div className="total">

        <div className="ServiceTitle">
          <h3>Services we offer</h3>
          <p>Our solutions are all about simplification and optimisation.</p>
          <button>See Product Review</button>
        </div>

        <div className="Sboxes">

          <div className="Sbox">
            <img src="\Images\icon15.png" alt="" />
            <h3>Identity based solutions</h3>
            <div></div>
            <p>
              A strong identification system relies on an integrated robust ID
              verification solution:...
            </p>
          </div>

          <div className="Sbox">
            <img src="\Images\icon15.png" alt="" />
            <h3>Enrolment Operations</h3>
            <div></div>
            <p>
              Our enrolment solutions provide a wide selection of customizable
              functionality...
            </p>
          </div>

          <div className="Sbox">
            <img src="\Images\icon15.png" alt="" />
            <h3>Identity Management Solutions</h3>
            <div></div>
            <p>
              We bring our years of experience in identity data management to
              solve...
            </p>
          </div>

          <div className="Sbox">
            <img src="\Images\icon15.png" alt="" />
            <h3>Software Application Services</h3>
            <div></div>
            <p>
              For years we have helped transform businesses by developing
              robust...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
