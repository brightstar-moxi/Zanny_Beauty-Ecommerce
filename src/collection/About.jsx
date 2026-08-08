// import { Link } from "react-router-dom"

// // import perfs from "./p.jpeg"
// import pro from "./eni.jpg"
// import pro2 from "./john.jpg"
// import pro3 from "./joy.jpg"
// import Navbar from "./Navbar"

// const About =()=>{
//     return(
//         <>
//         <Navbar/>
// <div className="about">
//     <div style={{width:"100%",backgroundColor:"rgba(0,0,0,0.680)",color:"white"}}>
//       <div className="text-center"><strong style={{fontSize:"50px"}}> About My Product
//     </strong></div>
//     <div className="ms-5" style={{width:"85%",fontSize:"110%"}}><p>ZANNY BEAUTY PALACE is a creative hairstylist with an eye of designs for the position of hair styles. Our duties include consulting clients on hair styling options, 
//       describing the benefits of different hair care products, persuading clients to buy their retail products, and staying updated on the latest hair trends and styling methods. </p>
//     <p>Additionally, ZANNY BEAUTY PALACE  expert "people persons" to attract and retain long-term customers. This is to let us know that we are good interpersonal and conversational skills. 
//     Blessed are the hairstylists, for we bring out the beauty in others.
//     </p>
//     </div> 
//     <div className="text-white ms-5">   
//               <h2>Our Responsibilities</h2>
//               <ul className="me-3 ">
//                 <li> We Consult with clients on stylistic options for their hair.</li>
//                 <li>We Listen to clients' needs to determine their preferences.</li>
//                 <li> Shampooing, fixing, and dressing hair.</li>
//                 <li> we Describe different hair care products and their benefits.</li>
//                 <li>We Build a personal relationship with clients to ensure return visits.</li>
//                 <li> We Manage bookings and welcoming clients into the store.</li>
//                 <li>We always Keep updated on hairstyle trends and styling methods.</li>
//               </ul>
   
//               </div>
    
//     <h1 className="text-center" style={{marginBottom:"0px"}}>Feedback from our customer</h1>
//     </div>
//     </div>
//     <div  className="ba" style={{color:"white",textAlign:"center"}}>
    
//     <div class="container w-100 pt-2 ">

      
//          < div class="row">
 
    
  
//   <div class="col-sm-4">
//   <div style={{height:"25vh",overflowY:"hidden",textAlign:"center"}}>
//     <img  style={{width:"60%"}} src={pro} alt="under2" />
//     </div>
//     <div style={{paddingTop:"3%"}}>
//       <div> <strong> Sis. Eniola </strong>
//       <p>Zanny Beauty Palace is an hairstylist that dress my hair very neat and make me look attractive to the world. </p></div>
    
//     </div>
//     </div>
  
//   <div class="col-sm-4">
//   <div style={{height:"25vh",overflowY:"hidden",textAlign:"center"}}>
//     <img style={{width:"70%"}} src={pro2} alt="under3" />
//     </div>
//     <div style={{display:"flex", justifyContent:"space-around",paddingTop:"3%"}}>
//       <div> <strong> Mrs Peter</strong>
//       <p>Wow, What a wounderful hairstylist, i'm so happy for dressing my hair here. </p></div>
     
//     </div>
//   </div>
//   <div class="col-sm-4">
//   <div style={{height:"25vh",overflowY:"hidden",textAlign:"center"}}>
//     <img style={{width:"58%"}} src={pro3} alt="under4" />
//     </div>
//     <div style={{display:"flex", justifyContent:"space-around",paddingTop:"3%"}}>
//       <div> <strong> Sis. Favour</strong>
//       <p>I love Zanny Beauty Palace product, it is nice for me.</p></div>
     
//     </div>
//   </div>
  
// </div>
// </div>
// <div className="mt-5">
//     <strong>Buy our product now and enjoy it quailty</strong>

//     <p>You can also contact us by clicking the bottton below</p>
//    <Link to={"/contact"}> <button className="btn text-white" style={{backgroundColor:"deeppink"}}>Contact Us</button> </Link>
//     </div>

//    </div>

// </>
//     )
// }
// export default About


import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import pro from "./eni.jpg";
import pro2 from "./john.jpg";
import pro3 from "./joy.jpg";

const responsibilities = [
  "Consult with clients on stylistic options for their hair.",
  "Listen to clients' needs to determine their preferences.",
  "Provide shampooing, fixing, and hair-dressing services.",
  "Explain different hair-care products and their benefits.",
  "Build personal relationships with clients to encourage return visits.",
  "Manage bookings and welcome clients into the store.",
  "Stay updated on hairstyle trends and modern styling methods.",
];

const testimonials = [
  {
    image: pro,
    name: "Sis. Eniola",
    text: "Zanny Beauty Palace dresses my hair very neatly and always makes me look attractive.",
  },
  {
    image: pro2,
    name: "Mrs. Peter",
    text: "Wow, what a wonderful hairstylist. I'm very happy with the way my hair was dressed here.",
  },
  {
    image: pro3,
    name: "Sis. Favour",
    text: "I love Zanny Beauty Palace products. The quality is really nice.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* ========================================
            HERO
        ======================================== */}

        <section className="about-hero">

          <div className="about-hero-overlay">

            <div className="container text-center">

              <span className="about-tag">
                About Zanny Beauty Palace
              </span>

              <h1>
                Beauty, Style & Confidence
              </h1>

              <p>
                Professional hair styling and quality beauty products
                designed to help you look and feel your best.
              </p>

            </div>

          </div>

        </section>


        {/* ========================================
            ABOUT INTRODUCTION
        ======================================== */}

        <section className="about-introduction">

          <div className="container">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <span className="section-tag">
                  Who We Are
                </span>

                <h2>
                  Bringing Out the Beauty in You
                </h2>

                <p>
                  Zanny Beauty Palace is a creative hairstyling and beauty
                  service brand focused on helping clients discover styles
                  that suit their personality and preferences.
                </p>

                <p>
                  We provide professional hairstyling services while also
                  helping our clients understand different hair-care
                  products and styling options. We continuously follow
                  modern hair trends and styling techniques to provide
                  better experiences for our customers.
                </p>

                <div className="about-highlight">

                  <i className="fa-solid fa-quote-left"></i>

                  <span>
                    Blessed are the hairstylists, for we bring out
                    the beauty in others.
                  </span>

                </div>

              </div>


              <div className="col-lg-5">

                <div className="about-info-card">

                  <div className="about-info-icon">
                    <i className="fa-solid fa-scissors"></i>
                  </div>

                  <h3>
                    Professional Hair Care
                  </h3>

                  <p>
                    From everyday hairstyles to special occasions,
                    our goal is to provide quality service and a
                    comfortable customer experience.
                  </p>

                  <Link
                    to="/contact"
                    className="about-card-button"
                  >
                    Talk To Us
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ========================================
            RESPONSIBILITIES
        ======================================== */}

        <section className="responsibilities-section">

          <div className="container">

            <div className="row g-5 align-items-center">

              <div className="col-lg-5">

                <span className="section-tag">
                  What We Do
                </span>

                <h2>
                  Our Responsibilities
                </h2>

                <p>
                  We focus on providing professional services while
                  understanding the individual needs and preferences
                  of every client.
                </p>

              </div>


              <div className="col-lg-7">

                <div className="responsibility-list">

                  {responsibilities.map((item, index) => (

                    <div
                      className="responsibility-item"
                      key={index}
                    >

                      <div className="responsibility-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p>
                        {item}
                      </p>

                      <i className="fa-solid fa-check"></i>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ========================================
            TESTIMONIALS
        ======================================== */}

        <section className="testimonials-section">

          <div className="container">

            <div className="text-center mb-5">

              <span className="section-tag">
                Customer Feedback
              </span>

              <h2>
                What Our Customers Say
              </h2>

              <p>
                Our customers' experiences inspire us to keep improving
                our services.
              </p>

            </div>


            <div className="row g-4">

              {testimonials.map((testimonial, index) => (

                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

                  <article className="testimonial-card">

                    <div className="testimonial-image-wrapper">

                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-image"
                      />

                    </div>

                    <div className="testimonial-content">

                      <div className="testimonial-stars">

                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>

                      </div>

                      <p>
                        "{testimonial.text}"
                      </p>

                      <h4>
                        {testimonial.name}
                      </h4>

                      <span>
                        Happy Customer
                      </span>

                    </div>

                  </article>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ========================================
            CTA
        ======================================== */}

        <section className="about-cta">

          <div className="container">

            <div className="about-cta-content">

              <div>

                <span className="about-cta-tag">
                  Ready For A New Look?
                </span>

                <h2>
                  Let Us Create Your Perfect Style
                </h2>

                <p>
                  Contact us today to ask questions, book a service,
                  or learn more about our beauty products.
                </p>

              </div>

              <div className="about-cta-buttons">

                <Link
                  to="/contact"
                  className="btn btn-light rounded-pill px-4 py-3"
                >
                  Contact Us
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>

                <Link
                  to="/produce"
                  className="btn btn-outline-light rounded-pill px-4 py-3"
                >
                  Shop Products
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default About;