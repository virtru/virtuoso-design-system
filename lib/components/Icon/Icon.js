import React from 'react';
import PropTypes from 'prop-types';

const svgs = require.context('./assets', true, /\.svg$/);

const TYPES = {
  ATTACHMENT: 'attachment',
  DRIVE: 'drive',
  EMAIL: 'email',
  REVOKE: 'revoke',
  PROTECTED_MD: 'protected_md',
  PROTECTED_TXT: 'protected_txt',
  PROTECTED_JPEG: 'protected_jpeg',
  PROTECTED_JPG: 'protected_jpg',
  PROTECTED_PNG: 'protected_png',
  PROTECTED_PPTX: 'protected_pptx',
  PROTECTED_XLSX: 'protected_xlsx',
  PROTECTED_DOCX: 'protected_docx',
  PROTECTED_PDF: 'protected_pdf',
  PROTECTED_EXT: 'protected_ext',
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
