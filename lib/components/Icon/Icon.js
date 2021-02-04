import React from 'react';
import PropTypes from 'prop-types';

import AttachmentIcon from './assets/attachment.svg';
import DriveIcon from './assets/drive.svg';
import EmailIcon from './assets/email.svg';
import RevokeIcon from './assets/revoke.svg';
import PfpMdIcon from './assets/pfp_md.svg';
import PfpTxtIcon from './assets/pfp_txt.svg';
import PfpJpegIcon from './assets/pfp_jpeg.svg';
import PfpJpgIcon from './assets/pfp_jpg.svg';
import PfpPngIcon from './assets/pfp_png.svg';
import PfpPptxIcon from './assets/pfp_pptx.svg';
import PfpXlsxIcon from './assets/pfp_xlsx.svg';
import PfpDocxIcon from './assets/pfp_docx.svg';
import PfpPdfIcon from './assets/pfp_pdf.svg';
import MdIcon from './assets/md.svg';
import TxtIcon from './assets/txt.svg';
import JpegIcon from './assets/jpeg.svg';
import JpgIcon from './assets/jpg.svg';
import PngIcon from './assets/png.svg';
import PptxIcon from './assets/pptx.svg';
import XlsxIcon from './assets/xlsx.svg';
import DocxIcon from './assets/docx.svg';
import PdfIcon from './assets/pdf.svg';
import GenericIcon from './assets/generic.svg';
import ErrorIcon from './assets/error.svg';

const keys = [
  'ATTACHMENT',
  'DRIVE',
  'EMAIL',
  'REVOKE',
  'PFP_MD',
  'PFP_TXT',
  'PFP_JPEG',
  'PFP_JPG',
  'PFP_PNG',
  'PFP_PPTX',
  'PFP_XLSX',
  'PFP_DOCX',
  'PFP_PDF',
  'MD',
  'TXT',
  'JPEG',
  'JPG',
  'PNG',
  'PPTX',
  'XLSX',
  'DOCX',
  'PDF',
  'GENERIC',
  'ERROR',
];

const NAMES = Object.fromEntries(keys.map((key) => [key, key]));

const Icon = ({ name }) => {
  switch (name) {
    case 'ATTACHMENT':
      return <AttachmentIcon />;
    case 'DRIVE':
      return <DriveIcon />;
    case 'EMAIL':
      return <EmailIcon />;
    case 'REVOKE':
      return <RevokeIcon />;
    case 'PFP_MD':
      return <PfpMdIcon />;
    case 'PFP_TXT':
      return <PfpTxtIcon />;
    case 'PFP_JPEG':
      return <PfpJpegIcon />;
    case 'PFP_JPG':
      return <PfpJpgIcon />;
    case 'PFP_PNG':
      return <PfpPngIcon />;
    case 'PFP_PPTX':
      return <PfpPptxIcon />;
    case 'PFP_XLSX':
      return <PfpXlsxIcon />;
    case 'PFP_DOCX':
      return <PfpDocxIcon />;
    case 'PFP_PDF':
      return <PfpPdfIcon />;
    case 'MD':
      return <MdIcon />;
    case 'TXT':
      return <TxtIcon />;
    case 'JPEG':
      return <JpegIcon />;
    case 'JPG':
      return <JpgIcon />;
    case 'PNG':
      return <PngIcon />;
    case 'PPTX':
      return <PptxIcon />;
    case 'XLSX':
      return <XlsxIcon />;
    case 'DOCX':
      return <DocxIcon />;
    case 'PDF':
      return <PdfIcon />;
    case 'GENERIC':
      return <GenericIcon />;
    case 'ERROR':
      return <ErrorIcon />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(NAMES)).isRequired,
};

export default Object.assign(Icon, { NAMES });
