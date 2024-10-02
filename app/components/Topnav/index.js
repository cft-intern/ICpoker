import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdAccountBalanceWallet } from 'react-icons/md';
const Topnav = () => {
  return (
    <div className="w-full h-[39px]  flex justify-between items-center">
      <div className="p-5">
        <img
          className="w-[10vw] h-auto"
          src="/images/pocker-logo.png"
          alt="Logo"
        />
      </div>
      <div className="flex gap-5 items-center p-6">
        <div className="flex items-center justify-center w-[9vw] h-[2vw] bg-[#38b5E0] rounded-2xl">
          <MdAccountBalanceWallet className="mr-2 text-[#0B0909]" />
          <h2 className="text-[13px] text-[#0B0909]">CONNECT</h2>
        </div>
        <IoMenu className="text-[22px] text-[#38b5E0]" />
      </div>
    </div>
  );
};

export default Topnav;
