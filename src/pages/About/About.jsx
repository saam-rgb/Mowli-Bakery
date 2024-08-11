import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about row p-4">
        <div className="col-md-6 ">
          <h1>
            <span>Simply the</span> BEST BAKERY
          </h1>
          <p>
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
        <div className="col-md-6">
          <img
            src="https://instagram.fmaa2-3.fna.fbcdn.net/v/t51.29350-15/279964698_362724699017220_2973965273240042884_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fmaa2-3.fna.fbcdn.net&_nc_cat=100&_nc_ohc=0L_aYXhF7J4Q7kNvgFlcFFg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MjgzMzE4NzU1Nzk0NzY4NjM2Mg%3D%3D.2-ccb7-5&oh=00_AYA81juuI7cWoQOegJtGkoGa0pL4DHolLkVPAW7vSv7g7g&oe=66BE45C1&_nc_sid=8f1549"
            alt="Allwin_Raj"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
