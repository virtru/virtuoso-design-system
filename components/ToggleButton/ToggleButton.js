import React from 'react';
import ReactToggle from 'react-toggle';

import './ToggleButton.css';

/**
 * Renders a ReactToggle button with Virtru styling.
 * @param props
 * @prop checked {Boolean} If true, the toggle is checked. If false, the toggle is unchecked. Use this if you want to treat the toggle as a controlled component
 * @prop onChange {Function} Callback function to invoke when the user clicks on the toggle. The function signature should be the following: function(e) { }. To get the current checked status from the event, use e.target.checked.
 * @prop name {String} The value of the name attribute of the wrapped <input> element
 * @prop value {String} The value of the value attribute of the wrapped <input> element
 * @prop id {String} The value of the id attribute of the wrapped <input> element
 * @prop icons {Object} If false, no icons are displayed. You may also pass custom icon components in icons={{{checked: <CheckedIcon />, unchecked: <UncheckedIcon />}}
 * @prop disabled {Boolean} If true, the toggle is disabled. If false, the toggle is enabled
 * @see {@link https://www.npmjs.com/package/react-toggle} for more properties accepted and further documentation of this component.
 * @returns {*}
 */
const ToggleButton = ({ ...toggleProps }) => <ReactToggle {...toggleProps} />;

ToggleButton.propTypes = ReactToggle.propTypes;
ToggleButton.defaultProps = ReactToggle.defaultProps;

export default ToggleButton;
