import AboutUs from "./contents/aboutUs/aboutUs";
import Banner from "./contents/banner/banner";
import Header from "./contents/header/header";
import Help from "./contents/help/help";
import Service from "./contents/services/service";

const Home = () => {
  //document.body.classList.add("dark");

  return (
    <div className="transition-colors duration-300">
      <div className="relative  dark:bg-black dark:text-zinc-50 bg-slate-100 text-zinc-700 min-h-[200vh]">
        <Header />
        <Banner />
        <Service />
        <AboutUs />
        <Help />
      </div>
    </div>
  );
};

export default Home;
