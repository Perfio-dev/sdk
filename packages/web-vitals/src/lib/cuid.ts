export function cuid(): string {
  const existingId = localStorage.getItem('__perfio_cuid');

  if (existingId) {
    return existingId;
  }

  const id = _cuid();

  localStorage.setItem('__perfio_cuid', id);

  return id;
}

const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

export function _cuid(size = 24) {
  let id = '';
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    id += urlAlphabet[bytes[size] & 63];
  }
  return id;
}
