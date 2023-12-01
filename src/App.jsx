// App.js
import Connects from "./components/connects/connects";
import Company from "./components/company/company";
import Everything from "./components/everything/everything";
import Main from "./components/main/main";
import Navbar from "./components/navbar/Navbar";
import Possibilities from "./components/possibilities/possibilities";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import './index.css'


function App() {
  const [isOpen, setIsOpen]=useState(false);
  return (
    <div className="relative">
      {isOpen && (
         <div className={`max-lg:flex hidden max-lg:fixed max-lg:bg-slate-500 max-lg:flex-col top-0 max-lg:w-[400px] max-sm:w-full max-lg:h-screen right-0  text-[16px] font-medium z-[10000]`}>
         <div className="flex justify-between items-center p-[20px] max-sm:px-0">
           <a href="#header">
             <div className="flex justify-center items-center ">
               <img
                 className="w-[50px] rounded-full"
                 src="https://play-lh.googleusercontent.com/3zgH541BsdkYHuQOZl6YiOu9KmCj3EbUrlleZFTRtjrOZ-e-BgvkGV1UqM9fQtTvLRI"
                 alt="logo"
               />
               <p className="text-3xl font-bold">AvtoWatt</p>
             </div>
           </a>
           <IoMdClose onClick={()=>setIsOpen(!isOpen)} size={40}/>
         </div>
         <ul className="p-[20px] flex gap-7 flex-col text-xl">
           <li onClick={()=>setIsOpen(false)} className="hover:text-blue-500 hover:scale-105 transition-all">
             <a href="#header">О нас</a>
           </li>
           <li onClick={()=>setIsOpen(false)} className="hover:text-blue-500 hover:scale-105 transition-all">
             <a href="#possibilities">Возможности</a>
           </li>
           <li onClick={()=>setIsOpen(false)} className="hover:text-blue-500 hover:scale-105 transition-all">
             <a href="#everything">Пациентам</a>
           </li>
           <li onClick={()=>setIsOpen(false)} className="hover:text-blue-500 hover:scale-105 transition-all">
             <a href="#company">Клиникам</a>
           </li>
         </ul>
         <div className="absolute bottom-0 p-[20px] w-full">
           <a className="" href="#connect">
             <button onClick={()=>setIsOpen(false)} className="btn w-full">Оставить заявку</button>
           </a>
         </div>
       </div>
  )}
      <div className="container w-10/12 max-sm:w-full relative mx-auto ">
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        <div className="max-sm:px-4">
        <Main />
        <Possibilities />
        <Everything />
        <Company />
        <Services />
        <Connects />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
