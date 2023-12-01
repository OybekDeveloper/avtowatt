import Images from "../img/images";
import { motion } from "framer-motion";
import './company.css'

const Company = () => {
  return (
    <div id="company" className="flex pt-[200px] max-sm:pt-0 max-sm:pb-10 justify-between max-md:flex-col">
      <div className="text-container">
        <h1 className="text-5xl">Пациентам</h1>
        <p className="text-base pt-[50px]">
          Если вы представитель частного или государственного медцентра,
          свяжитесь с нами чтобы получить доступ к странице вашей клиники и
          рассказать о ней именно так, как вы считаете нужным
        </p>
        <ul className="t-list list-outside relative pt-[50px]">
          <li className="text-base pt-8 pl-5 ">
            Быстрая запись на конкретное время без звонка через мобильное
            приложение
          </li>
          <li className="text-base pt-8 pl-5 ">
            Выбор на все случаи жизни: от педиатра до онколога, от УЗИ до
            операций
          </li>
          <li className="text-base pt-8 pl-5 ">Будьте в курсе цен, скидок и акций на медицинские услуги</li>
          <li className="text-base pt-8 pl-5 ">
            Клиники и врачи всегда под рукой в мобильном приложении ZorDoc
          </li>
        </ul>
      </div>
      <div className="img  max-sm:hidden">
        <motion.img
          transition={{type:"spring",bounce:0.4, duration:1.5 ,delay:0.4 }}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{once:true,}}
          className="w-full"
          src={Images.img4}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Company;
