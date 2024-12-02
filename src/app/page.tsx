"use client";

import { ListItemsInterface } from "commonInterfaces";
import { EventHandler, useState } from "react";
import { List } from "ui/List/List";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCenter,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { CreateUpdateMenuItemForm } from "./CreateUpdateMenuItemForm/CreateUpdateMenuItemForm";
import { NoItemsOnList } from "./NoItemsOnList/NoItemsOnList";
import { DraggableItem } from "DraggableItem/DraggableItem";

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
  const [activeId, setActiveId] = useState<null | number>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(+event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = listItems.findIndex((item) => item.id === active.id);
      const newIndex = listItems.findIndex((item) => item.id === over.id);
      setListItems((prevItems) => arrayMove(prevItems, oldIndex, newIndex));
    }
    setActiveId(null);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  return (
    <>
      {!listItems.length ? (
        <div className="m-2">
          <NoItemsOnList setVisibleFormDetails={setVisibleFormDetails} />
        </div>
      ) : (
        <div className="m-2">
          <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            <List
              visibleFormDetails={visibleFormDetails}
              listItems={listItems}
              setVisibleFormDetails={setVisibleFormDetails}
              setListItems={setListItems}
            />
            <DragOverlay style={{ width: "100%" }}>
              {activeId ? (
                <DraggableItem
                  id={0}
                  name={
                    listItems.find((item) => item.id === activeId)?.name || "?"
                  }
                  link={
                    listItems.find((item) => item.id === activeId)?.link || "?"
                  }
                  isOverlay={true}
                />
              ) : null}
            </DragOverlay>
          </DndContext>
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
