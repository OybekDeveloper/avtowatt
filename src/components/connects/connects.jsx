import { useState } from "react";
import Images from "../img/images";
import { motion } from 'framer-motion'
import './connects.css'
const Connects = () => {
  const [formData, setFormData] = useState({
    surname: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form submitted:', formData);
  };
  return (
    <div id="connect" className="flex  flex-row justify-between">
      <div>
        <div>
          <h1 className="text-4xl">Скачать приложение</h1>
          <div className="w-[500px] max-lg:w-[300px] max-md:w-full gap-8 grid grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-1 max-md:grid-cols-2 p-3 rounded-lg mt-16 ">
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
          <div className="mt-[100px]">
            <h1 className="text-4xl">Оставить заявку</h1>
            <p className="text-lg">Оставьте заявку и мы свяжемся с вами в ближайшее время</p>
          </div>
          <div className="form-container w-full">
            <form onSubmit={handleSubmit} >
              <label htmlFor="surname">Surname:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />

              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                pattern="[0-9]{10}"
                placeholder="e.g., 1234567890"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />

              <a href="#connect">
                <button className="btn w-full mt-[10px]">Оставить заявку</button>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div>
        <motion.img
          transition={{ type: 'spring', duration: 1.5, delay: 0.3 }}
          initial={{ x: 100, y: 100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true, amount: .4 }}
          className="w-[700px] max-md:hidden" src={Images.img7} alt="" />
      </div>
    </div>
  );
};

export default Connects;
