import React, { useMemo, useState, useEffect } from 'react';
import classnames from 'classnames';
import { CloseSVG, SearchSVG } from 'src/assets/svg';
import { OptionType } from 'src/components/DropDown/DropDownTypes';

import s from './Search.module.scss';

interface SearchModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  onSelect: (option: OptionType) => void;
  options: OptionType[];
}

const SearchModal = ({ isOpen, onClose, title, onSelect, options }: SearchModalProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  useEffect(() => setSearchValue(selectedOption?.value || ''), [selectedOption]);

  const searchedOptions = useMemo(
    () => options.filter((option) => option.value.toLowerCase().includes(searchValue.toLowerCase())),
    [searchValue, options]
  );

  return (
    <div className={classnames(s.SearchModal, { [s.SearchModal_open]: isOpen })}>
      <div className={s.SearchModal__header}>
        <span>{title}</span>
        <CloseSVG onClick={() => onClose(false)} />
      </div>
      <div className={s.SearchModal__search__block}>
        <SearchSVG className={s.SearchModal__search__icon} />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={s.SearchModal__input}
          type="text"
          placeholder="Search for airport"
        />
      </div>

      <div className={s.SearchModal__options}>
        {(searchValue ? searchedOptions : options).map((option) => (
          <div
            onClick={() => {
              onSelect(option);
              setSelectedOption(option);
            }}
            className={s.SearchModal__option}
            key={option.id}
          >
            {option.icon} {option.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchModal;
