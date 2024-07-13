import clsx from "clsx";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import Button from "../../../../../@components/ui/button";

const Header = () => {
  const IsDark = getTheme() === "light" ? true : false;

  function getTheme() {
    return localStorage.getItem("theme");
  }

  //state
  const [mode, setMode] = useState(!IsDark);
  const [scroll, setScroll] = useState(false);

  //function
  const handleCLickDark = (): void => {
    document.body.classList.toggle("dark");

    if (localStorage.getItem("theme") === "light") {
      storage("dark");
    } else {
      storage("light");
    }
    setMode(true);
  };

  function storage(theme: string) {
    localStorage.setItem("theme", theme);
  }

  const handleSrooll = (): void => {
    if (window.scrollY > 0) {
      console.log(window.scrollY);
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  //effect
  useEffect(() => {
    if (!IsDark) {
      document.body.classList.add("dark");
    }
    window.addEventListener("scroll", handleSrooll);
    return () => {
      window.removeEventListener("scroll", handleSrooll);
    };
  });

  return (
    <div
      className={clsx(
        {
          "z-50 justify-around items-center py-4 bg-slate-100  shadow-sm dark:bg-zinc-900":
            scroll === true,
        },
        {
          "z-50  justify-around items-center py-4": scroll === false,
        },
        "fixed top-0 w-full flex justify-around items-center py-4 transition-colors duration-200 "
      )}
    >
      <div>
        <h1 className="text-bold text-5xl font-bold">Cyclops</h1>
      </div>
      <div>
        <ul className="flex gap-6 cursor-pointer">
          <li>Home</li>
          <li>Princing</li>
          <li>Platforms</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex gap-5 justify-center items-center">
        <div
          onClick={handleCLickDark}
          className="bg-zinc-200 rounded-full p-2 cursor-pointer dark:bg-zinc-950"
        >
          {!mode ? <CiDark /> : <CiLight />}
        </div>
        <div className="flex gap-3">
          <Button variant="default">Login</Button>
          <Button variant="contained">Try demo</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
