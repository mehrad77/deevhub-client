import styled, { css } from 'styled-components';
import { prop, switchProp, theme } from 'styled-tools';
import { IStyledButton } from './types';

export const StyledButton = styled.button<IStyledButton>`
  height: ${prop('height', '40px')};
  width: ${prop('width', 'auto')};
  padding: ${prop('padding', 'auto')};
  background: ${({ kind, color }) =>
    kind === 'filled'
      ? theme('colors.' + color)
      : kind === 'outlined'
      ? theme('colors.backgroundWhite')
      : theme('colors.backgroundWhite')};

  .ButtonText {
    color: ${({ kind, color }) =>
      kind === 'filled'
        ? theme('colors.backgroundWhite')
        : kind === 'outlined'
        ? theme('colors.' + color)
        : theme('colors.textWhite')};
  }
  border: ${({ kind, color }) =>
    kind === 'filled'
      ? 'none'
      : kind === 'outlined'
      ? theme('border.' + color)
      : kind === 'dashed'
      ? theme('border.' + color + 'Dashed')
      : 'none'};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${switchProp('halfBorderRadius', {
    left: css`
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    `,
    right: css`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `,
    both: css`
      border-radius: 0px;
    `,
  })}

  /* TOOD: sort below styles  */
  cursor: pointer;
  transition: 0.05s all;
  :active {
    transform: scale(0.98);
  }

  /* A11Y styles */
  :focus {
    outline: 0;
    box-shadow: 0 0 1px 1px ${({ kind = 'filled', color }) => theme('colors.' + color)}55;
  }
  ::-moz-focus-inner {
    border: 0;
  }
`;
