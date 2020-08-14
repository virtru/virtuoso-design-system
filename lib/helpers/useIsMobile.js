import useMatchMedia from './useMatchMedia';

/**
 * Is mobile hook
 */
export default function useIsMobile() {
  useMatchMedia('screen and (max-width: 767px)');
}
