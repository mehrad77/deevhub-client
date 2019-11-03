import { TColors } from '../../types';

export interface IStyledIcon {
  /* specifies the padding of the icon */
  padding?: number;
  /* specifies the fontSize of the icon */
  size?: number;
  /* specifies the color of the icon */
  color?: TColors;
}

export type TIconName =
  | 'down-o'
  | 'retweet-o'
  | 'star-o'
  | 'star-f'
  | 'loading';

export interface IIconProps extends IStyledIcon {
  /* specifies the type of the icon */
  type: TIconName;
  spin?: boolean;
}
