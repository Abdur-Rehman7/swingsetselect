import Featured from "./Featured";
import unclickablelike from "../assets/unclickablelike.svg";
import clickablelike from "../assets/clickablelike.svg";
import rating from "../assets/rating.svg";
import "../App.css";
function NewCollection() {
  return (
    <>
      <div>
        <div class="w-[667px] mx-auto text-center mt-4">
          <p class="uppercase text-[#00A736] font-bold text-[40px]">
            NEW COLLECTION
          </p>
          <p class="text-[16px] text-[#B1B1B1] mb-4">
            In the vast expanse of American history, the era of the Wild West
            stands as a symbol of rugged individualism, untamed landscapes, and
            a spirit of adventure.
          </p>
        </div>
        <div class="grid grid-cols-4 gap-2 mt-4">
          <Featured
            class="newcollection1 relative"
            like={unclickablelike}
            title="Callaway Golf Heritage Twill Hat"
            price="$99.00"
            rating={rating}
          />
          <Featured
            class="newcollection2 relative"
            like={clickablelike}
            title="Callaway Golf Heritage Twill Hat"
            price="$99.00"
            rating={rating}
          />
          <Featured
            class="newcollection3 relative"
            like={unclickablelike}
            title="Callaway Golf Heritage Twill Hat"
            price="$99.00"
            rating={rating}
          />
          <Featured
            class="newcollection4 relative"
            like={clickablelike}
            title="Callaway Golf Heritage Twill Hat"
            price="$99.00"
            rating={rating}
          />
        </div>
      </div>
      <div class="text-center">
        <button class="uppercase px-[21px] py-[14px] bg-[#00A736] shadow-[#00000026] text-white text-medium font-bold text-[14px] cursor-pointer mt-4">
          see all products
        </button>
      </div>
    </>
  );
}
export default NewCollection;
