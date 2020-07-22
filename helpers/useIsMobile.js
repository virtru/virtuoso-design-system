import { useMatchMedia } from './useMatchMedia';

export const useIsMobile = () => useMatchMedia('screen and (max-width: 767px)');
