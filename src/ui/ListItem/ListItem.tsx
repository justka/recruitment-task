import { CreateUpdateMenuItemForm } from "app/CreateUpdateMenuItemForm/CreateUpdateMenuItemForm";
import classNames from "classnames";
import { ICON_NAME } from "const";
import { Button } from "ui/Button/Button";
import { Icon } from "ui/Icon/Icon";

interface ItemInterface {
  name: string;
  level: number;
  id: number;
  link: string;
}

export function ListItem({
  item,
  setVisibleFormDetails,
  visibleFormDetails,
  setListItems,
}: {
  item: ItemInterface;
  setListItems: any;
  visibleFormDetails: {
    location: string;
    level: number;
    id: number;
    parentId: number;
  };
  setVisibleFormDetails: ({
    location,
    level,
    parentId,
  }: {
    location: string;
    level: number;
    parentId: number;
  }) => void;
}) {
  function removeItem(id: number) {
    setListItems((oldItems: any) =>
      oldItems.filter((oldItem: any) => {
        return oldItem.id !== id && oldItem.parentId !== id;
      })
    );
  }
  return (
    <>
      <div
        className={classNames(
          "flex bg-[#fff] border-0 border-solid border-[#d0d5dd] px-6 py-4 justify-between listItem__container"
        )}
        style={{ marginLeft: `${+item.level * 24}px` }}
      >
        <div className="flex items-center gap-6">
          <div>
            <Icon name={ICON_NAME.TWO_CROSSED_DOUBLE_ARROWS} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#000]">{item.name}</p>
            <p className="text-sm text-[#475467]">{item.link}</p>
          </div>
        </div>
        <div>
          <Button
            className="text-[#000] rounded-l-lg text-sm outline-indigo-600 border py-2.5 px-3.5 border-r-0"
            text="Usuń"
            onClick={() => removeItem(item.id)}
          />
          <Button
            className="text-[#000] text-sm outline-indigo-600 border py-2.5 px-3.5"
            text="Edytuj"
          />
          <Button
            className="text-[#000] rounded-r-lg text-sm outline-indigo-600 border py-2.5 px-3.5 border-l-0"
            text="Dodaj pozycję menu"
            onClick={() =>
              setVisibleFormDetails({
                location: "submenu",
                level: +item.level + 1,
                parentId: item.id,
              })
            }
          />
        </div>
      </div>
      {visibleFormDetails.location === "submenu" &&
      visibleFormDetails.parentId === item.id ? (
        <CreateUpdateMenuItemForm
          level={visibleFormDetails.level}
          setListItems={setListItems}
          setVisibleFormDetails={setVisibleFormDetails}
          parentId={item.id}
        />
      ) : null}
    </>
  );
}
