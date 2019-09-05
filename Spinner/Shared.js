/* eslint-disable no-magic-numbers */

// Settings
const speed = 1;
const colors = [
  '#4484ff', // Blue
  '#4484ff', // Blue
  '#aecaff', // Light blue
  '#aecaff', // Light blue
  '#6e60c1', // Purple
  '#c1b6f9', // Light purple
];
const r = 40; // Particle radius
const n = 15; // Number of particles

/**
 * Parametric circle maps 0->1 to radians
 * So: 0 ≤ t ≤ 1
 * @param t
 * @returns {number[]}
 */
export function parametric(t) {
  return [r * Math.cos(t * Math.PI * 2), r * Math.sin(t * Math.PI * 2)];
}

/**
 * Generates particle DOM nodes and appends them to `target`
 * @param {Element} target    Appends particles to this DOM node
 * @return {Array<Object>}    Particle DOM nodes and their offsets
 */
export function generate(target) {
  const els = [...Array(n).keys()].map(i => {
    const tempEl = document.createElement('div');
    tempEl.style.cssText = `
      position: absolute;
      top: 40px;
      left: 39px;
      width: 12px;
      height: 9px;
      will-change: transform;
      background: ${colors[Math.floor(Math.random() * 6)]}
    `;
    tempEl.classList.add(`sq-${i}`);
    target.appendChild(tempEl);
    return {
      el: tempEl,
      offset: Math.random() / speed,
    };
  });
  return els;
}

export const labelStyles = {
  position: 'absolute',
  width: '100%',
  top: '100%',
  marginTop: '13px',
  color: '#36404f',
  fontSize: 12,
  fontFamily: 'Open Sans',
  willChange: 'opacity',
  whiteSpace: 'nowrap',
  display: 'flex',
  justifyContent: 'center',
};
