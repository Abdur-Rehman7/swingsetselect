function Contactinfo(props) {
  return (
    <>
      <div class="mx-auto">
        <img src={props.icon} class="mx-auto" />
        <p class="text-[14px] text-[#5F6368]">{props.name}</p>
        <p>{props.info}</p>
      </div>
    </>
  );
}
export default Contactinfo;
