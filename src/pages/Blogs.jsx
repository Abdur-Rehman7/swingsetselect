import Latestnews from "../../cmponent/Latestnews";
import latestnews1 from "../assets/latestnews-1.jpg"
import latestnews2 from "../assets/latestnews-2.jpg"
import latestnews3 from "../assets/latestnews-3.jpg"
import latestnews4 from "../assets/latestnews-4.jpg";
import latestnews5 from "../assets/latestnews-5.jpg";
import latestnews6 from "../assets/latestnews-6.jpg";
import latestnews7 from "../assets/latestnews-7.jpg";
import latestnews8 from "../assets/latestnews-8.jpg";
import latestnews9 from "../assets/latestnews-9.jpg";
function Blogs() {
  return (
    <>
      <div class="m-10">
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
        <div class="grid grid-cols-3 gap-3">
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
          <Latestnews
            img={latestnews4}
            date="By Admin. on Aug 30, 2023"
            title="Golf Fitness: Strengthening Your Body for Improved Performance"
          />
          <Latestnews
            img={latestnews5}
            date="By Admin. on Aug 30, 2023"
            title="Golf Fitness: Strengthening Your Body for Improved Performance"
          />
          <Latestnews
            img={latestnews6}
            date="By Admin. on Aug 30, 2023"
            title="Golf Fitness: Strengthening Your Body for Improved Performance"
          />
          <Latestnews
            img={latestnews7}
            date="By Admin. on Aug 30, 2023"
            title="Golf Fitness: Strengthening Your Body for Improved Performance"
          />
          <Latestnews
            img={latestnews8}
            date="By Admin. on Aug 30, 2023"
            title="Golf Fitness: Strengthening Your Body for Improved Performance"
          />
          <Latestnews
            img={latestnews9}
            date="By Admin. on Aug 30, 2023"
            title="Golf Fitness: Strengthening Your Body for Improved Performance"
          />
        </div>
      </div>
    </>
  );
}

export default Blogs;
