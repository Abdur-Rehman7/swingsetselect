import heroleaf from "../assets/heroleaf.png";
import "../App.css";

function HeroSection() {
  return (
    <>
      <div class="hero relative">
        <div class="absolute top-[123px] left-[70px] w-[656px]">
          <img class="" src={heroleaf} />
          <p class="font-bold text-[80px] text-white leading-[112px] uppercase">Golfing Glory Awaits</p>
          <p class="w-[568px] text-white text-[16px] font-medium">
            Where aspirations meet the perfect swing. Unleash your potential
            with a curated collection of premium golf equipment, apparel, and
            accessories. Elevate every round with top brands.
          </p>
          <button class="mt-5 bg-[#00A736] px-[21px] py-[14px] font-bold text-white cursor-pointer">SHOP NOW</button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
