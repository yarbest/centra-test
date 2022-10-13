import React, { Fragment } from 'react';
import classNames from 'classnames';

import { useKeyBoardArrows } from 'src/hooks/useKeyBoardArrows';
import { OptionType } from './DropDownTypes';
import s from './DropDown.module.scss';

export interface DropDownListProps {
  isOpen: boolean;
  options: OptionType[];
  onSelect: (option: OptionType) => void;
  selectedOption?: OptionType;
}

const DropDownList = ({ isOpen, options, onSelect, selectedOption = options[0] }: DropDownListProps) => {
  const isOptionSelected = (option: OptionType) => option.id === selectedOption.id;
  const selectedOptionIndex = options.findIndex((option) => option.id === selectedOption.id);
  useKeyBoardArrows({
    onUp: () => {
      const isSelectedOptionIndexFirst = selectedOptionIndex === 0;
      const lastOption = options[options.length - 1];
      onSelect(isSelectedOptionIndexFirst ? { ...lastOption } : { ...options[selectedOptionIndex - 1] });
    },
    onDown: () => {
      const isSelectedOptionIndexLast = options.length - 1 === selectedOptionIndex;
      onSelect(isSelectedOptionIndexLast ? { ...options[0] } : { ...options[selectedOptionIndex + 1] });
    },
    disabled: !isOpen,
  });

  return (
    <ul className={classNames(s.DropDownList, { [s.DropDownList_open]: isOpen })}>
      {options.map((option, i) => (
        <Fragment key={option.id}>
          <li
            onClick={() => onSelect(option)}
            className={classNames(s.DropDownList__item, { [s.DropDownList__item_selected]: isOptionSelected(option) })}
          >
            {option.icon} {option.value}
          </li>
          {i === 0 && <div className={s.DropDownList__divider} />}
        </Fragment>
      ))}
    </ul>
  );
};

export default DropDownList;
