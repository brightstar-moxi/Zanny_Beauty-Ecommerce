

const Footer =()=>{

    return(
        <footer className="we w-100  mt-3">
            {/* <div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap",width:"110%", margin:"auto"}}>
            <div style={{margin:"10px",width:"50%",backgroundColor:"yellow"}}>
               
</div>


<div style={{margin:"10px",width:"100%"}}>&copy; ifeoluwa 2022</div>
            </div> */}
            <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginLeft:"12%",width:"80%"}}>
   
                
                <div style={{margin:"20px",width:"20%"}}>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <a href={"https://www.instagram.com/badiruhewahtormilolar"}>
                    <div style={{margin:"10px"}}>  <i class="fa fa-instagram" aria-hidden="true" style={{fontSize:"30px",color:"white"}}></i></div></a>
                   <div style={{margin:"10px"}}>  <i class="fa fa-telegram" aria-hidden="true" style={{fontSize:"30px",color:"white"}}></i></div>
<a href={"https://www.facebook.com/mheeydheey"}><div style={{margin:"10px"}}>
               <i class="fa fa-facebook" aria-hidden="true"style={{fontSize:"30px",color:"white"}}></i>
                </div></a>
                 <div style={{margin:"10px"}}>
              <i class="fa fa-twitter" aria-hidden="true" style={{fontSize:"30px",color:"white"}}></i>
                </div>
                </div>
  </div>
  <div style={{margin:"20px"}}>
  <div style={{margin:"10px",width:"100%",color:"white",fontSize:"152%",fontWeight:"bolder",fontFamily:"roboto"}}> <strong>ZANNY BEAUTY PALACE</strong> </div>  
  </div>
  <div style={{margin:"20px"}}>
  <div style={{margin:"10px",width:"100%",color:"white"}}>&copy; 2022  All Right | Oluwatoyin</div> 
  </div>
  </div>
        </footer>
    )
}

export default Footer