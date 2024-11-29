import { Field } from "react-final-form";
import { validateField } from "ui/Form/Form.utils";
import { Input } from "ui/Input/Input";

interface FormFieldInterface {
  iconName?: string;
  name: string;
  label: string;
  placeholder: string;
}

export function FormField({
  iconName,
  name,
  label,
  placeholder,
}: FormFieldInterface) {
  return (
    <Field
      validate={(value) =>
        validateField({
          name,
          required: true,
          value,
        })
      }
      name={name}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
    >
      {(props) => {
        const meta = props.meta;
        const withError = meta.error && meta.touched;
        return (
          <div>
            <Input
              {...props.input}
              iconName={iconName}
              withError={withError}
              labelText={label}
              placeholder={placeholder}
            />
            <>
              {withError ? (
                <span className="text-red-600 text-xs italic">
                  {meta.error}
                </span>
              ) : null}
            </>
          </div>
        );
      }}
    </Field>
  );
}
