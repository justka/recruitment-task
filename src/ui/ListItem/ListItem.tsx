import { CreateUpdateMenuItemForm } from "app/CreateUpdateMenuItemForm/CreateUpdateMenuItemForm";
import classNames from "classnames";
import {
  ListItemsInterface,
  VisibleFormDetailsInterface,
} from "commonInterfaces";
import {
  SetListItemsType,
  SetVisibleFormDetailsType,
  SetVisibleFormDetailsValueType,
} from "commonTypes";
import { ICON_NAME } from "const";
import { Button } from "ui/Button/Button";
import { Icon } from "ui/Icon/Icon";

interface ItemInterface {
  id: number;
  parentId: number;
  level: number;
  name?: string;
  link?: string;
}

export function ListItem({
  item,
  setVisibleFormDetails,
  visibleFormDetails,
  setListItems,
  listItems,
}: {
  item: ItemInterface;
  listItems?: {
    id: number;
    level: number;
    parentId: number;
  }[];
  setListItems: SetListItemsType;
  visibleFormDetails: VisibleFormDetailsInterface;
  setVisibleFormDetails: SetVisibleFormDetailsType;
}) {
  function removeItem(id: number) {
    setListItems(
      (currentListItems: { id: number; parentId: number; level: number }[]) =>
        currentListItems.filter((currentListItem) => {
          return currentListItem.id !== id && currentListItem.parentId !== id;
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
            onClick={() => {
              setVisibleFormDetails(
                (
                  setVisibleFormDetailsValue: SetVisibleFormDetailsValueType
                ) => {
                  return {
                    ...setVisibleFormDetailsValue,
                    location: "menu",
                    level: item.level,
                    initialValues: item,
                    mode: "edit",
                    id: item.id,
                    isFormVisible: true,
                    parentId: 0,
                  };
                }
              );
            }}
          />
          <Button
            className="text-[#000] rounded-r-lg text-sm outline-indigo-600 border py-2.5 px-3.5 border-l-0"
            text="Dodaj pozycję menu"
            onClick={() =>
              setVisibleFormDetails(
                (
                  setVisibleFormDetailsValue: SetVisibleFormDetailsValueType
                ) => ({
                  ...setVisibleFormDetailsValue,
                  initialValues: {},
                  location: "submenu",
                  level: +item.level + 1,
                  parentId: item.id,
                  mode: "add",
                  id: 0,
                  isFormVisible: true,
                })
              )
            }
          />
        </div>
      </div>
      {visibleFormDetails.location === "submenu" &&
      visibleFormDetails.parentId === item.id ? (
        <CreateUpdateMenuItemForm
          listItems={listItems}
          level={visibleFormDetails.level}
          setListItems={setListItems}
          setVisibleFormDetails={setVisibleFormDetails}
          parentId={item.id}
          initialValues={visibleFormDetails.initialValues}
          mode={visibleFormDetails.mode}
          visibleFormDetails={visibleFormDetails}
        />
      ) : null}
      {visibleFormDetails.location === "menu" &&
      visibleFormDetails.mode === "edit" &&
      visibleFormDetails.id === item.id ? (
        <CreateUpdateMenuItemForm
          listItems={listItems}
          level={visibleFormDetails.level}
          setListItems={setListItems}
          setVisibleFormDetails={setVisibleFormDetails}
          visibleFormDetails={visibleFormDetails}
          mode={visibleFormDetails.mode}
          initialValues={visibleFormDetails.initialValues}
        />
      ) : null}
    </>
  );
}
