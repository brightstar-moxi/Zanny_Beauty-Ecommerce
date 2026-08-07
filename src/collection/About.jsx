import { Link } from "react-router-dom"

// import perfs from "./p.jpeg"
import pro from "./eni.jpg"
import pro2 from "./john.jpg"
import pro3 from "./joy.jpg"
import Navbar from "./Navbar"

const About =()=>{
    return(
        <>
        <Navbar/>
<div className="about">
    <div style={{width:"100%",backgroundColor:"rgba(0,0,0,0.680)",color:"white"}}>
      <div className="text-center"><strong style={{fontSize:"50px"}}> About My Product
    </strong></div>
    <div className="ms-5" style={{width:"85%",fontSize:"110%"}}><p>ZANNY BEAUTY PALACE is a creative hairstylist with an eye of designs for the position of hair styles. Our duties include consulting clients on hair styling options, 
      describing the benefits of different hair care products, persuading clients to buy their retail products, and staying updated on the latest hair trends and styling methods. </p>
    <p>Additionally, ZANNY BEAUTY PALACE  expert "people persons" to attract and retain long-term customers. This is to let us know that we are good interpersonal and conversational skills. 
    Blessed are the hairstylists, for we bring out the beauty in others.
    </p>
    </div> 
    <div className="text-white ms-5">   
              <h2>Our Responsibilities</h2>
              <ul className="me-3 ">
                <li> We Consult with clients on stylistic options for their hair.</li>
                <li>We Listen to clients' needs to determine their preferences.</li>
                <li> Shampooing, fixing, and dressing hair.</li>
                <li> we Describe different hair care products and their benefits.</li>
                <li>We Build a personal relationship with clients to ensure return visits.</li>
                <li> We Manage bookings and welcoming clients into the store.</li>
                <li>We always Keep updated on hairstyle trends and styling methods.</li>
              </ul>
   
              </div>
    
    <h1 className="text-center" style={{marginBottom:"0px"}}>Feedback from our customer</h1>
    </div>
    </div>
    <div  className="ba" style={{color:"white",textAlign:"center"}}>
    
    <div class="container w-100 pt-2 ">

      
         < div class="row">
 
    
  
  <div class="col-sm-4">
  <div style={{height:"25vh",overflowY:"hidden",textAlign:"center"}}>
    <img  style={{width:"60%"}} src={pro} alt="under2" />
    </div>
    <div style={{paddingTop:"3%"}}>
      <div> <strong> Sis. Eniola </strong>
      <p>Zanny Beauty Palace is an hairstylist that dress my hair very neat and make me look attractive to the world. </p></div>
    
    </div>
    </div>
  
  <div class="col-sm-4">
  <div style={{height:"25vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"70%"}} src={pro2} alt="under3" />
    </div>
    <div style={{display:"flex", justifyContent:"space-around",paddingTop:"3%"}}>
      <div> <strong> Mrs Peter</strong>
      <p>Wow, What a wounderful hairstylist, i'm so happy for dressing my hair here. </p></div>
     
    </div>
  </div>
  <div class="col-sm-4">
  <div style={{height:"25vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"58%"}} src={pro3} alt="under4" />
    </div>
    <div style={{display:"flex", justifyContent:"space-around",paddingTop:"3%"}}>
      <div> <strong> Sis. Favour</strong>
      <p>I love Zanny Beauty Palace product, it is nice for me.</p></div>
     
    </div>
  </div>
  
</div>
</div>
<div className="mt-5">
    <strong>Buy our product now and enjoy it quailty</strong>

    <p>You can also contact us by clicking the bottton below</p>
   <Link to={"/contact"}> <button className="btn text-white" style={{backgroundColor:"deeppink"}}>Contact Us</button> </Link>
    </div>

   </div>

</>
    )
}
export default About