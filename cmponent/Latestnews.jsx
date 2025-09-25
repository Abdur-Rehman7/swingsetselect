import readmorearrow from "../src/assets/readmorearrow.svg"

function Latestnews(props) {
  return (
    <>
      <div class="bg-[#FFFFFF] shadow-2xl pb-4">
        <div class="">
          <img src={props.img} class="h-[303px] w-[437px]" />
        </div>
        <div class="m-3">
          <p class="font-medium text-[16px] text-[#9F9F9F]">{props.date}</p>
          <p class="font-medium text-[20px] text-[#0B9444] capitalize">{props.title}</p>
        </div>
        <div class="font-bold text-[13px] text-[#0C0C0C] uppercase mx-4 flex"><span class="cursor-pointer">read more</span> <img class="ml-2 cursor-pointer" src={readmorearrow} /></div>
      </div>
    </>
  );
}

export default Latestnews;
