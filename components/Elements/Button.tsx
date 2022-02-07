import React, { FC } from 'react';

const variants = {
    primary: 'primary',
    inverse: 'inverse',
    danger: 'danger',
  };
  
const sizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
};
  
interface IProps {
    size: keyof typeof sizes;
    variant: keyof typeof variants;
    [x: string]: any

}
const  Button:FC<IProps> = ({
    children,
    size,
    variant,
    ...props
}) => {
  return(
    <div 
      {...props}
        className={`
        button
        ${size}
        button--${variant}
        `} 
    >
        {children}
    </div>
  )
}

export default Button;
