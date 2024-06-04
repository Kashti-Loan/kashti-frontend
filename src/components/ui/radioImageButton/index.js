import { RadioImageButtonWrapper } from "@styles/styledComponent";
import CustomImage from "../customImage";

const RadioImageButton = ({ label, icon, checked, onChange }) => (
  <RadioImageButtonWrapper checked={checked}>
    <input type="radio" checked={checked} onChange={onChange} />
    <div className="radioCircle">
      <span></span>
    </div>
    <CustomImage src={icon} alt={label} />
    <span className="label">{label}</span>
  </RadioImageButtonWrapper>
);

export default RadioImageButton;
