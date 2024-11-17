import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MaxContainer from "./maxcontainer";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`border-b bg-white fixed inset-x-0 top-0 z-50 py-[2rem] sm:py-[1rem] border-b-[#E0E0E0] transition-transform duration-300 ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <MaxContainer>
        <div className="container flex justify-between items-center">
          <Link to={"/dashboard"}>
            <img
              src="/img/cluster_logo.svg"
              className="w-[13rem] sm:w-[10rem] h-auto"
              alt="logo"
            />
          </Link>
          <Link to={"/profile"}>
            <div className="flex items-center gap-[1rem]">
              <p className="font-[500] text-[#000000]">DataSquid</p>
              <img
                src="/img/quotient.svg"
                className="w-[4rem] h-auto"
                alt="chevron_down"
              />
            </div>
          </Link>
        </div>
      </MaxContainer>
    </nav>
  );
};

export default Navbar;
