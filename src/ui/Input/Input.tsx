import "../../app/globals.css";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";

interface InputInterface {
  withError?: boolean;
  iconName?: string;
  labelText: string;
  placeholder: string;
  type?: string;
}

export function Input({
  withError = false,
  iconName,
  labelText,
  placeholder,
  type = "text",
  ...rest
}: InputInterface) {
  return (
    <div className="flex flex-col gap-2">
      <label className={`block text-sm ${withError ? "text-red-600" : ""}`}>
        {labelText}
      </label>
      <div className="relative">
        <div className="absolute left-1.5 input__iconContainer">
          {iconName ? <Icon name={iconName} /> : null}
        </div>
        <input
          {...rest}
          className={classNames(
            "h-full p-3 border border-solid border-[#d0d5dd] rounded-lg w-full placeholder:text-[#667085)]",
            { "pl-8": !!iconName, "text-red-600 border-red-600": withError }
          )}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
}
