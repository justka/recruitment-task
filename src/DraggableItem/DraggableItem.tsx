import { ListItem } from "ui/ListItem/ListItem";
import { useDraggable } from "@dnd-kit/core";

interface DraggableItemIterface {
  id: number;
  isOverlay: boolean;
  name: string;
  link: string;
}

export function DraggableItem({
  id,
  isOverlay,
  name,
  link,
}: DraggableItemIterface) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <ListItem
        setVisibleFormDetails={() => {}}
        id={id}
        item={{
          id: 0,
          parentId: 0,
          level: 0,
          name,
          link,
        }}
        setListItems={() => {}}
        visibleFormDetails={{
          id: 0,
          level: 0,
          location: "",
          mode: "",
          parentId: 0,
        }}
      />
    </div>
  );
}
