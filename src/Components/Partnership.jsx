import React from "react";
import amazon from "../assets/Images/partners_img/amazon.webp";
import googleCloud from "../assets/Images/partners_img/google-cloud.svg";
import razorpay from "../assets/Images/partners_img/razorpay.webp";
import stripe from "../assets/Images/partners_img/stripe.svg";
import vercel from "../assets/Images/partners_img/vercel.webp";
function Partnership() {
  return (
    <div className="h-[35vh] w-[100vw] bg-Layoutyellow flex items-center justify-center overflow-x-hidden overflow-y-auto">
      
        <div className="container flex-col flex items-center justify-center">
          <div
            class="title_group text_center"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <h2 className="title text-4xl font-bold">Our Top Partners</h2>
          </div>
          
            <div className=" flex-row flex items-center justify-center  mt-[20px] ">
              <img src={stripe} alt="stripe" className="h-[60px] w-[100px] mr-[50px]" />
              <img src={vercel} alt="vercel" className="h-[30px] w-[120px] mr-[50px]"/>
              <img src={razorpay} alt="razorpay"className="h-[35px] w-[150px] mr-[50px]" />
              <img src={amazon} alt="amazon" className="h-[60px] w-[120px] mr-[30px] mt-[20px]" />
              <img src={googleCloud} alt="google cloud" className="mr-[50px] h-[40px] w-[100px]" />
            </div>
        
        </div>
     
    </div>
  );
}

export default Partnership;
