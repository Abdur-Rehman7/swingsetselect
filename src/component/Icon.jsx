function Icon(props) {
  return (
    <>
      <div>
        <img src={props.icon} class="border-b-[3px] pb-4 border-[#00A736] mx-auto"/>
        <p class="text-center mt-4">{props.iconText}</p>
        
      </div>
    </>
  );
}
export default Icon;
