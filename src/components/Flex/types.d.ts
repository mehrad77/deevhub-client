import { FlexboxProps } from 'styled-system';

export interface ICommonStyles {
  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
  textAlign?: 'center';
  minWidth?: string;
}

export interface CustomFlexBoxProps extends FlexboxProps, ICommonStyles {
  className?: string;
}
