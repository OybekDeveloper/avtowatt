// main.js

import './main.css'
import { motion } from "framer-motion";

const Main = () => {
  
  const Variants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div id={"header"} className="flex pt-[200px] max-md:pt-[100px] max-md:flex-col max-xl:items-center justify-between h-screen">
      <div className="flex flex-col w-1/2 max-md:w-full items-start max-md:items-center justify-center max-md:mx-auto">
        <p className="textResponsive text-4xl py-[20px]">
          ZorDoc — медицинский сервис записи
          пациентов в клинику
        </p>
        <p className="textResponsive2 text-2xl max-md:mb-[20px] mb-[100px] whitespace-wrap mt-10">
          Первое мобильное приложение в Узбекистане по поиску врачей и услуг
          Первое мобильное приложение  в Узбекистане по поиску врачей и услуг
        </p>
        <div className="w-[500px] max-lg:w-[300px] max-md:w-full gap-8 grid grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-2 p-3 rounded-lg mt-16 ">
          <img
            className="w-[200px] max-lg:mx-auto transition-transform transform hover:scale-110 hover:shadow-2xl"
            src="https://zordoc.uz/img/app-store.png"
            alt="playmarket"
          />
          <img
            className="w-[200px] max-lg:mx-auto transition-transform transform hover:scale-110 hover:shadow-2xl"
            src="https://zordoc.uz/img/google-play.png"
            alt="playstore"
          />
        </div>
      </div>
      <div className="w-1/2 max-md:w-full max-md:top-10 flex justify-center items-center relative">
        <motion.img
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={Variants}
          initial={"initial"}
          animate={"animate"}
          className="w-[250px] max-xl:w-[220px] max-sm:w-[150px] absolute max-sm:right-[180px] max-md:right-[220px] max-xl:right-[150px] right-[300px] z-30 "
          src="https://zordoc.uz/img/intro/img3.png  "
          alt="img"
        />
        <motion.img
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={Variants}
          initial={"initial"}
          animate={"animate"}
          className="w-[300px] max-xl:w-[240px] max-sm:w-[160px]  absolute max-sm:right-[80px] max-md:right-[120px] max-xl:right-[50px] right-[150px] z-20"
          src="https://zordoc.uz/img/intro/img2.png"
          alt="img"
        />
        <motion.img
          transition={{ duration: 0.5, delay: 0 }}
          variants={Variants}
          initial={"initial"}
          animate={"animate"}
          className="w-[280px] max-xl:w-[220px] max-sm:w-[150px]  absolute max-sm:right-[30px] max-md:right-[70px]  right-0 "
          src="https://zordoc.uz/img/intro/img1.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Main;
