import React, { memo, useState } from 'react';
import cn from 'classnames';

import { ArrowDownSVG } from 'src/assets/svg';
import { OptionType } from './DropDownTypes';
import s from './DropDown.module.scss';

export interface DropDownHeaderProps {
  title: React.ReactNode;
  icon?: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  selectedOption?: OptionType;
  searchValue: string;
  onSearchValueChange: React.Dispatch<React.SetStateAction<string>>;
}

export const DropDownHeader = memo(({ title, icon, isOpen, onClick, searchValue, onSearchValueChange }: DropDownHeaderProps) => {
  const [inFocus, setInFocus] = useState(false);

  return (
    <div onClick={onClick} className={s.DropDownHeader}>
      <div className={s.DropDownHeader__text}>
        <span className={s.DropDownHeader__text__title}>{title}</span>

        <input
          value={searchValue || (inFocus ? '' : '-')}
          onChange={(e) => onSearchValueChange(e.target.value)}
          onFocus={() => setInFocus(true)}
          onBlur={() => setInFocus(false)}
          className={s.DropDownHeader__text__selected}
        />
      </div>
      {icon || <ArrowDownSVG className={cn(s.DropDownHeader__icon, { [s.DropDownHeader__icon_open]: isOpen })} />}
    </div>
  );
});
