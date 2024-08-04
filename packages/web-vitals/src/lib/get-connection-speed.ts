export function getConnectionSpeed() {
  return (
    'connection' in navigator &&
    navigator.connection &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    'effectiveType' in navigator.connection
      ? navigator.connection.effectiveType
      : ''
  ) as string;
}
