import React, { useState } from "react";
// import logo from "../../../public/images/logo.png";
// import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = (): any => {
    setIsOpen(false);
  };

  const openModal = (): any => {
    setIsOpen(true);
  };

  const isMobile = useIsMobile();
  const [showMobile, setShowMobile] = useState(isMobile);

  console.log(showMobile);
  return isMobile ? (
    <header className="h-[10vh] bg-transparent px-8 z-50 fixed flex flex-row items-center justify-between  w-full">
      
      <div className="w-4/12 h-full flex justify-center items-center ">
        <p className=" pl-4 blue-gradient text-[30px] sm:text-[20px] font-[900]">
          DecentraTap
        </p>
      </div>
      <BurgerMenu
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </header>
  ) : (
    <header className="h-[10vh] bg-transparent z-50 fixed flex flex-row items-center justify-between  w-full">
      <div className="w-4/12 h-full flex justify-center items-center ">
        <div className="w-6/12">
          <p className="blue-gradient text-[30px] font-[900] cursor-pointer">DecentraTap</p>
        </div>
      </div>
      <div className="w-4/12 h-full flex flex-row justify-center gap-x-[4rem] text-white items-center  text-xl">
        <p className="blue-gradient-hover font-[100] cursor-pointer">تماس با ما</p>
        <p className="blue-gradient-hover font-[100] cursor-pointer">تماشا</p>
        <p className="blue-gradient-hover font-[100] cursor-pointer">راهنما</p>
        <p className="blue-gradient-hover font-[100] cursor-pointer">پلن درامدی</p>
      </div>
      <div className="w-4/12 h-full flex gap-1 justify-center box-border items-center">
        <Link href="/register" className="w-2/12 bg-transparent box-border border-white transition-all duration-200  text-white text-sm  rounded-xl  py-[15px] ">
          ثبت نام
        </Link>
        <Link href="/login" className="w-2/12 bg-transparent box-border border-white transition-all duration-200 text-white text-sm rounded-xl py-[15px]  ">
          ورود
        </Link>
      </div>
    </header>
  );
}

export default Header;
