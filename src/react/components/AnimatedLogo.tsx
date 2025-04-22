import classNames from "classnames";
import useTypingSimulator from "../hooks/useTypingSimulator";

function AnimatedLogo() {
  const { displayedText, showCursor } = useTypingSimulator('jaxn.dev');

  return (
    <span>
      <span>{displayedText}</span>
      <span className={classNames({ hidden: showCursor })}>&#9608;</span>
    </span>
  );
}

export default AnimatedLogo;