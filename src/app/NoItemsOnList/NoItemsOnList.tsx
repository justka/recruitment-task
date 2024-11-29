import { ICON_NAME } from "const";
import { Button } from "ui/Button/Button";

export function NoItemsOnList({ setVisibleFormDetails }: any) {
  return (
    <div className="flex flex-col items-center w-full bg-[#fff] gap-4 py-4 px-6 rounded-md">
      <div className="flex flex-col gap-2 items-center">
        <p className="font-semibold text-base leading-none text-[#101828]">
          Menu jest puste
        </p>
        <p className="text-[#475467] text-sm leading-none">
          W tym menu nie ma jeszcze żadnych linków.
        </p>
      </div>
      <Button
        className="text-[#fff] bg-[#7F56D9] rounded-md text-sm leading-none outline-indigo-600 border py-2.5 px-3.5 flex items-center gap-1 noItemsOnList__button"
        iconName={ICON_NAME.PLUS_IN_CIRCLE}
        text="Dodaj pozycję menu"
        onClick={() =>
          setVisibleFormDetails({ location: "main", level: 0, parentId: 0 })
        }
      />
    </div>
  );
}
