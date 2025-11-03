import Icon from "./Icon"
import icon1 from "../assets/icon-1.svg"
import icon2 from "../assets/icon-2.svg"
import icon3 from "../assets/icon-3.svg"
import icon4 from "../assets/icon-4.svg"

function IconSection() {
  return (
    <>
      <div class="grid grid-cols-4 gap-4">
        <Icon icon={icon1} iconText="Regular Competitions" />
        <Icon icon={icon2} iconText="High Quality" />
        <Icon icon={icon3} iconText="Championship" />
        <Icon icon={icon4} iconText="Goal Oriented" />
      </div>
    </>
  );
}

export default IconSection;
