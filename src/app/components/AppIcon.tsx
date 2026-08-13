/**
 * MOVOQ app icon.
 * A rounded-square gradient tile (brand blue → cyan → teal) with a bold white "M"
 * whose strokes ascend left-to-right — the brand initial reading as forward motion / rising steps.
 * Fully scalable; pass `size` for a rendered instance, or use the raw SVG for export.
 */
export function AppIcon({ size = 128 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MOVOQ app icon"
    >
      <defs>
        <linearGradient id="movoqTile" x1="0" y1="0" x2="1024" y2="1024" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3A86FF" />
          <stop offset="0.55" stopColor="#00C9A7" />
          <stop offset="1" stopColor="#0EA5A0" />
        </linearGradient>
      </defs>

      {/* Tile */}
      <rect width="1024" height="1024" rx="230" fill="url(#movoqTile)" />

      {/* Soft depth: a translucent sweep in the lower-right */}
      <circle cx="900" cy="960" r="360" fill="#ffffff" opacity="0.06" />

      {/* Ascending "M" — brand initial + forward motion */}
      <path
        d="M300 720 L300 430 L512 600 L724 340 L724 720"
        stroke="#ffffff"
        strokeWidth="104"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Reward token at the leading (highest) peak — the 'earn' in walk-earn-win */}
      <circle cx="724" cy="300" r="52" fill="#FFC93C" />
    </svg>
  );
}
