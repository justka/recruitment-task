import { CreateUpdateMenuItemForm } from "app/CreateUpdateMenuItemForm/CreateUpdateMenuItemForm";
import { Dispatch, SetStateAction } from "react";
import { Button } from "ui/Button/Button";
import { ListItem } from "ui/ListItem/ListItem";

export interface ItemInterface {
  name: string;
  link: string;
  id: number;
  level: number;
  parentId: number;
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
  listItems: ItemInterface[];
  setVisibleFormDetails: any;
  setListItems: any;
  visibleFormDetails: {
    location: string;
    level: number;
    parentId: number;
    id: number;
  };
}) {
  const sortedItems = sortMenuItemsOnList(listItems);

  return (
    <div className="rounded-md border-[#d0d5dd] border border-solid">
      {sortedItems.map((item) => {
        return (
          <ListItem
            setListItems={setListItems}
            item={item}
            setVisibleFormDetails={setVisibleFormDetails}
            key={item.id}
            visibleFormDetails={visibleFormDetails}
          />
        );
      })}
      {visibleFormDetails.location === "menu" ? (
        <CreateUpdateMenuItemForm
          level={visibleFormDetails.level}
          setListItems={setListItems}
          setVisibleFormDetails={setVisibleFormDetails}
        />
      ) : null}
      <div className="p-5">
        <Button
          className="text-[#000] shadow-sm shadow-[#1018280D] bg-[#fff] rounded-r-lg text-sm outline-indigo-600 border py-2.5 px-3.5 border-l-0"
          text="Dodaj pozycję menu"
          onClick={() =>
            setVisibleFormDetails({ location: "menu", level: 0, parentId: 0 })
          }
        />
      </div>
    </div>
  );
}
