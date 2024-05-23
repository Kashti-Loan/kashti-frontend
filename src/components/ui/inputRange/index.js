

const InputRange = (props) => {
  const MAX = props.max;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(props.value * 100) / MAX}% 100%`,
    };
  };

  return (
    <input
      type="range"
      min="0"
      max={MAX}
      onChange={(e) => {
        props.onChange(e.target.value)
      }}
      style={getBackgroundSize()}
      value={props.value}
      className={props.className || 'norangeClass'}
    />
  );
};

export default InputRange;
