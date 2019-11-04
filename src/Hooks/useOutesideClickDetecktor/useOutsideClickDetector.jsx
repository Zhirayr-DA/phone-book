import { useEffect } from 'react';

function useOutsideClickDetector(ref, cb) {
  function handleOutsideClick(e) {
    if (
      !ref.current
      || typeof ref.current.$$typeof === 'symbol'
      || ref.current.contains(e.target)
    ) return;
    cb();
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });
}

export default useOutsideClickDetector;
