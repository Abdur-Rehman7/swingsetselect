import "../App.css";
import Ourmission from "../../cmponent/Ourmission";
import Ourvision from "../../cmponent/Ourvision";
import Accordion from "../../cmponent/Accordion";
function Aboutus() {
  return (
    <>
      <div class="m-10 bg-white">
        <div class="aboutus1 relative">
          <div class="text-white text-center absolute left-50 top-50">
            <p class="uppercase font-bold text-[40px]">about us</p>

            <p class="font-medium text-[16px] w-[667px]">
              In the vast expanse of American history, the era of the Wild West
              stands as a symbol of rugged individualism, untamed landscapes,
              and a spirit of adventure.
            </p>
          </div>
        </div>
        <div class="w-[667px] mx-auto text-center mt-4">
          <p class="uppercase text-[#00A736] font-bold text-[40px]">
            welcome to swing set select
          </p>
          <p class="text-[16px] text-[#B1B1B1] mb-4">
            we are more than just an online golf equipment retailer – we are
            your dedicated partner on your journey to golfing excellence. With a
            deep passion for the sport and a commitment to providing golfers
            with the finest equipment and exceptional service, we have
            established ourselves as a trusted destination for all things
            golf-related. we are more than just an online golf equipment
            retailer – we are your dedicated partner on your journey to golfing
            excellence.
          </p>
        </div>

        <Ourmission />
        <Ourvision />

        <div class="grid grid-cols-4 text-center bg-[#F5F5F5] my-5 p-5">
          <div>
            <p class="text-[72px] font-bold text-[#00A736]">12k</p>
            <p class="font-medium text-[18px] text-[#000000]">
              Happy Customers
            </p>
          </div>
          <div>
            <p class="text-[72px] font-bold text-[#00A736]">100+</p>
            <p class="font-medium text-[18px] text-[#000000]">Our Products</p>
          </div>
          <div>
            <p class="text-[72px] font-bold text-[#00A736]">10k</p>
            <p class="font-medium text-[18px] text-[#000000]">
              Positive Reviews
            </p>
          </div>
          <div>
            <p class="text-[72px] font-bold text-[#00A736]">30+</p>
            <p class="font-medium text-[18px] text-[#000000]">Award Wins</p>
          </div>
        </div>

        <div class="w-[667px] mx-auto text-center mt-4">
          <p class="uppercase text-[#00A736] font-bold text-[40px]">
            Frequently asked question{" "}
          </p>
          <p class="text-[16px] text-[#B1B1B1] mb-4">
            In the vast expanse of American history, the era of the Wild West
            stands as a symbol of rugged individualism, untamed landscapes, and
            a spirit of adventure.
          </p>
        </div>
          <div class="grid grid-cols-2">
            <div>
              <Accordion />
            </div>
            <div class="mx-auto">
              <ul class="font-medium text-[#5C5C5C] text-[16px] flex flex-col gap-6">
                <p class="font-bold text-[18px] text-[#00A736]">Categories</p>
                <li>General</li>
                <li>Payments sections</li>
                <li>Delivery option</li>
                <li>About Product</li>
              </ul>
            </div>
          </div>
      </div>
    </>
  );
}

export default Aboutus;
