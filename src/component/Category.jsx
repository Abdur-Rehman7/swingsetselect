function Category(props) {
  return (
    <>
      <div class="grid grid-cols-2">
        <img src={props.categoryimg} class="h-[327px]" />
        <div class="my-auto mx-auto text-center">
          <p class="font-bold text-[32px]">{props.categoryheading}</p>
          <p class="text-[12px] text-[#B1B1B1]">
            {props.categorytext}
          </p>
          <button class="px-[21px] py-[14px] border-[1px] mt-5 cursor-pointer">SHOP NOW</button>
        </div>
      </div>
    </>
  );
}

export default Category;
