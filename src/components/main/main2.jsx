import { motion } from "framer-motion";

const Main2 = () => {
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
        <div className="container w-11/12 flex flex-col sm:flex-row justify-between items-center mx-auto">
            <div className="w-full sm:w-1/2 ">
                <p className="text-3xl w-[97%]">ZorDoc — медицинский <br />
                    сервис записи <br />
                    пациентов в клинику</p>
                <p className="my-8">Первое мобильное приложение <br />
                    в Узбекистане по поиску <br />
                    врачей и услуг</p>
                <div className="flex justify-between flex-row sm:flex-col sm:gap-3 md:flex-row">
                    <img
                        className="w-[49%]"
                        src="https://zordoc.uz/img/app-store.png"
                        alt="playmarket"
                    />
                    <img
                        className="w-[49%]"
                        src="https://zordoc.uz/img/google-play.png"
                        alt="playstore"
                    />
                </div>
            </div>
            <div className="w-full mt-8 sm:w-2/5 h-auto">
                <div className="container flex items-center justify-center sm:justify-end
                 w-full">
                    <motion.img
                        transition={{ duration: 0.5, delay: 0.6 }}
                        variants={Variants}
                        initial={"initial"}
                        animate={"animate"}
                        className="w-[150px] sm:w-[120px] z-30"
                        src="https://zordoc.uz/img/intro/img3.png"
                        alt="img"
                    />
                    <motion.img
                        transition={{ duration: 0.5, delay: 0.3 }}
                        variants={Variants}
                        initial={"initial"}
                        animate={"animate"}
                        className="w-[180px] sm:w-[150px] z-20 ml-[-30px]"  
                        src="https://zordoc.uz/img/intro/img2.png"
                        alt="img"
                    />
                    <motion.img
                        transition={{ duration: 0.5, delay: 0 }}
                        variants={Variants}
                        initial={"initial"}
                        animate={"animate"}
                        className="w-[180px] sm:w-[150px] ml-[-100px]"
                        src="https://zordoc.uz/img/intro/img1.png"
                        alt="img"
                    />
                </div>
            </div>

        </div>
    )
}

export default Main2