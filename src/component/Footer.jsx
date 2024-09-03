import React from "react";
import flogo from "../assets/footerlogo.png";
import { Link } from "react-router-dom";

function Footer() {
    
  return (
    <div className="bg-black">
      <marquee behavior="scroll" direction="left">
        <p className="text-[22px] font-bold mt-5 text-white mb-[105px]">
          {" "}
          Digital product design{" "}
          <span className="font-normal mx-8">Remote work</span> UX design{" "}
          <span className="font-normal mx-8">Distributed teams</span> Creativity{" "}
          <span className="font-normal mx-8">Strategy</span> Suspense{" "}
          <span className="font-normal mx-8">Growth</span>
        </p>
      </marquee>
      <div className="mx-auto w-[588px] pb-8">
        
        <img src={flogo} alt="" className="mx-auto mb-7" />
        <p className="text-white text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.</p>
        <ul className="flex gap-x-8 justify-center ">
            <Link to={"#"} className="text-white">Twitter</Link>
            <Link to={"#"} className="text-white">LinkedIn</Link>
            <Link to={"#"} className="text-white">RSS</Link>
        </ul>
        <p className="text-white text-center mt-8">© 2012–2020 Nordic Rose Co. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
