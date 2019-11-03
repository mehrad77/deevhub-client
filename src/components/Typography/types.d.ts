export type TTextColors = 'blue' | 'green' | 'white' | 'black' | 'seconfGrety' | 'thisdGrey' | 'firstGray';
export type THeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export type THeadingTags = `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;

export interface IStyledHeading {
  weight?: number;
  level: THeadingLevels;
  color?: TTextColors;
  padding?: string;
}

export interface IHeading extends IStyledHeading {
  level: THeadingLevels;
  children?: ReactNode;
}

export interface IText {
  weight?: number;
  align?: 'center';
  color?: TTextColors;
  size?: '14px' | '16px' | '18px' | '20px' | '22px' | '24px' | '26px' | '28px';
  padding?: string;
  lineHeight?: string;
  cursor?: 'pointer';
}
