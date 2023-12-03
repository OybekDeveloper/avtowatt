import Images from "../img/images";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div className="flex  pb-[50px] flex-col justify-center items-center">
      <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl mb-[50px]">
        Почему клиники сотрудничают с ZorDoc
      </h1>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10">
        <div className="flex items-center">
          <motion.img
            transition={{type:'spring',duration: 0.5, delay: 0.5 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true, }}
            src={Images.icon1}
            alt="icon1"
          />
          <motion.p
            transition={{type:'spring', duration: 0.5, delay: 0.5 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
          >
            Многократный рост записей
          </motion.p>
        </div>
        <div className="flex items-center">
          <motion.img
            transition={{type:'spring', duration: 0.5, delay: 0.6 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
            src={Images.icon2}
            alt="icon2"
          />
          <motion.p
            transition={{type:'spring', duration: 0.5, delay: 0.6 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
          >
            Гибкие тарифы
          </motion.p>
        </div>
        <div className="flex items-center">
          <motion.img
            transition={{type:'spring', duration: 0.5, delay: 0.7 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
            src={Images.icon3}
            alt="icon3"
          />
          <motion.p
            transition={{type:'spring', duration: 0.5, delay: 0.7 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
          >
            Увеличение потока пациентов на приемы, услуги и диагностику
          </motion.p>
        </div>
        <div className="flex items-center">
          <motion.img
            transition={{ type:'spring',duration: 0.5, delay: 0.8 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
            src={Images.icon4}
            alt="icon4"
          />
          <motion.p
            transition={{type:"spring", duration: 0.5, delay: 0.8 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
          >
            Мы адаптируем тарифы под тип клиники
          </motion.p>
        </div>
        <div className="flex items-center">
          <motion.img
            transition={{type:'spring', duration: 0.5, delay: 0.9 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
            src={Images.icon5}
            alt="icon5"
          />
          <motion.p
            transition={{type:'spring', duration: 0.5, delay: 0.9 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
          >
            Альтернативный недорогой канал маркетинга и снижение затрат на
            привлечение пациентов
          </motion.p>
        </div>
        <div className="flex items-center">
          <motion.img
            transition={{type:'spring', duration: 0.5, delay: 1 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
            src={Images.icon6}
            alt="icon6"
          />
          <motion.p
            transition={{type:'spring', duration: 0.5, delay: 1 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true,}}
          >
            Удобная CRM система для просмотра заявок пациентов с детальной
            статистикой
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Services;
