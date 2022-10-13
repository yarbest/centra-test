import { useEffect } from 'react';

interface useKeyBoardArrowsType {
  onUp: () => void;
  onDown: () => void;
  disabled: boolean;
}

export const useKeyBoardArrows = ({ onUp, onDown, disabled }: useKeyBoardArrowsType) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      e.key === 'ArrowUp' && onUp();
      e.key === 'ArrowDown' && onDown();
    };
    !disabled && window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  });
};
