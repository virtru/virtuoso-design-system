// import DOCX from './assets/docx.svg';
import RevokeIcon from './assets/revoke.svg';
import DriveIcon from './assets/drive.svg';
import PdfIcon from './assets/pdf.svg';
import AttachmentIcon from './assets/attachment.svg';
// import DocxIcon from '@/components/ContentModal/assets/docx.svg';

// const aliases = ['REVOKE', 'PDF', 'ATTACHMENT'];

export const ICON_MAP = {
  revoke: RevokeIcon,
  drive: DriveIcon,
  pdf: PdfIcon,
  attachment: AttachmentIcon,
};

const keys = Object.keys(ICON_MAP);
const aliases = keys.map((alias) => alias.toUpperCase());
export const ICONS = aliases.reduce((obj, key, index) => ({ ...obj, [key]: keys[index] }), {});

// export const getIcons = (alias) =>
//   Object.prototype.hasOwnProperty.call(ICONS, alias.toUpperCase()) &&
//   icons(`./${alias}.svg`).default;
