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

const CustomIconTypeFile = ({ name }) => {
  const iconTypeObject = {
    PFP_MD: <PfpMdIcon />,
    PFP_TXT: <PfpTxtIcon />,
    PFP_JPEG: <PfpJpegIcon />,
    PFP_JPG: <PfpJpgIcon />,
    PFP_PNG: <PfpPngIcon />,
    PFP_PPTX: <PfpPptxIcon />,
    PFP_XLSX: <PfpXlsxIcon />,
    PFP_DOCX: <PfpDocxIcon />,
    PFP_PDF: <PfpPdfIcon />,
    MD: <MdIcon />,
    TXT: <TxtIcon />,
    JPEG: <JpegIcon />,
    JPG: <JpgIcon />,
    PNG: <PngIcon />,
    PPTX: <PptxIcon />,
    XLSX: <XlsxIcon />,
    DOCX: <DocxIcon />,
    PDF: <PdfIcon />,
    GENERIC: <GenericIcon />,
    ERROR: <ErrorIcon />,
  };

  return iconTypeObject[name] || <GenericIcon />;
};

CustomIconTypeFile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CustomIconTypeFile;
