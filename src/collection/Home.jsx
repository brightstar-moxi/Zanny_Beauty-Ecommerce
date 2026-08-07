 import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import Connect from "./Connect"
import perfume from "./new_up-removebg-preview.png"
import perfume2 from "./new_update_2-removebg-preview.png"
 import perfume3 from "./background6-removebg-preview.png"
 import perfume4 from "./new_update_1-removebg.png"

import lin from "./weavon.jpg"
import lin2 from "./fronter.jpg"
import lin3 from "./closure.jpg"
import Footer from "./Footer"

const Home =() =>{
  
    return(
    <>
      <Navbar/>
      

        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner caropix">
    <div class="carousel-item active" style={{height:"65vh",overflowY:"hidden"}}>
    <div className="brown" style={{width:"100%",padding:"0%"}}>
        <div class="container-fluid mt-0">
  <div class="row">
    <div class=" col-sm-6  text-center  d-none d-sm-block" style={{marginTop:"15%",color:"darkmagenta"}}>
    <strong style={{fontSize:"240%",fontFamily:"monospace"}}>  <i> ZANNY BEAUTY PALACE </i></strong>
    <p style={{fontSize:"180%",fontFamily:"verdana"}}>Making beauty with passion</p>
    </div>
    <div class="col-sm-6  pt-0">
      <div className="w-100"> 
     <img style={{width:"100%"}} src={perfume} class="d-block w-100"alt="this is data" />
     </div>
    </div>
   
  </div>
</div>
        </div>
    </div>
    <div class="carousel-item"  style={{height:"65vh",overflowY:"hidden"}}>
    <div className="purple" style={{width:"100%",padding:"0%",backgroundColor:"darkmagenta"}}>
        <div class="container-fluid mt-0">
  <div class="row">
    <div class=" col-sm-6  text-center  d-none d-sm-block" style={{marginTop:"15%",color:"hotpink"}}>
    <strong style={{fontSize:"200%",fontFamily:"roboto"}}>  <i> ZANNY BEAUTY PALACE </i></strong>
    <p style={{fontSize:"180%",fontFamily:"verdana"}}>Making beauty with passion</p>
    </div>
    <div class="col-sm-6  pt-0">
      <div className="w-100"> 
     <img style={{width:"100%"}} src={perfume2} class="d-block w-100"alt="this is data" />
     </div>
    </div>
   
  </div>
</div>
        </div>
        
    </div>

    <div class="carousel-item "  style={{height:"65vh"}}>
    <div className="blue" style={{width:"100%",padding:"0%",backgroundColor:"darkblue"}}>
        <div class="container-fluid mt-0 ">
  <div class="row">
    <div class=" col-sm-6  text-center  d-none d-sm-block" style={{marginTop:"15%",color:"darkmagenta"}}>
    <strong style={{fontSize:"200%",fontFamily:"roboto"}}>  <i> ZANNY BEAUTY PALACE </i></strong>
    <p style={{fontSize:"180%",fontFamily:"verdana"}}>Making beauty with passion</p>
    </div>
    <div class="col-sm-6  pt-0 caropix">
      <div className="w-120 " > 
     <img  style={{width:"134%"}} src={perfume3} class="d-block w-100"alt="this is data" />
     </div>
    </div>
   
  </div>
</div>
        </div>
    </div>
 
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        <div class="container mt-4" >
    <div class="  text-center  " style={{color:"darkmagenta"}} >
    <h2  style={{fontFamily:"roboto",fontWeight:"bolder"}}>WE are here to make you look like a queen</h2>
    <strong style={{fontSize:"200%",fontFamily:"roboto"}}><i> ZANNY BEAUTY PALACE is an hair stylist plateform where we sell different type of hair care and make you beautiful </i></strong>
    <p style={{fontSize:"140%",fontFamily:"roboto"}}>we plait hair and sell different products for your hair to be shinnig at affordable price</p>
    </div>
  </div>
  
{/* row and colum of lingeries*/}
  <div class="container-fluid pt-3" style={{backgroundColor:"pin"}}>
  <div class="row" >
    <div class=" col-md-4  text-center "  >
    <div>
    
      <img src={lin} class="d-block w-100" alt="..."/>      
    </div>
   

 
      <strong style={{fontSize:"200%",fontFamily:"verdana",color:"white"}}>Weavon</strong>
    
    </div>
    {/* perfum */}
    <div class=" col-md-4  text-center "  >
    <div>
    
      <img src={lin2} class="d-block w-100" alt="..."/>      
    </div>
   

 
      <strong style={{fontSize:"200%",fontFamily:"verdana",color:"white"}}>Frontal</strong>
    
    </div>

    {/* Mist */}
    <div class=" col-md-4  text-center "  >
    <div>
    
      <img src={lin3} class="d-block w-100" alt="..."/>      
    </div>
   

 
      <strong style={{fontSize:"200%",fontFamily:"verdana",color:"white"}}>Closure</strong>
    
    </div>


  </div>
</div >
{/* <div style={{marginTop:"2%", display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}} >
 
  
</div> */}
<div class=" wat card mx-auto mt-3 " style={{width:"55%",border:"none",fontSize:"130%",fontFamily:"verdana",backgroundColor:"hotpink",color:"white"}} >

  <div class="card-body">
  <div className="w-100 text-center">
<Link to={"/produce"}>
<button className=" bt btn pb-1"><b>see more ...</b></button>
</Link>
</div>
  </div>
  </div>
  <div class="container-fluid pt-3 text-white" style={{backgroundColor:"darkmagenta"}}>
  <div class="row" >
  <h3 className="text-center" style={{fontWeight:"bolder"}}>Benefit of patronizing with us</h3>
    <div class=" col-md-6 pt-4 "  >


<ul>
  
  <li style={{fontSize:"150%"}}><b> Stress Relief </b></li>
  <p>You will always feel confortable. </p>
  <li style={{fontSize:"150%"}}><b> Look Attractive</b></li>
  <p>You will always look more atrractive, pretty when you patronize with us. we will give the best and make sure you look atrractive</p>
  <li style={{fontSize:"150%"}}><b> Manage Frizzy Hair </b></li>
  <p>Frizzy hair requires a lot of effort to manage properly, especially at home. If you just let it dry on its own after washing it then it will get frizzy really fast and look very unattractive and dull. 
    We knows how to manage frizzy hair and we will be able to teach you how to do that as well. Visiting a us regularly will help get rid of frizzy hair issues once and for all.</p>
    <p>There many Benefit of patronizing with us.Everybody desires to have a head full of hair, which is perfect in texture, colour, and length, as well. Taking care of our hair is not an easy task, especially when we do not even know what exactly is wrong with our hair. Doing the basics like shampooing and oiling our hair is definitely very important,
       but there are still a lot of other treatments and procedures which we need to give our hair in order to make it more nourished and stronger as well.</p>
</ul>
</div>
<div class=" col-md-6 pt-4 "  >
  <div>
  <img className="w-100" src={perfume4} alt="patronise with us" />
  </div>
  </div>
</div>
</div>
<div >
 
<div class="trans">
       <h1 className="text-center pt-3 text-white">Buy more product from us, pay less</h1>
    </div>
   
  </div>

    
 
  
  
  <div class="container-fluid pt-3 text-white" style={{backgroundColor:"darkmagenta"}}>
  <div class="row" >
  <h3 className="text-center" style={{fontWeight:"bolder"}}> Our Services</h3>
    <div class=" col-md-6 pt-4 "  >
    <div>
  <img className="w-100" src={perfume4} alt="patronise with us" />
  </div>
</div>
<div class=" col-md-6 pt-4 "  >
<ul>
  
  <li style={{fontSize:"150%"}}><b> Fixing Service </b></li>
  <p>Hair fix service treatment is non-surgical, where a patch of hair is placed in the area where baldness has occurred.
    Zanny Beauty Palace provides customized solution for hair fixing in Bangalore to meet the individual’s requirement and to match the colour and characteristics of the real hair.We have all types of hair wigs and hair extensions for women, like human hair wigs and synthetic hair wigs.</p>
  <li style={{fontSize:"150%"}}><b> Hair Styling Service  </b></li>
  <p>Hair stylists are beauty service professionals who specialize in the fashioning and treatment of hair.
     Hair stylist responsibilities include cleaning and cutting hair, offering hair care and hair styling consultations, and recommending hair styling products, among other duties</p>
  <li style={{fontSize:"150%"}}><b>Healthy Scalp Treatment </b></li>
  <p>Many hair problems, such as lack of volume, dull hair, or dandruff, are caused by problems with the scalp.
     Dry scalp is the root cause that often goes ignored when trying to treat these major hair problems. </p>
    <p>You should definitely consider adding a scalp treatment to your express salon services.This can help stimulate cells in the scalp and increase circulation. </p>
</ul>
<div className="w-100 text-center">
<Link to={"/porfolio"}>
<button className=" bt btn pb-1"><b>see more ...</b></button>
</Link>
</div>
  </div>
  
</div>
</div>
<div ></div>
  <div class="container text-center text-white mt-2 about" style={{fontFamily:"roboto"}} >
  <h1>About</h1>
  <p style={{fontFamily:"roboto",fontSize:"130%"}}>ZANNY BEAUTY PALACE ( Z.B.P) is an hair stylist plateform whereby we sell different product for hair hygiene and make you look atrractive to the world. Come and make beauty with passion, you will always feel happy to patronize with us.  </p>
  <p  style={{fontFamily:"roboto",fontSize:"130%"}}>Our product is the best ever. when using our product you will never regrate because is appreciative to use. <b>USE OUR PRODUCT AND SMILE  ....</b> </p>
   <Link to={"/about"}><button className="btn  text-light" style={{backgroundColor:"deeppink"}}> <b>see more</b></button></Link>
</div>




 <Connect/>
 
 <Footer/>

        </>
    )
}
export default Home