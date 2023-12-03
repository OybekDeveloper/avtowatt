import Images from "../components/img/images";
import { motion } from "framer-motion";
const Variants1 = {
    offscreen: {
        x: -80,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
        }
    }
};
const Variants2 = {
    offscreen: {
        x: 100,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
        }
    }
};
const Test = () => {
    return (
        <>
             <h1 className="text-4xl font-bold text-center">Возможности</h1>

                <div className="container w-10/12 mx-auto flex flex-col">

                    <div className="max-sm:w-full sm:w-3/4 md:w-2/3 pt-20 ">
                        <p className="lg:text-3xl md:text-2xl max-sm:text-3xl text-green-400 p-5 text-right">
                            Всегда под рукой
                        </p>
                        <div className="relative text-xl p-10 max-xl:p-8 max-lg:p-5 bg-green-200 text-black rounded-md text-right flex justify-end">
                            <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] absolute bottom-[-25px] left-0">
                                <motion.img
                                    variants={Variants1}
                                    viewport={{ once: true, amount: .1 }}
                                    initial={"offscreen"}
                                    whileInView="onscreen"
                                    className="w-full"
                                    src={Images.image1}
                                    alt="Image 1"
                                />
                            </div>
                            <p className="w-1/2 text-left text-xl  max-lg:text-base">
                                Удобное мобильное приложение
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-3/4 md:w-2/3 pt-20 self-end">
                        <p className="lg:text-3xl md:text-2xl max-sm:text-3xl text-green-400 p-5">
                            Всегда под рукой
                        </p>
                        <div className="relative text-xl p-10 max-xl:p-8 max-lg:p-5 bg-green-200 text-black rounded-md text-right flex ">
                            <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] absolute bottom-[-25px] right-0">
                                <motion.img
                                    variants={Variants2}
                                    viewport={{ once: true, amount: .1 }}
                                    initial={"offscreen"}
                                    whileInView="onscreen"
                                    className="w-full"
                                    src={Images.image2}
                                    alt="Image 1"
                                />
                            </div>
                            <p className="w-1/2 text-left text-xl max-lg:text-base">
                                Удобное мобильное приложение
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-3/4 md:w-2/3 pt-20 ">
                        <p className="lg:text-3xl md:text-2xl max-sm:text-3xl text-green-400 p-5 text-right">
                            Всегда под рукой
                        </p>
                        <div className="relative text-xl p-10 max-xl:p-8 max-lg:p-5 bg-green-200 text-black rounded-md text-right flex justify-end">
                            <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] absolute bottom-[-25px] left-0">
                                <motion.img
                                    variants={Variants1}
                                    viewport={{ once: true, amount: .1 }}
                                    initial={"offscreen"}
                                    whileInView="onscreen"
                                    className="w-full"
                                    src={Images.image3}
                                    alt="Image 1"
                                />
                            </div>
                            <p className="w-1/2 text-left text-xl max-lg:text-base">
                                Удобное мобильное приложение
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-3/4 md:w-2/3 pt-20 self-end">
                        <p className="lg:text-3xl md:text-2xl max-sm:text-3xl text-green-400 p-5">
                            Всегда под рукой
                        </p>
                        <div className="relative text-xl p-10 max-xl:p-8 max-lg:p-5 bg-green-200 text-black rounded-md text-right flex ">
                            <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] absolute bottom-[-25px] right-0">
                                <motion.img
                                    variants={Variants2}
                                    viewport={{ once: true, amount: .1 }}
                                    initial={"offscreen"}
                                    whileInView="onscreen"
                                    className="w-full"
                                    src={Images.image4}
                                    alt="Image 1"
                                />
                            </div>
                            <p className="w-1/2 text-left text-xl max-lg:text-base">
                                Удобное мобильное приложение
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-3/4 md:w-2/3 pt-20 ">
                        <p className="lg:text-3xl md:text-2xl max-sm:text-3xl text-green-400 p-5 text-right">
                            Всегда под рукой
                        </p>
                        <div className="relative text-xl p-10 max-xl:p-8 max-lg:p-5 bg-green-200 text-black rounded-md text-right flex justify-end">
                            <div className="w-[140px] sm:w-[180px] md:w-[120px] lg:w-[220px] top-[-10px] absolute left-0">
                                <motion.img
                                    variants={Variants1}
                                    viewport={{ once: true, amount: .1 }}
                                    initial={"offscreen"}
                                    whileInView="onscreen"
                                    className="w-full"
                                    src={Images.image5}
                                    alt="Image 1"
                                />
                            </div>
                            <p className="w-1/2 text-left text-xl max-lg:text-base">
                                Удобное мобильное приложение
                            </p>
                        </div>
                    </div>
                
                </div>
        </>
    )
}

export default Test