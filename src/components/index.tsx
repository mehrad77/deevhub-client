import styled from 'styled-components';

export { default as Footer } from './Footer';
export { Heading, Text, Paragraph } from './Typography';
export { default as Button } from './Button';
export { Flex, Box } from './Flex';
export { default as Icon } from './Icon';
export { default as Tab } from './Tab';

export const Contianer = styled.div`
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
