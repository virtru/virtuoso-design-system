import React from 'react';
import PropTypes from 'prop-types';

const svgs = require.context('./assets', true, /\.svg$/);

const NAMES = {
  ATTACHMENT: 'ATTACHMENT',
  DRIVE: 'DRIVE',
  EMAIL: 'EMAIL',
  REVOKE: 'REVOKE',
  PFP_MD: 'PFP_MD',
  PFP_TXT: 'PFP_TXT',
  PFP_JPEG: 'PFP_JPEG',
  PFP_JPG: 'PFP_JPG',
  PFP_PNG: 'PFP_PNG',
  PFP_PPTX: 'PFP_PPTX',
  PFP_XLSX: 'PFP_XLSX',
  PFP_DOCX: 'PFP_DOCX',
  PFP_PDF: 'PFP_PDF',
  MD: 'MD',
  TXT: 'TXT',
  JPEG: 'JPEG',
  JPG: 'JPG',
  PNG: 'PNG',
  PPTX: 'PPTX',
  XLSX: 'XLSX',
  DOCX: 'DOCX',
  PDF: 'PDF',
  GENERIC: 'GENERIC',
  ERROR: 'ERROR',
};

const getIcon = (alias) =>
  Object.prototype.hasOwnProperty.call(NAMES, alias) && svgs(`./${alias}.svg`).default;

const Icon = ({ name }) => {
  const RenderedIcon = getIcon(name);
  return RenderedIcon && <RenderedIcon />;
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(NAMES)).isRequired,
};

export default Object.assign(Icon, { NAMES });
