import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="mx-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img class="w-20 mx-auto mt-[3rem]" src={Single} alt="/" />
          <h2 className="text-2xl text-center font-bold py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2GB</p>
          </div>
          <button className="bg-[#2100df] w-[200px] rounded-2xl font-medium my-6 mx-auto py-3 text-white">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img class="w-20 mx-auto mt-[3rem]" src={Double} alt="/" />
          <h2 className="text-2xl text-center font-bold py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2GB</p>
          </div>
          <button className="bg-[#2100df] w-[200px] rounded-2xl font-medium my-6 mx-auto py-3 text-white">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img class="w-20 mx-auto mt-[3rem]" src={Triple} alt="/" />
          <h2 className="text-2xl text-center font-bold py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2GB</p>
          </div>
          <button className="bg-[#2100df] w-[200px] rounded-2xl font-medium my-6 mx-auto py-3 text-white">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
