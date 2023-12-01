// Navbar.js
import "./navbar.css";
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {
  // const{setIsOpen ,isOpen} = props;
  return (
    <div className="navbar fixed  top-0 button-[100px] w-10/12 max-sm:w-full flex mx-auto justify-between items-center z-[1000] py-[20px]">
      <a  href="#header">
        <div className="flex justify-center items-center">
          <img
            className="w-[50px] rounded-full"
            src="https://play-lh.googleusercontent.com/3zgH541BsdkYHuQOZl6YiOu9KmCj3EbUrlleZFTRtjrOZ-e-BgvkGV1UqM9fQtTvLRI"
            alt="logo"
          />
          <p className="text-3xl font-bold">AvtoWatt</p>
        </div>
      </a>
      <div className="flex justify-center items-center ">
        <div className="max-sm:pr-0 pr-[20px] lg:hidden block">
        <RiMenu3Fill   size={40}/>
        </div>
        <ul className=" flex max-lg:hidden top-0 justify-center items-center gap-8 text-[16px] font-medium">
          <li className="hover:text-blue-500 hover:scale-105 transition-all">
            <a href="#header">О нас</a>
          </li>
          <li className="hover:text-blue-500 hover:scale-105 transition-all">
            <a href="#possibilities">Возможности</a>
          </li>
          <li className="hover:text-blue-500 hover:scale-105 transition-all">
            <a href="#everything">Пациентам</a>
          </li>
          <li className="hover:text-blue-500 hover:scale-105 transition-all">
            <a href="#company">Клиникам</a>
          </li>
          <li className="hover:text-blue-500 hover:scale-105 transition-all">
            <a href="#connect">
              <button className="btn">Оставить заявку</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
