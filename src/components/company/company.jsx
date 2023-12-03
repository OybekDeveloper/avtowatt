import Images from "../img/images";
import { motion } from "framer-motion";
import './company.css'

const Company = () => {
  return (
    <div id="company" className="flex max-sm:w-10/12 pt-[100px]  max-sm:pb-10 justify-between max-md:flex-col max-sm:mx-auto">
      <div className="text-container">
        <h1 className="lg:text-5xl md:text-3xl max-md:text-4xl">Пациентам</h1>
        <p className="text-base pt-[50px] max-sm:text-sm">
          Если вы представитель частного или государственного медцентра,
          свяжитесь с нами чтобы получить доступ к странице вашей клиники и
          рассказать о ней именно так, как вы считаете нужным
        </p>
        <ul className="t-list list-outside relative pt-[50px]">
          <li className="text-base lg:pt-8 md:pt-2 max-sm:pt-3 ">
            Быстрая запись на конкретное время без звонка через мобильное
            приложение
          </li>
          <li className="text-base lg:pt-8 md:pt-2 max-sm:pt-3 ">
            Выбор на все случаи жизни: от педиатра до онколога, от УЗИ до
            операций
          </li>
          <li className="text-base lg:pt-8 md:pt-2 max-sm:pt-3 ">Будьте в курсе цен, скидок и акций на медицинские услуги</li>
          <li className="text-base lg:pt-8 md:pt-2 max-sm:pt-3 ">
            Клиники и врачи всегда под рукой в мобильном приложении ZorDoc
          </li>
        </ul>
      </div>
      <div className="max-md:pt-8 max-sm:hidden">
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
