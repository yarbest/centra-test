import React from 'react';
import classNames from 'classnames';

import s from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

const Button = ({ children, primary, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={classNames(s.Button, className, { [s.Button_primary]: primary })}>
      {children}
    </button>
  );
};

export default Button;
