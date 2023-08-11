import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container mt-4 mb-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
      </nav>
      <div className="d-flex justify-content-center">
        <div style={{ maxWidth: "700px" }}>
          <header className="text-center">
            <h3 className="mb-4" style={{ color: "#3498db" }}>
              About Us
            </h3>
            <img
              className="w-100 mb-5"
              src="https://media.istockphoto.com/id/518831826/photo/sewing-class.jpg?s=612x612&w=0&k=20&c=0MOHE4eBCbTxd7yp5f6oRnIUSWmTF_dFcKwYBUCJzog="
              alt=""
              style={{ maxWidth: "500px" }}
            />
          </header>
          <section>
            <h4 className="text-center" style={{ color: "#3498db" }}>
              Welcome to StylishWardrobe
            </h4>
            <p>
              At StylishWardrobe, we're passionate about fashion and helping you express your unique style through clothing. Our mission is to provide you with
              the latest trends and high-quality clothing that not only looks great but also makes you feel confident and stylish.
            </p>
          </section>

          <section>
            <h4 className="text-center" style={{ color: "#3498db" }}>
              Our Story
            </h4>
            <p>
              Founded in [Year], StylishWardrobe started as a small boutique with a vision to redefine fashion for individuals who want to stand out from the
              crowd. Over the years, we've grown into a leading online destination for fashion enthusiasts, offering a curated collection of clothing,
              accessories, and more.
            </p>
          </section>

          <section>
            <h4 className="text-center" style={{ color: "#3498db" }}>
              Quality and Style
            </h4>
            <p>
              At StylishWardrobe, we believe that fashion should be a blend of quality and style. That's why we carefully select our products to ensure they
              meet our standards for craftsmanship, durability, and design. From casual wear to elegant evening outfits, we've got you covered for every
              occasion.
            </p>
          </section>

          <section>
            <h4 className="text-center" style={{ color: "#3498db" }}>
              Our Team
            </h4>
            <p>
              Our dedicated team of designers, stylists, and fashion enthusiasts work tirelessly to curate a collection that reflects the latest trends and
              timeless classics. We're here to assist you in finding the perfect pieces that match your personal style and elevate your wardrobe.
            </p>
          </section>

          <section>
            <h4 className="text-center" style={{ color: "#3498db" }}>
              Contact Us
            </h4>
            <p>
              We're always excited to hear from you. Whether you have questions, feedback, or need assistance, our customer support team is here to help. Feel
              free to reach out to us via email, phone, or social media, and we'll be more than happy to assist you.
            </p>
          </section>

          <footer>
            <p>&copy; [Year] StylishWardrobe. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
