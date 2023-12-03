import Images from "../img/images"

const Footer = () => {
  return (
    <div className="flex max-sm:w-11/12 max-sm:mx-auto max-lg:flex-col justify-between max-lg:justify-center  items-end max-lg:items-start pt-[50px] pb-[50px] container">
      <div className="image-container flex flex-col gap-8 pb-[20px]"> 
        <img  className="w-[200px] "src="https://zordoc.uz/img/footer-logo.svg" alt="" />
        <p className="text-xl">
          ©2023. ZorDoc <br/>
          Все права защищены</p>
      </div>
      <div className="text-container flex flex-col  gap-8">
        <h1 className="text-4xl pb-[10px]">Сервис</h1>
        <ul className="flex flex-col gap-6">
          <li className="text-xl">О нас</li>
          <li className="text-xl">Политика
            конфиденциальности</li>
          <li className="text-xl">Условия использования сервиса</li>
        </ul>
      </div>
      <div className="connect-container gap-8 flex flex-col max-lg:flex-row  pt-[40px]">
        <div>
        <h1 className="text-2xl pb-[20px]">
          Остались вопросы? Свяжитесь с нами!
        </h1>
          <div className="phone flex gap-4">
            <img src={Images.phone} alt="phone" />
            <div className="text">
              <p>Telefon:</p>
              <p>+998 (90) 124-67-89</p>
            </div>
          </div>
        <div className="telegram flex gap-4">
            <img src={Images.telegram} alt="telegram" />
            <div className="text">
              <p>Telegram:</p>
              <p>@zordoc</p>
            </div>
        </div>
        </div>
        <div className="app-connect">
          <h1 className="text-2xl  ">Скачать приложение</h1>
          <div className="w-[400px] max-lg:w-[300px]  max-md:w-full gap-8 max-sm:gap-3 grid grid-cols-2 max-lg:grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 p-3 rounded-lg mt-16 ">
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
      </div>
    </div>
  )
}

export default Footer