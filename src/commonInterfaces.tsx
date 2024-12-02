export interface InitialValuesInterface {
  [key: string]: string;
}

export interface VisibleFormDetailsInterface {
  id: number;
  initialValues?: InitialValuesInterface;
  level: number;
  location: string;
  mode: string;
  parentId: number;
}

export interface ListItemsInterface {
  id: number;
  level: number;
  parentId: number;
  name?: string;
  link?: string;
}
[];

export interface SetVisibleFormDetailsInterface {
  id: number;
  isFormVisible: boolean;
  level: number;
  location: string;
  mode: string;
  parentId: number;
}
