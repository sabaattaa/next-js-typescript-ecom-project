export interface DropdownOption {
  id: number;
  option: string;
}
interface DropDownStyle extends React.CSSProperties {
  color?: string;
  backgroundColor?: string;
}

export interface Dropdown {
  text: string;
  icon?: React.ReactNode;
  style?: DropDownStyle;
  optionsArray: DropdownOption[];
  getSelectedValue?: (value: string) => string;
}
