import React, { FC } from 'react';
import { Text, Icon } from '..';
import { StyledButton } from './Styles';
import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({
  text,
  color,
  loading,
  onClick,
  href = '',
  ...rest
}) => {
  return (
    <StyledButton {...rest} color={color ? color : 'blue'} onClick={onClick}>
      {!loading && <Text className="ButtonText">{text}</Text>}
      {loading && <Icon type="loading" />}
    </StyledButton>
  );
};

Button.defaultProps = {
  kind: 'filled',
  color: 'blue',
};

export default React.memo(Button);
