import { Icon } from "ui/Icon/Icon";

interface ButtonInterface {
  className: string;
  iconName?: string;
  text: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

export function Button({
  className,
  iconName,
  text,
  type = "button",
  onClick,
}: ButtonInterface) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {iconName ? <Icon name={iconName} /> : null}
      <span>{text}</span>
    </button>
  );
}
