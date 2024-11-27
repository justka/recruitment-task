import { Icon } from "ui/Icon/Icon";

interface ButtonInterface {
  className: string;
  iconName?: string;
  text: string;
  type?: "submit" | "button";
}

export function Button({
  className,
  iconName,
  text,
  type = "button",
}: ButtonInterface) {
  return (
    <button
      className={className}
      type={type}
    >
      {iconName ? <Icon name={iconName} /> : null}
      <span>{text}</span>
    </button>
  );
}
