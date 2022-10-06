export const byteCount = (string) => encodeURI(string).split(/%..|./).length - 1;

export const truncateByBytes = (string, byteSize) => {
  if (byteCount(string) > byteSize) {
    const charsArray = string.split('');
    const truncatedStringArray = [];
    let bytesCounter = 0;
    for (let i = 0; i < charsArray.length; i += 1) {
      bytesCounter += byteCount(charsArray[i]);
      if (bytesCounter <= byteSize) {
        truncatedStringArray.push(charsArray[i]);
      } else {
        break;
      }
    }

    return truncatedStringArray.join('');
  }

  return string;
};
