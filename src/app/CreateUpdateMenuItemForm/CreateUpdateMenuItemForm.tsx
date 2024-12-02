import classNames from "classnames";
import {
  InitialValuesInterface,
  ListItemsInterface,
  VisibleFormDetailsInterface,
} from "commonInterfaces";
import {
  SetListItemsType,
  SetVisibleFormDetailsType,
  SetVisibleFormDetailsValueType,
} from "commonTypes";
import { FORM_FIELD_NAME, ICON_NAME } from "const";
import { Form } from "ui/Form/Form";

interface CreateUpdateMenuItemFormInterface {
  initialValues?: InitialValuesInterface;
  level?: number;
  listItems?: ListItemsInterface[];
  mode?: string;
  parentId?: number;
  setListItems: SetListItemsType;
  setVisibleFormDetails: SetVisibleFormDetailsType;
  visibleFormDetails: VisibleFormDetailsInterface;
}

export function CreateUpdateMenuItemForm({
  setListItems,
  setVisibleFormDetails,
  level = 0,
  parentId = 0,
  initialValues = {},
  visibleFormDetails,
  listItems,
}: CreateUpdateMenuItemFormInterface) {
  return (
    <div
      className={classNames(
        "bg-[#fff] rounded-lg border-solid border m-2 p-6 relative"
      )}
      style={{ marginLeft: `${+level * 24}px` }}
    >
      <Form
        initialValues={initialValues}
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
          setVisibleFormDetails(() => ({
            location: "",
            level: 0,
            parentId: 0,
            id: 0,
            mode: "add",
            isFormVisible: false,
          }));
        }}
        onSubmit={(values) => {
          if (visibleFormDetails.mode === "add") {
            const id = Math.floor(new Date().getTime() / 1000);
            setListItems((currentListItems) => [
              ...currentListItems,
              { ...values, id, parentId, level },
            ]);
            setVisibleFormDetails(
              (setVisibleFormDetailsValue: SetVisibleFormDetailsValueType) => ({
                ...setVisibleFormDetailsValue,
                location: "",
                parentId: 0,
                level: 0,
                id: 0,
                mode: visibleFormDetails.mode,
                isFormVisible: false,
              })
            );
            return;
          }
          setListItems((currentListItems) => {
            const foundIndex = (listItems || []).findIndex(
              (currentListItem) => currentListItem.id === visibleFormDetails.id
            );
            const newListIlems = [...currentListItems];
            newListIlems[foundIndex] = {
              ...newListIlems[foundIndex],
              ...values,
            };
            return [...newListIlems];
          });
          setVisibleFormDetails(
            (setVisibleFormDetailsValue: SetVisibleFormDetailsValueType) => ({
              ...setVisibleFormDetailsValue,
              location: "",
              parentId: 0,
              level: 0,
              id: 0,
              mode: visibleFormDetails.mode,
              isFormVisible: false,
            })
          );
        }}
      />
    </div>
  );
}
