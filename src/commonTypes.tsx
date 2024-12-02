import {
  ListItemsInterface,
  SetVisibleFormDetailsInterface,
} from "commonInterfaces";
import { Dispatch, SetStateAction } from "react";

export type SetListItemsType = Dispatch<SetStateAction<ListItemsInterface[]>>;

export type SetVisibleFormDetailsType = Dispatch<
  SetStateAction<SetVisibleFormDetailsInterface>
>;

export type SetVisibleFormDetailsValueType = object;
