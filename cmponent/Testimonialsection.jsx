import Testimonials from "./Testimonials";
import testimonials1 from "../src/assets/testimonials-1.png";
import testimonials2 from "../src/assets/testimonials-2.png";
import rating from "../src/assets/rating.svg";

function Testimonialsection() {
  return (
    <>
      <div>
        <div class="w-[667px] mx-auto text-center mt-4">
          <p class="uppercase text-[#00A736] font-bold text-[40px]">
            testimonials
          </p>
          <p class="text-[16px] text-[#B1B1B1] mb-4">
            In the vast expanse of American history, the era of the Wild West
            stands as a symbol of rugged individualism, untamed landscapes, and
            a spirit of adventure.
          </p>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <Testimonials
            img={testimonials1}
            text="In the vast expanse of American history, 
            the era of the Wild West stands as a symbol of rugged individualism, 
            untamed landscapes, and a  spirit of adventure. In the 
            vast expanse of American history, the eraof the Wild West stands as a 
            symbol of rugged individualism."
            name="jhon smith"
            rating={rating}
          />
          <Testimonials
            img={testimonials2}
            text="In the vast expanse of American history, 
            the era of the Wild West stands as a symbol of rugged individualism, 
            untamed landscapes, and a  spirit of adventure. In the 
            vast expanse of American history, the eraof the Wild West stands as a 
            symbol of rugged individualism."
            name="jhon smith"
            rating={rating}
          />
          <Testimonials
            img={testimonials1}
            text="In the vast expanse of American history, 
            the era of the Wild West stands as a symbol of rugged individualism, 
            untamed landscapes, and a  spirit of adventure. In the 
            vast expanse of American history, the eraof the Wild West stands as a 
            symbol of rugged individualism."
            name="jhon smith"
            rating={rating}
          />
        </div>

        <div class="flex justify-center gap-2 mt-4">
          <div class="w-[42px] h-[42px] border border-[#B1B1B1]">
            <div class="w-[16px] h-[16px] border-t-[2px] border-l-[2px] border-[#B1B1B1] text-center mt-3 mx-auto -rotate-45"></div>
          </div>
          <div class="w-[42px] h-[42px] border border-[#00A736] bg-[#00A736]">
            <div class="w-[16px] h-[16px] border-t-[2px] border-l-[2px] border-[#ffffff] text-center mt-3 mx-auto rotate-140"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonialsection;
