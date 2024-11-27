import { ICON_NAME } from "@/const";
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import { Form as ReactFinalForm, Field } from "react-final-form";

export const Form = () => (
  <ReactFinalForm
    onSubmit={(values) => console.log("onSubmit", values)}
    validate={(error) => error}
    render={({ handleSubmit }) => (
      <form
        className="col-span-full flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <Field
            validate={(value = "") => {
              const errors: { name?: JSX.Element } = {};
              const validationResult = /[a-z]{1,}/.test(
                value.toLocaleLowerCase()
              );
              if (!validationResult) {
                errors.name = <span>Invalid</span>;
              }
              if (!value) {
                errors.name = <span>'Required'</span>;
              }
              return errors;
            }}
            name="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          >
            {(props) => {
              const meta = props.meta;
              return (
                <div>
                  <Input
                    {...props.input}
                    labelText="Nazwa"
                    placeholder="np. Promocje"
                  />
                  <>
                    {meta.error?.name && meta.touched ? (
                      <span>{meta.error.name}</span>
                    ) : null}
                  </>
                </div>
              );
            }}
          </Field>
          <Field
            validate={(value = "") => {
              const errors: { link?: JSX.Element } = {};
              const validationResult = /[a-z]{1,}/.test(
                value.toLocaleLowerCase()
              );
              if (!validationResult) {
                errors.link = <span>Invalid</span>;
              }
              if (!value) {
                errors.link = <span>'Required'</span>;
              }
              return errors;
            }}
            name="link"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          >
            {(props) => {
              const meta = props.meta;
              return (
                <div>
                  <Input
                    {...props.input}
                    iconName={ICON_NAME.MAGNIFIER}
                    labelText="Link"
                    placeholder="Wklej lub wyszukaj"
                  />
                  <>
                    {meta.error?.link && meta.touched ? (
                      <span>{meta.error.link}</span>
                    ) : null}
                  </>
                </div>
              );
            }}
          </Field>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="text-[#000] rounded-md px-3 py-2 text-sm outline-indigo-600 border py-2.5 px-3.5"
            text="Anuluj"
          />
          <Button
            className="text-indigo-600 rounded-md px-3 py-2 text-sm outline-indigo-600 border py-2.5 px-3.5 flex items-center gap-1"
            text="Dodaj"
            type="submit"
          />
        </div>
      </form>
    )}
  />
);
