import React, { useEffect, useRef } from "react";
import Logo from "../components/Logo/Logo";
import { Link, Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import gsap from "gsap";
const AuthLayout = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: 150 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power1.out", delay: 0.2  }
    );
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <Link to="/">
        <Logo></Logo>
      </Link>
      <div className="flex items-center">
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
        {/* Right: Illustration with animation */}
        <div ref={imgRef} className="flex-1 justify-center flex">
          <img src={authImg} alt="Delivery" className="w-[80%] max-w-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
