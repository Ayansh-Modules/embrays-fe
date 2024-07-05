import { RxCross2 } from "react-icons/rx";
import React, { useRef } from "react";
function Drawer({ children, isOpen, setIsOpen }) {
  const drawerRef = useRef();
  const closeDrawer = (e)=>{
    if(drawerRef.current === e.target){
      setIsOpen(false)
    }
  }
  return (
    <main onclick ={closeDrawer}
      className={ 
        " fixed overflow-hidden z-10 bg-Layoutblue bg-opacity-90 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {/* <header className="p-4 font-bold text-lg">x</header> */}
          <RxCross2 onClick={()=>{setIsOpen(false)}} className="m-[20px] h-[20px] w-[20px] text-white "/>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}

export default Drawer;
