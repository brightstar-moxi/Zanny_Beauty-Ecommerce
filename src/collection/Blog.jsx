import blog1 from "./blog1.jpg";
import blog2 from "./blog2.jpg";
import blog3 from "./blog3.webp";
import blog4 from "./blog4.webp";
import blog5 from "./blog5.jpg";
import blog6 from "./blog6.webp";
import blog7 from "./blog7.webp";
import blog8 from "./blog8.webp";
import blog9 from "./blog9.webp";
import blog10 from "./blog10.jpg";
import blog11 from "./blog11.jpg";
import blog12 from "./blog12.webp";

import Navbar from "./Navbar";
import Footer from "./Footer"


const Blog =()=>{
    return(
    <>
        <Navbar/>
             <main className="text-white"> 
        <div class="container w-100 pt-3 ">
        <h3 className="text-center  pt-4 topic" style={{fontWeight:"bolder",fontSize:"230%"}}> Our Blogs</h3>
                 < div class="row pt-4">
          <div class="col-sm-3">
          <a href="https://www.vizaca.com/most-popular-women-hairstyle-for-2022/"> <div className="maste">
          <div className="pic" style={{height:"40vh",overflowX:"hidden",overflowY:"hidden",textAlign:"center"}}>
          <img style={{width:"100%",height:"40vh"}} src={blog1} alt="frontal8" />
            </div>
            <div className="ove">
            </div>
            </div></a>
            
                <p className="blog">Hairstyle</p>
              <div > <a href="https://www.vizaca.com/most-popular-women-hairstyle-for-2022/" className="para"><strong>
              Most Popular Women Hairstyle For 2022</strong>
              </a>
             <p>At least once, we wanted to change our appearance, to try something new and not like everyone else...</p>
            </div>
            </div>
          
          <div class="col-sm-3">
          <a href="https://www.msn.com/en-gb/lifestyle/style/why-do-people-judge-women-by-their-hair/ar-AA12huMU"> <div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
          <img style={{width:"100%",height:"40vh"}} src={blog2} alt="frontal8" />
            </div>
            <div className="ove">
            
            </div>
            </div></a>
            
            <p className="blog">Lifestyle</p>
              <div className="para"> <a href="https://www.msn.com/en-gb/lifestyle/style/why-do-people-judge-women-by-their-hair/ar-AA12huMU"className="para">
                <strong>Why do people judge women by their hair?</strong></a>
          <p>As is the case with so many things in life, I only really appreciated the significance of hair when I lost all of mine. I was ...</p>
            </div>
            </div>
          
          <div class="col-sm-3">
          <a href="https://www.instyle.com/hair/how-to-keep-hair-healthy-women-over-40"><div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
            <img style={{width:"100%", height:"40vh"}} src={blog3} alt="frontal8" />
            </div>
            <div className="ove">
              
  
            </div>
            </div></a>
            
            <p className="blog">Maintance</p>
              <div className="para"><a href="https://www.instyle.com/hair/how-to-keep-hair-healthy-women-over-40"className="para"> <strong>5 Ways to Have Healthy Hair After Turning 40</strong></a>
             <p>He suggests starting by washing hair every other day and seeing how your hair adapts. For Black women, Ever suggests shampooing weekly, "even ...</p>
             
            </div>
          </div>
          <div class="col-sm-3">
          <a href="https://www.instyle.com/unite-hair-7-seconds-detangler-review-6747021"><div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
           <img style={{width:"100%"}} src={blog4} alt="frontal8" />
            </div>
            <div className="ove">
              
             
            </div>
            </div></a>
            
            <p className="blog">Stories</p>
              <div className="para"><a href="https://www.instyle.com/unite-hair-7-seconds-detangler-review-6747021" className="para"><strong>This Celebrity Hair Stylist-Approved Product Is the Only Thing That Detangles ...</strong></a>
             <p>Celebrity hairstylist Riawna Capri recommended Unite’s 7Seconds Detangler for my knotted hair...</p>
            </div>
          </div>
          </div></div>

          <div class="container w-100 pt-3 ">
        
                 < div class="row pt-4">
          <div class="col-sm-3">
          <a href="https://www.msn.com/en-in/health/other/easy-natural-ways-to-make-your-hair-grow-back/ar-AA124D2j"><div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
           <img style={{width:"100%",height:"40vh"}} src={blog5} alt="frontal8" />
            </div>
            <div className="ove">
            </div>
            </div></a>
            
                <p className="blog">Natural Hair</p>
              <div className="para"> <a href="https://www.msn.com/en-in/health/other/easy-natural-ways-to-make-your-hair-grow-back/ar-AA124D2j" className="para"><strong>
              Easy, natural ways to make your hair grow back</strong>
              </a>
             <p>Hair today is gone tomorrow; a very sad situation arises when we lose hair. Not only does it cause emotional distress but ...</p>
            </div>
            </div>
          
          <div class="col-sm-3">
          <div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
            <a href="https://www.yahoo.com/lifestyle/14-beauty-products-keep-warm-215638524.html"><img style={{width:"100%",height:"40vh"}} src={blog6} alt="frontal8" /></a>
            </div>
            <div className="ove">
            
            </div>
            </div>
            
            <p className="blog">Beauty</p>
              <div className="para"> <a href="https://www.yahoo.com/lifestyle/14-beauty-products-keep-warm-215638524.html" className="para">
                <strong>15 New Beauty Products That Will Keep You Warm and Cozy This Fall.</strong></a>
          <p>The temperatures have dipped low enough that spending a cozy night in wrapped up in a fuzzy blanket with takeout and wine is ...</p>
            </div>
            </div>
          
          <div class="col-sm-3">
          <div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
            <a href="https://www.thetalko.com/tips-to-grow-your-hair-faster-according-to-the-experts/"><img style={{width:"100%",height:"40vh"}} src={blog7} alt="frontal8" /></a>
            </div>
            <div className="ove">
              
             
            </div>
            </div>
            
            <p className="blog">Hair Growth</p>
              <div className="para"><a href="https://www.thetalko.com/tips-to-grow-your-hair-faster-according-to-the-experts/" className="para"> <strong>Tips To Grow Your Hair Faster, According To The Experts</strong></a>
             <p>Just like making any change, working on hair growth takes time and commitment. Incorporate these accessible hair care habits ...</p>
             
            </div>
          </div>
          <div class="col-sm-3">
          <div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
            <a href="https://www.yahoo.com/video/best-dry-scalp-treatments-according-190555574.html"><img style={{width:"100%",height:"40vh"}} src={blog8} alt="frontal8" /></a>
            </div>
            <div className="ove">
              
             
            </div>
            </div>
            
            <p className="blog">Treatment</p>
              <div className="para"> <a href="https://www.yahoo.com/video/best-dry-scalp-treatments-according-190555574.html" className="para"> <strong>The Best Dry Scalp Treatments, According to Hair Experts</strong>
             </a>
             <p>Avalon Organics Therapy Scalp Normalizing Shampoo, Tea Tree Mint This is another product ...</p>
            </div>
          </div>
          </div></div>

          <div class="container w-100 pt-3 ">
      
                 < div class="row pt-1">
          <div class="col-sm-3">
          <div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
            <a href="https://www.thesun.co.uk/fabulous/19998559/hair-bleach-pain-shivers-burns/"><img style={{width:"100%",height:"40vh"}} src={blog9} alt="frontal8" /></a>
            </div>
            <div className="ove">
              
             
            </div>
            </div>
            
                <p className="blog">Pain</p>
              <div className="para"> <a href="https://www.thesun.co.uk/fabulous/19998559/hair-bleach-pain-shivers-burns/" className="para"> <strong>
              I got my hair bleached but ended up with chemical burns & shivers it hurt so much – I still paid full price</strong></a>
              <p>THE phrase ‘beauty is pain’ is always something that rings true when it comes to waxing but one woman has revealed the horror ..</p>
             
            </div>
            </div>
          
          <div class="col-sm-3">
          <div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
            <a href="https://www.msn.com/en-us/health/medical/heres-what-you-need-to-do-to-prevent-hair-loss/ar-AA12bwLf"><img style={{width:"100%",height:"40vh"}} src={blog10} alt="frontal8" /></a>
            </div>
            <div className="ove">
            
            </div>
            </div>
            
            <p className="blog">Hair clinic</p>
              <div className="para"> <a href="https://www.msn.com/en-us/health/medical/heres-what-you-need-to-do-to-prevent-hair-loss/ar-AA12bwLf" className="para"><strong>Here's what you need to do to prevent hair loss</strong></a>
             <p>A Harvard hair loss researcher reveals everything to know about female pattern hair loss treatments — consider this your ...</p>
            
            </div>
            </div>
          
          <div class="col-sm-3">
          <a href="https://www.linkedin.com/pulse/other-nonsurgical-options-best-hair-specialist-doctor-urooj-durrani/"> <div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
          <img style={{width:"100%",height:"40vh"}} src={blog11} alt="frontal8" />
            </div>
            <div className="ove">
              
             
            </div>
            </div></a>
            
            <p className="blog">Hair Specialist</p>
              <div className="para"> <a href="https://www.linkedin.com/pulse/other-nonsurgical-options-best-hair-specialist-doctor-urooj-durrani/" className="para"><strong>The Best Hair Specialist Doctor ?</strong></a>
             <p>Also, a few surgeons prescribe minoxidil (Rogaine), that's a hair-boom drug & Hair Specialist Doctor in Dubai ...</p>
             
            </div>
          </div>
          <div class="col-sm-3">
          <a href="https://hellobeautiful.com/3694171/unreasonable-hairstylist/"> <div className="maste">
          <div className="pic" style={{height:"40vh",overflowY:"hidden",textAlign:"center"}}>
         <img style={{width:"100%",height:"40vh"}} src={blog12} alt="frontal8" />
            </div>
            <div className="ove">
              
             
            </div>
            </div></a>
            
            <p className="blog">Hair stylist</p>
              <div className="para"> <a href="https://hellobeautiful.com/3694171/unreasonable-hairstylist/" className="para"> 
              <strong>A Hairstylist Claims That Clients Shouldn’t Tell Her How To Style Hair And I’m Confused</strong></a>
             <p>The Neighborhood Talk shared an Instagram Stories post from a hairstylist that says clients shouldn’t instruct her on how to ...</p>
            </div>
          </div>
          </div></div>
          </main>
          <Footer/>
          </>
    )
}

export default Blog