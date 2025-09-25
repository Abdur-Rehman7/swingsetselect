import Latestnews from "./Latestnews";
import latestnews1 from "../src/assets/latestnews-1.jpg";
import latestnews2 from "../src/assets/latestnews-2.jpg";
import latestnews3 from "../src/assets/latestnews-3.jpg";

function Latestnewssection() {
  return (
    <>
      <div>
        <div class="w-[667px] mx-auto text-center mt-4">
          <p class="uppercase text-[#00A736] font-bold text-[40px]">
            read our latest news
          </p>
          <p class="text-[16px] text-[#B1B1B1] mb-4">
            In the vast expanse of American history, the era of the Wild West
            stands as a symbol of rugged individualism, untamed landscapes, and
            a spirit of adventure.
          </p>
        </div>
        <div class="grid grid-cols-3 gap-2 mt-4">
          <Latestnews
            img={latestnews1}
            date="By Admin. on Jan 3, 2024"
            title="The Art of Perfecting Your Golf Swing: Tips and Techniques"
          />
          <Latestnews
            img={latestnews2}
            date="By Admin. on Jun 19, 2025"
            title="Choosing the Right Golf Equipment: A Comprehensive Guide"
          />
          <Latestnews
            img={latestnews3}
            date="By Admin. on Aug 30, 2023"
            title="Golf Fitness: Strengthening Your Body for Improved Performance"
          />
        </div>
      </div>
      <div class="text-center">
        <button class="uppercase px-[21px] py-[14px] bg-[#00A736] shadow-[#00000026] text-white text-medium font-bold text-[14px] cursor-pointer mt-4">
          read all news
        </button>
      </div>
    </>
  );
}
export default Latestnewssection;
