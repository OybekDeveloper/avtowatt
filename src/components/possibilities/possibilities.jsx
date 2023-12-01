import Images from "../img/images";
import { motion } from "framer-motion";
const Possibilities = () => {
  const Variants1 = {
    offscreen: {
      x:0,
      opacity:0,
    },
    onscreen: {
      x:100,
      opacity:1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      }
    }
  };
  const Variants2 = {
    offscreen: {
      x:100,
      opacity:0,
    },
    onscreen: {
      x:0,
      opacity:1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      }
    }
  };
  return (
    <div
      id={"possibilities"}
      className="pt-[100px]  max-md:mt-[100px] container"
    >
      <h1 className="text-4xl font-bold text-center">Возможности</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="content w-[500px] max-sm:w-[400px] mr-[200px] max-xl:mr-[100px] max-sm:mr-0 pt-[150px] relative ">
          <p className="text-3xl max-md:text-2xl max-sm:text-3xl text-green-400 p-5 text-right">
            Всегда под рукой
          </p>
          <div className="text-xl p-10 max-xl:p-8 max-lg:p-5  bg-green-200 text-black rounded-md text-right flex justify-end">
            <p className="w-1/2 text-left text-xl max-lg:text-base">
              Удобное мобильное приложение
            </p>
          </div>
          <div>
            <motion.img
              variants={Variants1}
              viewport={{ once: true, amount:.1 }}
              initial={"offscreen"}
              whileInView="onscreen"  
              className="absolute w-[300px] max-xl:w-[250px] max-sm:w-[200px] top-0 right-[400px] max-sm:right-[370px] max-sm:mt-[100px]"
              src={Images.image1}
              alt="Image 1"
            />
          </div>
        </div>
        <div className="content  w-[500px] max-sm:w-[400px] ml-[200px] max-xl:ml-[100px] max-sm:ml-0  pt-[150px] relative ">
          <p className="text-3xl max-md:text-2xl max-sm:text-3xl text-green-400 p-5 text-left">
            Только профессионалы
          </p>
          <div className="flex justify-start text-xl p-10 max-xl:p-8 max-lg:p-5 text-left  bg-green-200 text-black rounded-md">
            <p className="w-1/2 ttext-xl max-lg:text-base">
              Подробная и достоверная информация про каждого специалиста
            </p>
          </div>
          <div>
            <motion.img
              variants={Variants2}
              viewport={{ once: true,amount:.1 }}
              initial={"offscreen"}
              whileInView="onscreen"  
              className="absolute  w-[300px] max-xl:w-[250px] max-lg:w-[200px] max-sm:w-[180px] top-0 left-[400px] max-xl:left-[350px]  max-sm:left-[200px] max-sm:pt-[80px]"
              src={Images.image2}
              alt=""
            />
          </div>
        </div>
        <div className="content w-[500px] max-sm:w-[400px] mr-[200px] max-md:mr-[80px] max-sm:mr-0 pt-[150px] relative ">
          <p className="text-3xl max-md:text-2xl max-sm:text-3xl text-green-400 p-5 text-right">
            Все просто
          </p>
          <div className="text-xl flex p-10 max-xl:p-8 max-lg:p-5 bg-green-200 text-black rounded-md text-right justify-end">
            <p className="w-1/2 text-left text-xl max-lg:text-base">
              Записывайтесь на прием в один клик без предварительных звонков в
              клинику
            </p>
          </div>
          <div>
            <motion.img
               transition={{ type: "spring",bounce: 0.4}}
               variants={Variants1}
               viewport={{ once: true,amount:.1 }}
               initial={"offscreen"}
               whileInView="onscreen"  
              className="absolute w-[300px] max-xl:w-[250px] max-lg:w-[200px] right-[450px] max-sm:right-[350px] top-[200px]  "
              src={Images.image3}
              alt="logo"
            />
          </div>
        </div>
        <div className="content w-[500px] max-sm:w-[400px] ml-[200px] max-md:ml-[100px] max-sm:ml-0 pt-[150px] relative ">
          <p className="text-3xl max-md:text-2xl max-sm:text-3xl text-green-400 p-5 text-left">
            Доступно
          </p>
          <div className="text-xl flex justify-start p-10 max-xl:p-8 max-md:p-5 text-left bg-green-200 text-black rounded-md">
            <p className="w-1/2 ttext-xl max-lg:text-base">
              Бесплатное предоставление всех услуг сервиса
            </p>
          </div>
          <div>
            <motion.img
               variants={Variants2}
               viewport={{ once: true, }}
               initial={"offscreen"}
               whileInView="onscreen"  
              className="absolute w-[300px] max-xl:w-[250px] max-lg:w-[170px] top-0  left-[400px] max-xl:left-[300px] max-md:left-[220px] max-sm:pt-[50px] "
              src={Images.image4}
              alt=""
            />
          </div>
        </div>
        <div className="content w-[500px] max-md:w-[400px] mr-[200px] max-md:mr-[50px] max-sm:mr-0 pt-[150px] relative ">
          <p className="text-3xl max-md:text-2xl max-sm:text-3xl text-green-400 p-5 text-right">
            Все самое важное
          </p>
          <div className="text-xl p-10  max-xl:p-8 max-lg:p-5 flex justify-end bg-green-200 text-black rounded-md text-right">
            <p className="w-1/2 text-left text-xl max-lg:text-base ">
              Читайте наши статьи о медицине и здоровом питании от экспертов в
              мобильном приложении ZorDoc
            </p>
          </div>
          <div>
            <motion.img
              variants={Variants1}
              viewport={{ once: true, }}
              initial={"offscreen"}
              whileInView="onscreen"  
              className="absolute w-[400px] max-xl:w-[350px] max-lg:w-[250px] top-[100px] right-[400px] max-md:right-[320px] max-sm:pt-[80px]"
              src={Images.image5}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
