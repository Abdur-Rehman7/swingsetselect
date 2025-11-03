import Category from "./Category";
import category1 from "../assets/category-1.jpg";
import category2 from "../assets/category-2.jpg";
import category3 from "../assets/category-3.jpg";
import category4 from "../assets/category-4.jpg";
function CategorySection() {
  return (
    <>
      <div>
        <div class="w-[667px] mx-auto text-center mt-4">
          <p class="uppercase text-[#00A736] font-bold text-[40px]">
            shop by category
          </p>
          <p class="text-[16px] text-[#B1B1B1] mb-4">
            In the vast expanse of American history, the era of the Wild West
            stands as a symbol of rugged individualism, untamed landscapes, and
            a spirit of adventure.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-8">
          <Category
            categoryimg={category1}
            categoryheading="Balls & Tee"
            categorytext="Where aspirations meet the perfect swing. Unleash 
            your potential with a curated collection of premium golf equipment"
          />
          <Category
            categoryimg={category2}
            categoryheading="Golf stick"
            categorytext="Where aspirations meet the perfect swing. Unleash your potential with a curated collection of premium golf equipment"
          />
          <Category
            categoryheading="Golf Bag"
            categorytext="Where aspirations meet the perfect swing. Unleash your potential with a curated collection of premium golf equipment"
            categoryimg={category3}
          />
          <Category
            categoryheading="Golf Gloves"
            categorytext="Where aspirations meet the perfect swing. Unleash your potential with a curated collection of premium golf equipment"
            categoryimg={category4}
          />
        </div>
      </div>
    </>
  );
}

export default CategorySection;
