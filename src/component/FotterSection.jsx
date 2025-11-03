import "../App.css";
import callicon from "../assets/callicon.svg";
import messageicon from "../assets/messageicon.svg";
import locationicon from "../assets/locationicon.svg";
import fotterlogo from "../assets/fotterlogo.svg";
import linkedin from "../assets/linkedinicon.svg";
import facebook from "../assets/facebookicon.svg";
import twitter from "../assets/twittericon.svg";
import instagram from "../assets/instagramicon.svg";

function FotterSection() {
  return (
    <>
      <div class="fotterimg">
        <div class="w-[80%] grid grid-cols-3 mx-auto mt-20 backdrop-blur-sm h-[500px]">
          <div class="border-t border-b border-[#FFFFFF] ">
            <div class="mt-30">
              <p class="flex text-[18px] font-medium text-white my-9">
                <img src={callicon} />
                <span class="ml-3">+923-071-285-203</span>
              </p>
              <p class="flex text-[18px] font-medium text-white my-9">
                <img src={messageicon} />
                <span class="ml-3">reactsolution786@gmail.com</span>
              </p>
              <p class="flex text-[18px] font-medium text-white my-9">
                <img src={locationicon} />
                <span class="ml-3">138, Old Civil Line, Sargodha </span>
              </p>
            </div>
          </div>

          <div class="border border-[#FFFFFF]">
            <div class="mt-20">
              <img src={fotterlogo} />
              <p class="font-medium text-[16px] text-[#FFFFFF] text-center">
                Hello, we are moduscreate. Our goal is to translate the positive
                effects from revolutionizing how companies engage with their
                clients & their team.
              </p>
              <div class="flex justify-center gap-2 mt-4">
                <img src={linkedin} class="cursor-pointer" />
                <img src={facebook} class="cursor-pointer" />
                <img src={twitter} class="cursor-pointer" />
                <img src={instagram} class="cursor-pointer" />
              </div>
            </div>
          </div>

          <div class="border-t border-b border-[#FFFFFF]">
            <div class="flex gap-6 justify-center mt-30 text-white">
              <ul class="cursor-pointer">
                <p class="mb-2 font-medium text-[18px]">Quick Links</p>
                <li>Home</li>
                <li>Category</li>
                <li>Blogs</li>
                <li>About us</li>
                <li>Contact us</li>
              </ul>

              <ul class="cursor-pointer">
                <p class="mb-2 font-medium text-[18px]">Category</p>
                <li>Golf ball</li>
                <li>Golf sticks</li>
                <li>Golf bags</li>
                <li>Golf gloves</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FotterSection;
