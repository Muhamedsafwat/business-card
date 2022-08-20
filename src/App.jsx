import Header from "./components/Header";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Switch from "./components/ThemeSwitch";

import { useState } from "react";
import clsx from "clsx";

function App() {
  const [theme, setTHeme] = useState("light");

  const toggleHandler = () => {
    if (theme == "light") {
      setTHeme("dark");
    } else {
      setTHeme("light");
    }
  };

  return (
    <>
      <Switch toggleHandler={toggleHandler} />
      <div className={clsx("container", theme)}>
        <Header />
        <About />
        <Interests />
        <Footer />
      </div>
    </>
  );
}

export default App;
