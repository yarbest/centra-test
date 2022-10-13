import React, { memo } from 'react';
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
}

export const DropDownHeader = memo(({ title, icon, isOpen, onClick, selectedOption }: DropDownHeaderProps) => {
  return (
    <div onClick={onClick} className={s.DropDownHeader}>
      <div className={s.DropDownHeader__text}>
        <span className={s.DropDownHeader__text__title}>{title}</span>
        <span className={s.DropDownHeader__text__selected}>{selectedOption?.value || '-'}</span>
      </div>
      {icon || <ArrowDownSVG className={cn(s.DropDownHeader__icon, { [s.DropDownHeader__icon_open]: isOpen })} />}
    </div>
  );
});
