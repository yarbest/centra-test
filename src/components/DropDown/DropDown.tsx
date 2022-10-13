import React, { useCallback, useState, useRef, useEffect } from 'react';
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
  onSelect: (option?: OptionType) => void;
  selectedOptionProp?: OptionType;
}

const DropDown = ({ options, title, icon, className, onSelect, selectedOptionProp }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>();
  const [searchValue, setSearchValue] = useState(selectedOption?.value || '');

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleOpen = useCallback(() => setIsOpen((prev) => !prev), []);
  const handleSelect = useCallback((option: OptionType) => setSelectedOption(option), []);

  useEffect(() => onSelect(selectedOption), [selectedOption, onSelect]);
  useEffect(() => setSelectedOption(selectedOptionProp), [selectedOptionProp]);
  useEffect(() => setSearchValue(selectedOption?.value || ''), [selectedOption]);

  return (
    <div ref={dropdownRef} className={classNames(s.DropDown, className)}>
      <DropDownHeader
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        title={title}
        icon={icon}
        isOpen={isOpen}
        onClick={handleOpen}
        selectedOption={selectedOption}
      />
      <DropDownList searchValue={searchValue} options={options} isOpen={isOpen} onSelect={handleSelect} selectedOption={selectedOption} />
    </div>
  );
};

export default DropDown;
