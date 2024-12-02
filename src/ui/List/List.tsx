import { CreateUpdateMenuItemForm } from "app/CreateUpdateMenuItemForm/CreateUpdateMenuItemForm";
import {
  ListItemsInterface,
  VisibleFormDetailsInterface,
} from "commonInterfaces";
import { SetListItemsType, SetVisibleFormDetailsType } from "commonTypes";
import { Button } from "ui/Button/Button";
import { ListItem } from "ui/ListItem/ListItem";
import { useDraggable, useDroppable } from "@dnd-kit/core";

export interface ItemInterface {
  id: number;
  parentId: number;
  level: number;
}

function sortMenuItemsOnList(items: ItemInterface[]) {
  const result: ItemInterface[] = [];

  function addMenuItemsToList(parentId: number, level: number) {
    items
      .filter((item: ItemInterface) => item.parentId === parentId)
      .forEach((item: ItemInterface) => {
        result.push(item);
        addMenuItemsToList(item.id, level + 1);
      });
  }

  addMenuItemsToList(0, 0);

  return result;
}

export function List({
  listItems,
  setVisibleFormDetails,
  setListItems,
  visibleFormDetails,
}: {
  listItems: {
    id: number;
    level: number;
    parentId: number;
  }[];
  setVisibleFormDetails: SetVisibleFormDetailsType;
  setListItems: SetListItemsType;
  visibleFormDetails: VisibleFormDetailsInterface;
}) {
  const sortedItems = sortMenuItemsOnList(listItems);

  return (
    <div className="rounded-md border-[#d0d5dd] border border-solid">
      {sortedItems.map((item) => {
        return (
          <ListItem
            listItems={listItems}
            setListItems={setListItems}
            item={item}
            setVisibleFormDetails={setVisibleFormDetails}
            key={item.id}
            id={item.id}
            visibleFormDetails={visibleFormDetails}
          />
        );
      })}
      {visibleFormDetails.location === "menu" &&
      visibleFormDetails.mode === "add" ? (
        <CreateUpdateMenuItemForm
          listItems={listItems}
          level={visibleFormDetails.level}
          setListItems={setListItems}
          visibleFormDetails={visibleFormDetails}
          setVisibleFormDetails={setVisibleFormDetails}
          mode={visibleFormDetails.mode}
          initialValues={visibleFormDetails.initialValues}
        />
      ) : null}
      <div className="p-5">
        <Button
          className="text-[#000] shadow-sm shadow-[#1018280D] bg-[#fff] rounded-r-lg text-sm outline-indigo-600 border py-2.5 px-3.5 border-l-0"
          text="Dodaj pozycję menu"
          onClick={() =>
            setVisibleFormDetails({
              location: "menu",
              level: 0,
              parentId: 0,
              isFormVisible: true,
              id: 0,
              mode: "add",
            })
          }
        />
      </div>
    </div>
  );
}
