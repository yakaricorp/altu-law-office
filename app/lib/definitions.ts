import type { ChangeEvent } from "react";

export interface SidebarMenuItem {
  key: string;
  text: string;
  route: string;
}

export type InputPropTypes<T> = {
  value: string;
  onChange: (e: ChangeEvent<T>) => void;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  className?: string;
}


