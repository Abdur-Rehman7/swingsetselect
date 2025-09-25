import "../src/App.css";
import swingintosavings from "../src/assets/swingintosavings.png";
function Swingintosavingsection() {
  return (
    <>
      <div class="grid grid-cols-2 h-[624px] bg-[#F5F5F5] mt-5">
        <div class="mx-auto my-auto px-5">
          <p class="text-[16px] text-[#0E7A31] font-medium uppercase">
            Swing into Savings{" "}
          </p>
          <p class="text-[64px] text-[#0C0C0C] font-bold uppercase font-[Cormorant Garamond]">
            Enhance your Golf experience with us
          </p>
          <p class="text-[16px] text-[#8D8D8D] font-medium">
            In the vast expanse of American history, the era of the Wild West
            stands as a symbol of rugged individualism, untamed landscapes, and
            a spirit of adventure.
          </p>

          <button class="uppercase px-[21px] py-[14px] bg-[#00A736] shadow-[#00000026] text-white text-medium font-bold text-[14px] mt-4">
            shop now
          </button>
        </div>
        <div class="">
          <img src={swingintosavings} class="h-[624px]" />
        </div>
      </div>
    </>
  );
}

export default Swingintosavingsection;
