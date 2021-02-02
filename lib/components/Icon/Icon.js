import React from 'react';
import PropTypes from 'prop-types';

const svgs = require.context('./assets', true, /\.svg$/);

const TYPES = {
  ATTACHMENT: 'attachment',
  DRIVE: 'drive',
  EMAIL: 'email',
  REVOKE: 'revoke',
  PFP_MD: 'pfp_md',
  PFP_TXT: 'pfp_txt',
  PFP_JPEG: 'pfp_jpeg',
  PFP_JPG: 'pfp_jpg',
  PFP_PNG: 'pfp_png',
  PFP_PPTX: 'pfp_pptx',
  PFP_XLSX: 'pfp_xlsx',
  PFP_DOCX: 'pfp_docx',
  PFP_PDF: 'pfp_pdf',
  MD: 'md',
  TXT: 'txt',
  JPEG: 'jpeg',
  JPG: 'jpg',
  PNG: 'png',
  PPTX: 'pptx',
  XLSX: 'xlsx',
  DOCX: 'docx',
  PDF: 'pdf',
  GENERIC: 'generic',
  ERROR: 'error',
};

const getIcon = (alias) =>
  typeof alias === 'string' &&
  Object.prototype.hasOwnProperty.call(TYPES, alias.toUpperCase()) &&
  svgs(`./${alias}.svg`).default;

const Icon = ({ type }) => {
  const RenderedIcon = getIcon(type);
  return RenderedIcon && <RenderedIcon />;
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
};

export default Object.assign(Icon, { TYPES });
