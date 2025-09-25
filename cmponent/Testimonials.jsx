function Testimonials(props) {
  return (
    <>
      <div class="bg-[#FFFFFF] shadow-2xl p-4">
        <img
          src={props.img}
          class="w-[75px] h-[75px] rounded-full "
        />
        <div class="text-[#777777] text-[16px]">
          {props.text}
        </div>
        <hr class="text-[#BDBDBD] my-4" />
        <div class="grid grid-cols-2 relative">
          <div>
            <p class="text-[18px] font-bold capitalize text-[#00A736]">
              {props.name}
            </p>
            <p class="text-[14px} text-[#A1A1A1]">Player</p>
          </div>
          <img src={props.rating} class="absolute right-0" />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
