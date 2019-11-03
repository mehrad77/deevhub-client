import styled from 'styled-components';
import { TabPanel } from 'reakit/Tab';
import { theme } from 'styled-tools';
import { Flex } from '../../components';

export const StyledTabPanel = styled(TabPanel)`
  padding: 30px 0;
`;

export const StyledFlex = styled(Flex)`
  div[role='tablist'] button {
    min-width: 100px;
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    padding-bottom: 1.2rem;
    margin: 0;
    text-decoration: none;
    background: transparent;
    border-bottom: 1px solid ${theme('colors.firstGrey')};
    color: ${theme('colors.seconfGrety')};
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    transition: all 150ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;

    :hover,
    :focus,
    &[aria-selected='true'] {
      color: ${theme('colors.black')};
      border-bottom: 4px solid ${theme('colors.blue')};
      padding-bottom: 1rem;
    }

    ::-moz-focus-inner {
      border: 0;
    }

    :focus {
    }

    :active {
    }
  }
`;
