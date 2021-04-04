import { Button as AntdButton } from 'antd';
import { BaseButtonProps } from 'antd/lib/button/button';
import React, { Component } from 'react';

interface State {}

interface Props extends BaseButtonProps {
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export class Button extends Component<Props, State> {
  switchTypeClass = (): string => {
    const { type } = this.props;
    if (type === 'primary') {
      return 'primary-button';
    }
    return '';
  };

  render() {
    const { children, className } = this.props;

    return (
      <AntdButton {...this.props} className={`${this.switchTypeClass()} ${className}`}>
        {children}
      </AntdButton>
    );
  }
}
