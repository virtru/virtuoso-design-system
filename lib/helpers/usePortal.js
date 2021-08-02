import { useMemo, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

/**
 * Portal hook
 *
 * @param {*} children react component children
 */
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
