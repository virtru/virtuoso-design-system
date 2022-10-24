export const byteCount = (string) => new Blob([string]).size;

export const truncateByBytes = (string, byteSize) => {
  const enc = new TextEncoder();
  const dec = new TextDecoder('utf-8');
  const uint8 = enc.encode(string);
  const section = uint8.slice(0, byteSize);

  return dec.decode(section);
};
