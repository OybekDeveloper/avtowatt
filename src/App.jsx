// App.js
import Connects from "./components/connects/connects";
import Company from "./components/company/company";
import Everything from "./components/everything/everything";
import Main from "./components/main/main";
import Possibilities from "./components/possibilities/possibilities";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import './index.css'
import Navbar from "./navbar/navbar";
import { motion, useAnimation } from 'framer-motion'
// import Test from './components/test'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  console.log(isOpen);

  const handleItemClick = () => {
    controls.start({
      x: isOpen ? '100%' : 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    });
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
        <motion.div
        initial={{ opacity: 1, x: '100%' }}
        animate={{ opacity: 1, x: isOpen ? 0 : '100%' }}
        exit={{ opacity: 1, x: '100%' }}  
        transition={{ duration: 0.5 }}
          className={`max-lg:flex hidden max-lg:fixed max-lg:bg-slate-500 max-lg:flex-col top-0 max-lg:w-[400px] max-sm:w-full max-lg:h-screen right-0  text-[16px] font-medium z-[10000]`}>
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
            <IoMdClose onClick={() => setIsOpen(!isOpen)} size={40} />
          </div>
          <ul className="p-[20px] flex gap-7 flex-col text-xl">
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-500 hover:scale-105 transition-all">
              <a href="#header">О нас</a>
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-500 hover:scale-105 transition-all">
              <a href="#possibilities">Возможности</a>
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-500 hover:scale-105 transition-all">
              <a href="#everything">Пациентам</a>
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-500 hover:scale-105 transition-all">
              <a href="#company">Клиникам</a>
            </li>
          </ul>
          <div className="absolute bottom-0 p-[20px] w-full">
            <a className="" href="#connect">
              <button onClick={() => setIsOpen(false)} className="btn w-full">Оставить заявку</button>
            </a>
          </div>
        </motion.div>
      <div className="container w-10/12 max-sm:w-full relative mx-auto    ">
        <Navbar handleItemClick={handleItemClick} />
        <Main />
        {/* <Test />   */}

        <Possibilities />
        <Everything />
        <Company />
        <Services />
        <Connects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
