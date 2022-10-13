import React, { useCallback, useState, useRef } from 'react';
import classNames from 'classnames';

import { useOnClickOutside } from 'src/hooks/useClickOutside';
import { DropDownHeader } from './DropDownHeader';
import DropDownList from './DropDownList';
import { OptionType } from './DropDownTypes';
import s from './DropDown.module.scss';

export interface DropDownProps {
  options: OptionType[];
  title: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const DropDown = ({ options, title, icon, className }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleOpen = useCallback(() => setIsOpen((prev) => !prev), []);
  const handleSelect = useCallback((option: OptionType) => setSelectedOption(option), []);
  return (
    <div ref={dropdownRef} className={classNames(s.DropDown, className)}>
      <DropDownHeader title={title} icon={icon} isOpen={isOpen} onClick={handleOpen} selectedOption={selectedOption} />
      <DropDownList options={options} isOpen={isOpen} onSelect={handleSelect} selectedOption={selectedOption} />
    </div>
  );
};

export default DropDown;
