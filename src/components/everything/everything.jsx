import Images from "..//img/images";
import { motion } from "framer-motion";
import './everything.css'
const  Everything = () => {
  return (
    <div id="everything" className="pt-[100px] flex justify-between max-sm:w-10/12 mx-auto">
      <div className="img flex flex-row  items-start max-sm:hidden ">
        <motion.img
          transition={{type: "spring",bounce:0.2, duration: 0.5,}}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true,amount:.3}}
          className="w-[300px] max-lg:w-[250px] relative "
          src={Images.img1}
          alt=""
        />
        <motion.img
          transition={{ type:'spring',bounce:0.1,duration: 1,}}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true,amount:0.4}}
          className="w-[600px] max-xl:w-[400px] max-lg:w-[300px] left-[200px] absolute max-md:hidden"
          src={Images.img2}
          alt=""
        />
      </div>
      <div className=" w-1/2 max-sm:w-full text-container flex flex-col justify-between items-end max-md:items-center">
        <h1 className="text-5xl">Пациентам</h1>
        <ul className="t-list list-inside relative w-1/2 max-sm:w-full">
          <li className="text-base pt-7">
            Быстрая запись на конкретное время без звонка через мобильное
            приложение
          </li>
          <li className="text-base pt-7">
            Выбор на все случаи жизни: от педиатра до онколога, от УЗИ до
            операций
          </li>
          <li className="text-base pt-7">Будьте в курсе цен, скидок и акций на медицинские услуги</li>
          <li className="text-base pt-7">
            Клиники и врачи всегда под рукой в мобильном приложении ZorDoc
          </li>
        </ul>
        <div className="flex justify-center items-center ">
        {/* <motion.img
          transition={{type:'spring',bounce:.4, duration:0.8 , delay:0.8}}
          initial={{ y: 200, opacity: 0 }}
          viewport={{ once: true,amount:.4}}
          animate={{ y: 0, opacity: 1 }}
          className="  max-sm:w-[180px] max-sm:block hidden"
          src={Images.img2}
          alt=""
        /> */}
        {/* <motion.img
          transition={{type:'spring', duration:1.5, delay: 0.4 }}
          viewport={{ once: true}}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          src={Images.img3}
          alt=""
          className="max-sm:w-full max-sm:left-0 " 
        /> */}
        
        </div>
        
      </div>
    </div>
  );
};

export default Everything;
