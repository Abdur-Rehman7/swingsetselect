function Featured(props) {
  return (
    <>
      <div class="h-[481px] border border-[#D8D8D8]">
        <div class={props.class} >
          <img src={props.like} class="absolute right-5 top-5" />
        </div>
        <div class="mt-2">
          <p class="mx-4">{props.title}</p>
        </div>
        <div class="text-center mt-2">
          <p class="flex justify-between mx-4">
            {props.price}
            <img src={props.rating} />
          </p>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-4 mx-4">
            <button class="bg-[#00A736] border border-[#BEBEBE] font-bold text-white text-[13px] p-2 uppercase cursor-pointer">add to cart</button>
            <button class="bg-white border border-[#BEBEBE] font-bold text-[13px] p-2 uppercase cursor-pointer">buy now</button>
        </div>
      </div>
    </>
  );
}
export default Featured;
