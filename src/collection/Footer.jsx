

// const Footer =()=>{

//     return(
//         <footer className="we w-100  mt-3">
//             {/* <div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap",width:"110%", margin:"auto"}}>
//             <div style={{margin:"10px",width:"50%",backgroundColor:"yellow"}}>
               
// </div>


// <div style={{margin:"10px",width:"100%"}}>&copy; ifeoluwa 2022</div>
//             </div> */}
//             <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginLeft:"12%",width:"80%"}}>
   
                
//                 <div style={{margin:"20px",width:"20%"}}>
//                 <div style={{display:"flex",justifyContent:"space-around"}}>
//                 <a href={"https://www.instagram.com/badiruhewahtormilolar"}>
//                     <div style={{margin:"10px"}}>  <i class="fa fa-instagram" aria-hidden="true" style={{fontSize:"30px",color:"white"}}></i></div></a>
//                    <div style={{margin:"10px"}}>  <i class="fa fa-telegram" aria-hidden="true" style={{fontSize:"30px",color:"white"}}></i></div>
// <a href={"https://www.facebook.com/mheeydheey"}><div style={{margin:"10px"}}>
//                <i class="fa fa-facebook" aria-hidden="true"style={{fontSize:"30px",color:"white"}}></i>
//                 </div></a>
//                  <div style={{margin:"10px"}}>
//               <i class="fa fa-twitter" aria-hidden="true" style={{fontSize:"30px",color:"white"}}></i>
//                 </div>
//                 </div>
//   </div>
//   <div style={{margin:"20px"}}>
//   <div style={{margin:"10px",width:"100%",color:"white",fontSize:"152%",fontWeight:"bolder",fontFamily:"roboto"}}> <strong>ZANNY BEAUTY PALACE</strong> </div>  
//   </div>
//   <div style={{margin:"20px"}}>
//   <div style={{margin:"10px",width:"100%",color:"white"}}>&copy; 2022  All Right | Oluwatoyin</div> 
//   </div>
//   </div>
//         </footer>
//     )
// }

// export default Footer

const Footer = () => {
  return (
    <footer className="modern-footer">

      <div className="container">

        <div className="row gy-5">

          {/* Brand */}

          <div className="col-lg-4 col-md-6">

            <h3 className="footer-brand">
              ZANNY <span>BEAUTY PALACE</span>
            </h3>

            <p className="footer-description">
              Discover quality beauty products and professional
              hair services designed to help you look and feel
              your best.
            </p>

            {/* Social Media */}

            <div className="footer-socials">

              <a
                href="https://www.instagram.com/badiruhewahtormilolar"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="#telegram"
                aria-label="Telegram"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>

              <a
                href="https://www.facebook.com/mheeydheey"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="#twitter"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

            </div>

          </div>


          {/* Quick Links */}

          <div className="col-lg-2 col-md-6">

            <h5 className="footer-title">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/produce">Products</a>
              </li>

              <li>
                <a href="/porfolio">Services</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>

            </ul>

          </div>


          {/* Customer Care */}

          <div className="col-lg-3 col-md-6">

            <h5 className="footer-title">
              Customer Care
            </h5>

            <ul className="footer-links">

              <li>
                <a href="/blog">Beauty Blog</a>
              </li>

              <li>
                <a href="/produce">Shop Products</a>
              </li>

              <li>
                <a href="/contact">Get Help</a>
              </li>

              <li>
                <a href="/contact">Hair Consultation</a>
              </li>

            </ul>

          </div>


          {/* Contact */}

          <div className="col-lg-3 col-md-6">

            <h5 className="footer-title">
              Contact Us
            </h5>

            <div className="footer-contact">

              <p>
                <i className="fa-solid fa-location-dot"></i>

                1, Gbadebo Adekunle Street,
                Odogunyan, Ikorodu, Lagos.
              </p>

              <p>
                <i className="fa-solid fa-phone"></i>

                <a href="tel:08020743857">
                  0802 074 3857
                </a>
              </p>

              <p>
                <i className="fa-solid fa-envelope"></i>

                <a href="mailto:badiruoluwatoyin11@gmail.com">
                  badiruoluwatoyin11@gmail.com
                </a>
              </p>

            </div>

          </div>

        </div>


        {/* Divider */}

        <hr className="footer-divider" />


        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © 2022 - {new Date().getFullYear()} Zanny Beauty Palace.
            All rights reserved.
          </p>

          <p>
            Designed & Developed with care.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;