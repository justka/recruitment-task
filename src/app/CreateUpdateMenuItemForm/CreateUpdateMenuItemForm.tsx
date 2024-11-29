import classNames from "classnames";
import { FORM_FIELD_NAME, ICON_NAME } from "const";
import { Dispatch, SetStateAction } from "react";
import { Form } from "ui/Form/Form";

interface CreateUpdateMenuItemFormInterface {
  setListItems: Dispatch<
    SetStateAction<{ id: number; parentId: number; level: number }[]>
  >;
  setVisibleFormDetails: ({
    location,
    id,
    level,
    parentId,
  }: {
    location: string;
    level: number;
    id: number;
    parentId: number;
  }) => void;
  level?: number;
  parentId?: number;
}

export function CreateUpdateMenuItemForm({
  setListItems,
  setVisibleFormDetails,
  level = 0,
  parentId = 0,
}: CreateUpdateMenuItemFormInterface) {
  return (
    <div
      className={classNames(
        "bg-[#fff] rounded-lg border-solid border m-2 p-6 relative"
        // { [`ml-${+level * 12}`]: !!+level }
      )}
      style={{ marginLeft: `${+level * 24}px` }}
    >
      <Form
        setVisibleFormDetails={setVisibleFormDetails}
        fields={[
          {
            name: FORM_FIELD_NAME.NAME,
            label: "Nazwa",
            placeholder: "Promocje",
          },
          {
            iconName: ICON_NAME.MAGNIFIER,
            name: FORM_FIELD_NAME.LINK,
            label: "URL",
            placeholder: "Wklej lub wyszukaj",
          },
        ]}
        onCancel={() => {
          setVisibleFormDetails({ location: "", level: 0, parentId: 0, id: 0 });
        }}
        onSubmit={(values) => {
          const id = Math.floor(new Date().getTime() / 1000);
          setListItems((old) => [...old, { ...values, id, parentId, level }]);
          setVisibleFormDetails({
            location: "",
            parentId: id,
            level: 0,
            id: 0,
          });
        }}
      />
    </div>
  );
}
