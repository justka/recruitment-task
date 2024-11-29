import { ICON_NAME } from "const";
import MagnifierIcon from "../../assets/icons/magnifier.svg";
import PlusInCircleIcon from "../../assets/icons/plusInCircle.svg";
import TrashIcon from "../../assets/icons/trash.svg";
import TwoCrossedDoubleArrowsIcon from "../../assets/icons/twoCrossedDoubleArrows.svg";

interface IconInterface {
  name: string;
  onClick?: () => void;
}

export function Icon({ name, onClick }: IconInterface) {
  switch (name) {
    case ICON_NAME.MAGNIFIER: {
      return (
        <MagnifierIcon
          onClick={onClick}
          className="stroke-[#667085]"
        />
      );
    }
    case ICON_NAME.PLUS_IN_CIRCLE: {
      return (
        <PlusInCircleIcon
          onClick={onClick}
          className="fill-[#667085]"
        />
      );
    }
    case ICON_NAME.TRASH: {
      return (
        <TrashIcon
          onClick={onClick}
          className="absolute top-5 right-5"
        />
      );
    }
    case ICON_NAME.TWO_CROSSED_DOUBLE_ARROWS: {
      return (
        <TwoCrossedDoubleArrowsIcon
          onClick={onClick}
          className="fill-[#667085]"
        />
      );
    }
    default: {
      return <>i</>; // INFO: There should be broken icon image
    }
  }
}
