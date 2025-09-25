import phoneicon from "../assets/contactphoneicon.svg";
import locationicon from "../assets/contactlocationicon.svg";
import emailicon from "../assets/contactemailicon.svg";
import Contactinput from "../../cmponent/Contactinput";
import Contactinfo from "../../cmponent/Contactinfo";
function Contactus() {
  return (
    <>
      <div>
        <div class="w-[667px] mx-auto text-center mt-4">
          <p class="uppercase text-[#00A736] font-bold text-[40px]">
            Get in touch with us
          </p>
          <p class="text-[16px] text-[#B1B1B1] mb-4">
            In the vast expanse of American history, the era of the Wild West
            stands as a symbol of rugged individualism, untamed landscapes, and
            a spirit of adventure.
          </p>
          <div class="grid grid-cols-3 mt-4 mx-auto ">
            <Contactinfo icon={phoneicon} name="phone" info="+92-307-1285-203"/>
            <Contactinfo icon={locationicon} name="Address" info="138, Old Civil Line, Sargodha"/>
            <Contactinfo icon={emailicon} name="Email" info="reactsolution786@gmail.com"/>
          </div>

          <p class="font-medium text-[16px] text-[#9A9A9A] w-[400px] m-auto p-5">
            If you have any question Please don’t hesitate to send us a massage
          </p>
          <div>
            <Contactinput placeholder="Name" />
            <Contactinput placeholder="Phone" />
            <Contactinput placeholder="E-mail" />

            <input
              class="w-full border border-[#9E9E9E] outline-none px-[16px] pt-[16px] pb-[14px] mt-10"
              placeholder="Enter Your Message"
            />
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="uppercase px-[21px] py-[14px] bg-[#00A736] shadow-[#00000026] text-white text-medium font-bold text-[14px] cursor-pointer mt-4">
          send message
        </button>
      </div>
    </>
  );
}

export default Contactus;
