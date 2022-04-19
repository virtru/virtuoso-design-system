import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as PfpMdIcon } from './assets/pfp_md.svg';
import { ReactComponent as PfpTxtIcon } from './assets/pfp_txt.svg';
import { ReactComponent as PfpJpegIcon } from './assets/pfp_jpeg.svg';
import { ReactComponent as PfpJpgIcon } from './assets/pfp_jpg.svg';
import { ReactComponent as PfpPngIcon } from './assets/pfp_png.svg';
import { ReactComponent as PfpPptxIcon } from './assets/pfp_pptx.svg';
import { ReactComponent as PfpXlsxIcon } from './assets/pfp_xlsx.svg';
import { ReactComponent as PfpDocxIcon } from './assets/pfp_docx.svg';
import { ReactComponent as PfpPdfIcon } from './assets/pfp_pdf.svg';
import { ReactComponent as MdIcon } from './assets/md.svg';
import { ReactComponent as TxtIcon } from './assets/txt.svg';
import { ReactComponent as JpegIcon } from './assets/jpeg.svg';
import { ReactComponent as JpgIcon } from './assets/jpg.svg';
import { ReactComponent as PngIcon } from './assets/png.svg';
import { ReactComponent as PptxIcon } from './assets/pptx.svg';
import { ReactComponent as XlsxIcon } from './assets/xlsx.svg';
import { ReactComponent as DocxIcon } from './assets/docx.svg';
import { ReactComponent as PdfIcon } from './assets/pdf.svg';
import { ReactComponent as GenericIcon } from './assets/generic.svg';
import { ReactComponent as ErrorIcon } from './assets/error.svg';

const keys = [
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
  '',
];

const NAMES = Object.fromEntries(keys.map((key) => [key, key]));

const CustomIconTypeFile = ({ name }) => {
  switch (name) {
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

CustomIconTypeFile.propTypes = {
  name: PropTypes.oneOf(Object.values(NAMES)).isRequired,
};

export default Object.assign(CustomIconTypeFile, { NAMES });
