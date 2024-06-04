import { RadioTextButtonWrapper, Text } from "@styles/styledComponent";

const RadioTextButton = ({ label, checked, onChange, note }) => (
  <RadioTextButtonWrapper checked={checked}>
    <input type="radio" checked={checked} onChange={onChange} />
    <div className="innerLabel">
      <span className="label">{label}</span>
      {note && <Text>{note}</Text>}
    </div>
    <div className="radioCircle">
      <span></span>
    </div>
  </RadioTextButtonWrapper>
);

export default RadioTextButton;
