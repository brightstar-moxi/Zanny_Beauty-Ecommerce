
// // import { Link } from "react-router-dom"

// import { useState } from "react";
//  import video from "./MODERN HAIR SALON.mp4"
// // import video from "./VID-20220920-WA0012.mp4"


// // import './Connect.css';
// const Connect =() => {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [subject, setSubject] = useState("");
//   const [email, setEmail] = useState("");
//   const [textarea, setTextarea] = useState("");
//   const [ setIncorrect] = useState('');

//  //  const [, setSumbit] = useState('');

//    const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // const cool = () => {
//   //   return (
//   //     <div 
//   //       className="success text-center"
//   //       style={{
//   //         display: incorrect?'' : 'none',color:"red"
//   //       }}>
//   //       <p >please enter a correct email</p>
//   //     </div>
//   //   ); 
//   // };
 



//    const successMessage = () => {
//       return (
//         <div 
//           className="success"
//           style={{
//             display: submitted?'' : 'none',
//            color:"green"}}>
//           <strong> ✔ SUCCESSFULLY SENT</strong>
//         </div>
//       );
//     };
   
     
//      // Showing error message if error is true
//      const errorMessage = () => {
//       return (
//         <div
//           className="error"
//           style={{
//             display: error ? '' : 'none',
//           }}>
//           <h1>Please enter a correct email</h1>
//         </div>
//       );
//     };

//   const  submit = (e) => {
//     e.preventDefault()
    
//     if (email === ""){
//      setIncorrect("pls insert your email")

//       return
//     }
//     if (name === ""){
//       setIncorrect("pls insert your name")
 
//        return
//      }
//      if (number === ""){
//       setIncorrect("pls insert your phone")
 
//        return
//      }
    
 

//     let data = {email,subject,textarea,number,name}
//   console.log(data)
//       fetch(" https://git.heroku.com/love-collectionjs.git", {


//         method:"POST",
//         headers:{
//           "content-Type": "application/json"
//         },
        
//         body:JSON.stringify(data)
//       }).then(res => res.json())
//       .then(data => {
//       //  if (subscribe)  {
//       //   setSubmitted(false)
//       //  }
//       //  else  {
//       // setError(true)
//       //  }
//          console.log(data)
//          setSubmitted(data);
//          setError(false);
//        })
     
//   }
  
//     return(
//         <>
//         <video loop muted autoPlay="true">
//         <source
//           src={video}
//           type="video/mp4"
//         />
       
//       </video>
//         <div >
//         <h2 className="text-center mt-5 text-white">CONTACT US</h2>
//         <p className="text-center text-white"> Enreach us for more product</p>
//         <main class="parent" style={{color:"deeppink"}}>

// <div  class="child pt-3" style={{boxShadow: "3px 4px 6px silver"}}>
// <div style={{margin:"8px"}}>  <i class="fa fa-map-marker" aria-hidden="true"style={{fontSize:"50px",color:"deeppink"}}> </i></div>
//   <div style={{margin:"5px"}}>
// <strong style={{fontSize:"120%"}}>Address:</strong>
// <p>1, gbadebo adekunle street, odogunyan ikorodu,Lagos state.</p>
// </div>
// </div>
// <div  class="child pt-3 " style={{boxShadow: "3px 4px 6px silver"}}>
// <div style={{margin:"8px"}}>  <i class="fa fa-phone " aria-hidden="true"style={{fontSize:"40px",color:"green"}}> </i></div>
//   <div  style={{margin:"5px",color:"green"}}> 
//     <strong style={{fontSize:"120%"}}>Call us:</strong>
// <p className="pt-1">08020743857</p>
// </div>
// </div>
// <div class="child p-3 " style={{boxShadow: "3px 4px 6px silver"}}>
// <div style={{margin:"8px"}}>  <i class="fa fa-envelope text-primary" aria-hidden="true"style={{fontSize:"42px"}}> </i></div>
//   <div style={{margin:"5px"}}>
//   <strong style={{fontSize:"120%",color:"blue"}}>Mail Us</strong>
//   <div className="mail">
//   <a href="https://gmail.com" style={{fontWeight:"bold", overflow:"auto"}}> <p className="pt-1">badiruoluwatoyin11@gmail.com</p></a>
//   </div>
//   </div>
//   </div>
// </main>
// </div>

// <form action="">

//   <div className="textd"  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginLeft:"12%",width:"60%"}}>
 
//     <div className="bg"  style={{margin:"20px"}}>
//   <input  type="text" name="name" id="name" placeholder="Your Name" style={{width:"160%",padding:"10px",border:"none;"}} onChange={(e)=> { setName(e.target.value)}} required />
//   </div>
//   <div className="bg" style={{margin:"20px"}}>

//   <input type="email"  name="username" id="email2" placeholder="Your email" style={{width:"160%",padding:"10px",border:"none" }} 
//    onChange={(e)=> { setEmail(e.target.value)}} required/> 
   
//   </div>
 
//   </div>
//   <div className="textd" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginLeft:"12%",width:"60%"}}>
//     <div className="bg" style={{margin:"20px"}}>
//   <input type="number" name="number" id="number" placeholder="Your Number" style={{width:"160%",padding:"10px",}} onChange={(e)=> { setNumber(e.target.value)}} required/>
//   </div>
//   <div className="bg" style={{margin:"20px"}}>
//   <input type="text"  name="subject" id="subject" placeholder="topic" style={{width:"160%",padding:"10px"}} onChange={(e)=> { setSubject(e.target.value)}} required /> 
//   </div>
//   </div>
// <div className="textdiv" style={{width:"60%",margin:"auto"}}>
//   <textarea  name="textarea" id="textarea" style={{width:"100%",height:"150px",padding:"12px 20px", boxSizing:"border-box",
//   borderRadius:"4px",border:"2px solid #ccc",backgroundColor:"#f8f8f8",fontSize:"16px",resize:"none"}} placeholder="how can we help you"  onChange={(e)=> { setTextarea(e.target.value)}}>
    
//   </textarea>
//   </div>
//   <div className="text-center">
//   <button className="btn  p-2 " style={{color:"white", backgroundColor:"deeppink"}} onClick={submit}><b> Submit</b></button>
 
//        <div className="messages">
//        {errorMessage()}
//         {successMessage()}
//       </div>
//        </div>
  
// </form>

//       </>
//     )
// }
// export default Connect


// import { Link } from "react-router-dom";
// import video from "./MODERN HAIR SALON.mp4";
// import { useState } from "react";
import { Link } from "react-router-dom";
import video from "./MODERN HAIR SALON.mp4";


const Connect = () => {

//   const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   phone: "",
//   subject: "",
//   message: "",
// });

// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);
// const [loading, setLoading] = useState(false);

// const handleChange = (e) => {
//   const { name, value } = e.target;

//   setFormData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

// const submit = async (e) => {
//   e.preventDefault();

//   setSubmitted(false);
//   setError(false);

//   if (
//     !formData.name ||
//     !formData.email ||
//     !formData.phone ||
//     !formData.subject ||
//     !formData.message
//   ) {
//     setError(true);
//     return;
//   }

//   try {
//     setLoading(true);

//     // Replace with your real backend endpoint
//     const res = await fetch("YOUR_API_ENDPOINT", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!res.ok) {
//       throw new Error("Failed");
//     }

//     setSubmitted(true);

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     });
//   } catch (err) {
//     setError(true);
//   } finally {
//     setLoading(false);
//   }
// };

  return (
    <>
      {/* Hero */}

      <section className="contact-hero">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>

        <div className="container hero-content">

          <span className="hero-tag">
            Contact Us
          </span>

          <h1 className="display-3 fw-bold mt-3">
            We'd Love To Hear From You
          </h1>

          <p className="lead">

            Have questions about our products or services?
            Reach out today and our team will gladly assist you.

          </p>

          <Link
            to="/produce"
            className="btn btn-light btn-lg rounded-pill px-4"
          >
            Shop Now
          </Link>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="row g-4">

            {/* Address */}

            <div className="col-lg-4">

              <div className="contact-card">

                <div className="contact-icon pink">

                  <i className="fa-solid fa-location-dot"></i>

                </div>

                <h4>Visit Our Store</h4>

                <p>

                  1, Gbadebo Adekunle Street,
                  Odogunyan,
                  Ikorodu,
                  Lagos State.

                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="col-lg-4">

              <div className="contact-card">

                <div className="contact-icon green">

                  <i className="fa-solid fa-phone-volume"></i>

                </div>

                <h4>Call Us</h4>

                <a
                  href="tel:08020743857"
                  className="text-decoration-none"
                >
                  0802 074 3857
                </a>

              </div>

            </div>

            {/* Email */}

            <div className="col-lg-4">

              <div className="contact-card">

                <div className="contact-icon blue">

                  <i className="fa-solid fa-envelope"></i>

                </div>

                <h4>Email Us</h4>

                <a
                  href="mailto:badiruoluwatoyin11@gmail.com"
                  className="text-decoration-none"
                >
                  badiruoluwatoyin11@gmail.com
                </a>

              </div>

            </div>
            

          </div>

        </div>

      </section>

      
    </>
  );
};

export default Connect;