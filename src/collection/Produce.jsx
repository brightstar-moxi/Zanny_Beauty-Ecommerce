import Navbar from "./Navbar";

import under1 from "./weavon1.jpg";
import under2 from "./weavon2 fixed.jpg"; 
import under3 from "./weavon3.jpg" ;
import under4 from "./weavon4.jpg"; 
import under5 from "./weavon5.jpg"; 
import under6 from "./weavon6.jpg"; 
import under7 from "./weavon7.jpg"; 
import under8 from "./weavon.jpg";        

import frontal1 from "./front1.jpg";
import frontal2 from "./front2.jpg"; 
import frontal3 from "./front3.jpg" ;
import frontal4 from "./front4.jpg"; 
import frontal5 from "./front5.webp"; 
import frontal6 from "./front6.webp"; 
import frontal7 from "./front7.jpg"; 
import frontal8 from "./front8.jpg";  

import close1 from "./closure8.webp"; 
import close2 from "./closure3.jpg"; 
import close3 from "./closure4.jpg"; 
import close4 from "./closure5.jpg"; 
import close5 from "./closure6.jpg"; 
import close6 from "./closure7.jpg"; 
import close7 from "./closure8.jpg"; 
import close8 from "./closure9.jpg"; 

import foot1 from "./foot1.jpg"; 
import foot2 from "./foot5.png"; 
import foot3 from "./foot2.jpg"; 
import foot4 from "./foot3.jpg"; 
import foot5 from "./foot4.jpg"; 
import foot6 from "./foot6.jpg"; 
import foot7 from "./foot7.jpeg"; 
import foot8 from "./foot8.jpg"; 

import Footer from "./Footer"


const Produce =(props) =>{
const hover="Click On Buy Product, to buy the product"

    return(
        <>
        <Navbar/>
        <h2 style={{textAlign:"center",fontFamily:"roboto",fontWeight:"bolder", color:"darkmagenta"}}> <b>Zanny Beauty Palace hair styles & Products </b> </h2>
        <div style={{width:"90%",margin:"auto",color:"white"}}>
        <p style={{fontSize:"110%",fontFamily:"roboto"}}> This is Zanny Beauty palace is a professional beauty service
         that specialize in the fashioning and treatment of hair. Our responsibilities include cleaning and plaiting hair,
         offering hair care and hair styling consultations, and recommending hair styling products, among other duties. </p>
         <p>These are the product we sell and can help u fix it. </p>
         </div>
        {/* <p style={{textAlign:"center",fontSize:"110%",fontFamily:"roboto"}}>Love Collections sell product at affordable price, when you use our produce you will feel it quality and enjoy it for a long time</p> */}
      <div>
          <h3 className="text-center pt-2 topic"  style={{fontWeight:"bolder",fontSize:"230%"}}>Weavons</h3>
          <div class="container-fluid w-100 pt-2">
         < div class="row">
  <div class="col-sm-3 ">
    <div class="man">
    <div class="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={under1}alt="under1" />
    </div>
    <div className="over">
      
        <div className="text">{hover}</div>
      </div>
      </div>
    <div className="mo" >
      <div className="pr" style={{width:"50%"}}> <strong> Deep body Weave</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
    <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img  style={{width:"100%"}} src={under2} alt="under2" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
  </div>
    <div className="mo" style={{display:"flex", justifyContent:"space-around",paddingTop:"3%"}}>
      <div className="pr"> <strong> Natural Weave</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
    <div className="man">
  <div className="pics " style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img  style={{width:"100%"}} src={under3} alt="under3" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo" >
      <div className="pr"> <strong>4.5mm Curly Weave</strong>  
     </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  <div class="col-sm-3">
    <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={under4} alt="under4" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Body, loose,kinky curly wave</strong>
     </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  
</div>
</div>
<div class="container-fluid w-100 pt-3">
         < div class="row">
  <div class="col-sm-3">
    <div className="man">
    <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={under5}alt="uder5" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong> Loose Wave</strong>
    </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
    <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img  className="zeh"  style={{width:"100%"}} src={under6} alt="under6" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>New Curly Wave</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
    <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={under7} alt="under7" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Kinky Straight wave</strong>
    </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  <div class="col-sm-3">
    <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={under8} alt="under8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Deep Curly wave</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn">Buy product</button></a></div>
    </div>
  </div>
  
</div>
</div>
</div>
{/* perfume oil */}
<div>
          <h3 className="text-center  pt-4 topic" style={{fontWeight:"bolder",fontSize:"230%"}}> Frontals</h3>
          <div class="container-fluid w-100 pt-2">
         < div class="row">
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={frontal4} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong> Frontal</strong>
    </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={frontal8} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong> Frontal</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={frontal2} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>  Frontal</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={frontal3} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong> Frontal</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  
</div>
</div>
<div class="container-fluid w-100 pt-3">
         < div class="row">
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={frontal1} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong> Frontal</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={frontal5} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>  Frontal</strong>
    </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={frontal6} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr" style={{width:"50%",textAlign:"center"}}> <strong> Frontal</strong>
     </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={frontal7} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div  className="w-50 text-center pr"> <strong>  Frontal</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn">Buy product</button></a></div>
    </div>
  </div>

  
  
</div>
</div>
</div>
<div class="container-fluid w-100 pt-3">
<h3 className="text-center  pt-4 topic" style={{fontWeight:"bolder",fontSize:"230%"}}> Closures</h3>
         < div class="row pt-2">
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={close1} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Closure</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={close2} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong> Closure</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={close3} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Closure</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={close4} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Closure</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn">Buy product</button></a></div>
    </div>
  </div>
  </div></div>

  <div class="container-fluid w-100 pt-3">
         < div class="row">
  <div class="col-sm-3">
    <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={close5} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Closure</strong>
    </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={close6} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Closure</strong>
     </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={close7} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Closure</strong>
     </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={close8} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Closure</strong>
     </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn">Buy product</button></a></div>
    </div>
  </div>
  </div></div>


  {/* lingeries */}

  <h3 className="text-center  pt-4 topic" style={{fontWeight:"bolder",fontSize:"230%"}}> Footwares</h3> 
  <div class="container-fluid w-100 pt-3">
         < div class="row">
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={foot1} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="w-50 pr"> <strong>Hill sandal</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={foot2} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="w-50 pr"> <strong> Women hill</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%",height:"100%"}} src={foot3} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Sandal </strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={foot4} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong> Sandal</strong>
     </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn">Buy product</button></a></div>
    </div>
  </div>
  </div></div>

  <div class="container-fluid w-100 pt-3">
         < div class="row">
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={foot5} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr" > <strong>Neat Sandal</strong>
     </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={foot6} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong> Ladies Flat shoe</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
    </div>
  
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={foot7} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="pr"> <strong>Snickers</strong>
     </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn"> Buy product</button></a></div>
    </div>
  </div>
  <div class="col-sm-3">
  <div className="man">
  <div className="pics" style={{height:"30vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"100%"}} src={foot8} alt="frontal8" />
    </div>
    <div className="over">
      
      <div className="text">{hover}</div>
    </div>
    </div>
    <div className="mo">
      <div className="w-50 pr"> <strong>Snickers</strong>
      </div>
      <div><a href="https://wa.me/08020743857"><button className="bt btn">Buy product</button></a></div>
    </div>
  </div>
  </div></div>

  <Footer/>
        </>
    )
}

export default Produce