import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div id="about">
      <Navbar />
      <div className=" row p-4">
        <div className="col-md-6 p-4">
          <h1 className="mb-4">
            <span>Simply the</span> BEST BAKERY
          </h1>
          <p className="content">
            First opened in West Seattle where the historic Blake’s Bakery once
            stood, William and Heather Leaman continue to make history daily
            with one-of-a-kind creations. With over 20 years experience in
            pastry, bread and chocolate, and as the captain of the 2005 Bread
            Bakers Guild Team USA, where he led his team to victory at the Coupe
            du Monde de Boulangerie (World Cup of Baking), William Leaman’s
            Bakery Nouveau has become a Seattle icon. His recent awards include:
            WINNER for BEST Bakery 4 years in a row (2010, 2011, 2012, 2013)
            2015 Readers’ Choice, Best Bakery– Seattle Magazine 2014 Reader
            Picks Best of Seattle, Best Bakery and Best Pastry- Seattle Weekly
            2015 28 out of 30 points – Zagat Featured in a variety of industry
            and lifestyle publications, such as Sunset Magazine, Seattle
            Magazine, Pastry and Baking North America, Bake Magazine, The
            Stranger, and Parent Map Online 2008 May issue of Sunset Magazine
            2008 February issue of Seattle Magazine Winter 2009 issue of Seattle
            Metropolitan Bride and Groom Magazine and received a 2009 Zagat
            rating of 28 out of 30 points.
          </p>
        </div>
        <div className="col-md-6 p-4">
          <img
            className="p-2"
            src="https://t3.ftcdn.net/jpg/01/96/46/58/360_F_196465845_KCAF1iAAlLmQo5wt8ZR6uczIyQkZBoDM.jpg"
            alt="Allwin_Raj"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
