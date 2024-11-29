"use client";

import { useState } from "react";
import { List } from "ui/List/List";
import { CreateUpdateMenuItemForm } from "./CreateUpdateMenuItemForm/CreateUpdateMenuItemForm";
import { NoItemsOnList } from "./NoItemsOnList/NoItemsOnList";

export default function Home() {
  const [listItems, setListItems] = useState<any>([]);
  const [visibleFormDetails, setVisibleFormDetails] = useState({
    location: "",
    level: 0,
    parentId: 0,
    id: 0,
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
      {visibleFormDetails.location === "main" ? (
        <CreateUpdateMenuItemForm
          setListItems={setListItems}
          setVisibleFormDetails={setVisibleFormDetails}
        />
      ) : null}
    </>
  );
}
