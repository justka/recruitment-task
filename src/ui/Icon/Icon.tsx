import MagnifierIcon from "@/assets/icons/magnifier.svg";
import PlusInCircleIcon from "@/assets/icons/plusInCircle.svg";
import { ICON_NAME } from "@/const";

interface IconInterface {
  name: string;
}

export function Icon({ name }: IconInterface) {
  switch (name) {
    case ICON_NAME.MAGNIFIER: {
      return <MagnifierIcon className="stroke-[#667085]" />;
    }
    case ICON_NAME.PLUS_IN_CIRCLE: {
      return <PlusInCircleIcon className="fill-[#667085]" />;
    }
    default: {
      return <>i</>; // INFO: There should be broken icon image
    }
  }
}
