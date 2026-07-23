export function BrandMark({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="20" height="26" viewBox="0 0 20 26" fill="none" aria-hidden="true">
      <path
        d="M10 20 C10 12 5 6 2 3 C7 4 11 8 12 14 C13 8 16 5 19 4 C17 10 14 15 10 20Z"
        fill={color}
      />
      <path
        d="M10 20 C10 14 10 8 10 3"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
