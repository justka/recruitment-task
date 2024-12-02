"use client";

import { ListItemsInterface } from "commonInterfaces";
import { useState } from "react";
import { List } from "ui/List/List";
import { CreateUpdateMenuItemForm } from "./CreateUpdateMenuItemForm/CreateUpdateMenuItemForm";
import { NoItemsOnList } from "./NoItemsOnList/NoItemsOnList";

export default function Home() {
  const [listItems, setListItems] = useState<ListItemsInterface[]>([]);
  const [visibleFormDetails, setVisibleFormDetails] = useState({
    location: "",
    level: 0,
    parentId: 0,
    id: 0,
    mode: "add",
    isFormVisible: false,
  });

  return (
    <>
      {!listItems.length ? (
        <div className="m-2">
          <NoItemsOnList setVisibleFormDetails={setVisibleFormDetails} />
        </div>
      ) : (
        <div className="m-2">
          <List
            visibleFormDetails={visibleFormDetails}
            listItems={listItems}
            setVisibleFormDetails={setVisibleFormDetails}
            setListItems={setListItems}
          />
        </div>
      )}
      {visibleFormDetails.location === "main" &&
      visibleFormDetails.isFormVisible ? (
        <CreateUpdateMenuItemForm
          listItems={listItems}
          setListItems={setListItems}
          setVisibleFormDetails={setVisibleFormDetails}
          mode="add"
          visibleFormDetails={visibleFormDetails}
        />
      ) : null}
    </>
  );
}
