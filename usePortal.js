import { useMemo, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

const usePortal = children => {
  const container = useMemo(() => document.createElement('div'), []);

  useLayoutEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};

export default usePortal;
