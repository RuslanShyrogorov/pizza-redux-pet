import cn from "classnames";
import s from "./Button.module.scss";

function Button({
  children,
  className,
  onClick,
  type = "button",
  variant = "outlined",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        s.button,
        {
          [s.buttonOutlined]: variant === "outlined",
          [s.buttonContained]: variant === "contained",
          [s.buttonContainedBlack]: variant === "containedBlack",
          [s.buttonIcon]: variant === "icon",
        },
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
