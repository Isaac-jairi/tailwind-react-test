type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};
export function HamburgerIcon({
  width = 40,
  height = 40,
  fill = '#333333',
}: Props) {
  return (
    <div style={{ width, height }}>
      <svg style={{ width: 'inherit', height: 'inherit' }} viewBox="0 0 100 80">
        <rect width="100" height="20" fill={fill}></rect>
        <rect y="30" width="100" height="20" fill={fill}></rect>
        <rect y="60" width="100" height="20" fill={fill}></rect>
      </svg>
    </div>
  );
}
