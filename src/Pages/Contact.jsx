import React from "react";
import Button from "../Components/Button";
import BlogCard from "./Blogs/BlogCard";

function Contact() {
  // open = props.OpenSnackbar
  // close = props.onClose

  return (
    <div
      id="contactus"
      className=" w-full flex-col flex overflow-hidden items-center justify-evenly max-md:justify-start max-md:items-start max-md:flex-col max-sm:flex-col  pt-5   max-md:px-5"
    >
      <p className='w-[95vw] flex-col flex justify-start  '>
            <p className='text-3xl font-semibold text-Layoutblue'>Latest Blog</p>
            <p className='text-base py-5'>The latest industry news , interviews , tecnologies and resources</p>
        </p>
      {/* <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form> */}
      <div
        className=" flex-col flex items-center  justify-evenly"
        data-aos="fade-left"
        data-aos-easing="ease"
      >
        {/* <form name="contact" method="POST">
          <div className="flex max-md:flex-col ">
          <div className="Name pr-3 py-2">
          <label
              htmlFor="default-input"
              className="block m-2 text-sm font-medium  text-white "
            >
              Your Name
            </label>
            <input
          
              type="text"
              name="name"
              id="default-input"
              className="bg-white  max-md:w-[80vw]  text-black text-sm rounded-xl   block w-[15vw] p-2.5 "
            />
          </div>
          <div className="Mail py-2">
          <label
              htmlFor="default-input"
              className="block m-2 text-sm font-medium  text-white"
            >
              Your Email
            </label>
            <input
           
              type="text"
              name="email"
              id="default-input"
              className="  max-md:w-[80vw]  text-black text-sm rounded-xl  w-[15vw] p-2.5 "
            />
          </div>
          </div>
          <div  className="Message  pt-1">
          <label
              htmlFor="default-input"
              className="block m-2 text-sm font-medium  text-white"
            >
            Message For Us
            </label>
            <textarea 
          
              name="message"
              id="message"
              rows="4"
              className=" w-[31vw]  max-md:w-[80vw] p-2  text-black text-sm rounded-xl  h-[20vh]p-2.5   "
            ></textarea>
          </div>
          <div className=" ml-1 flex items-center">
            <button
              type="button "
              className=" max-md:w-[75vw] text-white bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[30vw]"
            >
              Submit
            </button>
            <Button text={"LET'S CONNECT"}/>
          </div>
        </form> */}
        <div className="flex">
          <span className="m-5">
            <BlogCard />
          </span>
          <span className="m-5">
            <BlogCard />
          </span>
          <span className="m-5">
            <BlogCard />
          </span>
        </div>

        <div className="flex justify-end w-[95vw] pb-5 ">
          <a href="/blog">
            <Button text={"VIEW ALL POSTS"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
