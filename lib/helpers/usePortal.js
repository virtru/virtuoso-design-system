import { useMemo, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

export default function usePortal(children) {
  const container = useMemo(() => document.createElement('div'), []);

  useLayoutEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
}
