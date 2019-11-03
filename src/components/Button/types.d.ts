import { TColors } from '../../types';

export interface IStyledButton {
  kind?: 'filled' | 'outlined' | 'dashed';
  color?: TColors;
  halfBorderRadius?: 'left' | 'right' | 'both';
  // TODO: remove these `heiht` and `width` when the StyleGuide was ready
  height?: string;
  width?: string;
  padding?: string;
}

export interface IButtonProps extends IStyledButton {
  /** Text value of the button */
  text: string;
  //
  type?: 'submit';
  //
  loading?: boolean;
  /** A function that will be used on `onClick` event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /** If there was no `onClick` prop, this 'href' value
   * will be used to redirect use to the given href
   **/
  href?: string;
  /** Button `disabled` prop **/
  disabled?: boolean;
  /** Pass extra style object **/
  style?: React.CSSProperties;
  /** spesify the classname of the Button **/
  className?: string;
}
