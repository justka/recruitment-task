import { ICON_NAME } from "@/const";
import PlusInCircleIcon from "@/assets/icons/plusInCircle.svg";

interface IconInterface {
  name: string;
}

export function Icon({ name }: IconInterface) {
  switch (name) {
    case ICON_NAME.PLUS_IN_CIRCLE: {
      return <PlusInCircleIcon />;
    }
    default: {
      return <>i</>; // INFO: There should be broken icon image
    }
  }
}
