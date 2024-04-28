import React from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

function Header() {
  return (
    <header className="h-[10vh] bg-transparent z-50 fixed flex flex-row items-center justify-between  w-full">
      <div className="w-4/12 h-full flex justify-center items-center ">
        <div className="w-6/12">
        <p className="blue-gradient text-[30px] font-[900]">DecentraTap</p>
        </div>
      </div>
      <div className="w-4/12 h-full flex flex-row justify-center gap-x-[4rem] text-white items-center  text-xl">
        <p className="blue-gradient-hover font-[100]">تماس با ما</p>
        <p className="blue-gradient-hover font-[100]">تماشا</p>
        <p className="blue-gradient-hover font-[100]">راهنما</p>
        <p className="blue-gradient-hover font-[100]">پلن درامدی</p>
      </div>
      <div className="w-4/12 h-full flex gap-1 justify-center box-border items-center">
        <button className="w-2/12 bg-transparent box-border hover:border-[1px] border-white transition-all duration-200  text-white text-sm  rounded-xl  py-[15px] ">
          ثبت نام
        </button>
        <button className="w-2/12 bg-transparent box-border hover:border-[1px] border-white transition-all duration-200 text-white text-sm rounded-xl py-[15px]  ">
          ورود
        </button>
      </div>
    </header>
  );
}

export default Header;
