import React from 'react';

export interface SelectOptionProps extends Omit<React.OptionHTMLAttributes<HTMLOptionElement>, 'value'> {
  value: string | number | undefined;
}

const SelectOption: React.FC<SelectOptionProps> = ({ children, ...props }) => {
  return <option {...props}>{children}</option>;
};

export default SelectOption;
