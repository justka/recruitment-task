import { FORM_FIELD_NAME } from "const";

export function validateField({
  name,
  required = false,
  value = "",
}: {
  name: string;
  required?: boolean;
  value: string;
}) {
  switch (name) {
    case FORM_FIELD_NAME.NAME: {
      if (required && !value) {
        return "This field is required";
      }
      const namePattern = /[a-z]{1,}/.test(value.toLocaleLowerCase());
      if (!namePattern) {
        return "Invalid value";
      }
      return undefined;
    }
    case FORM_FIELD_NAME.LINK: {
      const linkPattern =
        /\bhttps?:\/\/(?:(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)(?:\/[+~%\/.\w_-]*\??(?:[-+=&;%@.\w_]*)#?[.!\/\\\w]*)?/.test(
          value.toLocaleLowerCase()
        );
      if (!linkPattern) {
        return "Invalid value";
      }
      return undefined;
    }
    default: {
      return undefined;
    }
  }
}
