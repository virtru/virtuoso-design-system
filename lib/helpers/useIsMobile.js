import useMatchMedia from './useMatchMedia';

export default function useIsMobile() {
  useMatchMedia('screen and (max-width: 767px)');
}
