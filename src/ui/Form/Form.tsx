import { FormField } from "app/FormField/FormField";
import { ICON_NAME } from "const";
import { Form as ReactFinalForm } from "react-final-form";
import { Button } from "ui/Button/Button";
import { Icon } from "ui/Icon/Icon";

interface FieldInterface {
  iconName?: string;
  name: string;
  label: string;
  placeholder: string;
}

export const Form = ({
  fields,
  onSubmit,
  setVisibleFormDetails,
  onCancel,
}: {
  fields: FieldInterface[];
  onSubmit: (values: object) => void;
  onCancel: () => void;
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
}) => {
  return (
    <ReactFinalForm
      onSubmit={(values, form) => {
        onSubmit(values);
        form.restart();
      }}
      render={({ handleSubmit }) => {
        return (
          <form
            className="col-span-full flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4">
              <Icon
                name={ICON_NAME.TRASH}
                onClick={() => {
                  setVisibleFormDetails({
                    location: "",
                    level: 0,
                    parentId: 0,
                    id: 0,
                  });
                }}
              />
              {fields.map((field: FieldInterface) => {
                return (
                  <FormField
                    iconName={field.iconName}
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                  />
                );
              })}
            </div>
            <div className="flex items-center gap-2">
              <Button
                className="text-[#000] rounded-md text-sm border py-2.5 px-3.5"
                text="Anuluj"
                onClick={onCancel}
              />
              <Button
                className="text-[#6941C6] rounded-md text-sm border-[#D6BBFB] border py-2.5 px-3.5 flex items-center gap-1"
                text="Dodaj"
                type="submit"
              />
            </div>
          </form>
        );
      }}
    />
  );
};
