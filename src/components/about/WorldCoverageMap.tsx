export function WorldCoverageMap() {
  // equirectangular 800×400 — x = (lon+180)*2.222, y = (90-lat)*2.222
  // Tokyo (35.7N,139.7E) → 710,121   Stuttgart (48.8N,9.2E) → 420,92   CDMX (19.4N,99.1W) → 180,157
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 800, display: "block", margin: "0 auto" }}
      aria-hidden="true"
    >
      <defs>
        {/* clip to land masses */}
        <clipPath id="wcm-land">
          {/* North America */}
          <path d="M 44,52 L 90,38 L 178,38 L 251,49 L 282,95 L 244,107 L 222,144 L 207,153 L 180,158 L 157,152 L 125,115 L 110,78 L 67,62 Z" />
          {/* Central America (connects NA to SA) */}
          <path d="M 180,158 L 207,153 L 220,165 L 215,178 L 200,182 L 185,175 Z" />
          {/* South America */}
          <path d="M 200,182 L 215,178 L 271,187 L 322,218 L 304,252 L 271,275 L 247,320 L 240,270 L 220,212 L 200,182 Z" />
          {/* Greenland */}
          <path d="M 271,22 L 360,29 L 318,56 L 301,63 L 271,47 Z" />
          {/* Iceland */}
          <path d="M 350,56 L 370,54 L 371,63 L 350,64 Z" />
          {/* UK & Ireland */}
          <path d="M 376,75 L 394,68 L 396,80 L 383,86 Z" />
          <path d="M 369,78 L 379,75 L 379,84 L 370,83 Z" />
          {/* Scandinavia */}
          <path d="M 415,70 L 447,55 L 463,44 L 463,58 L 450,68 L 428,76 Z" />
          {/* Europe mainland */}
          <path d="M 376,96 L 416,90 L 447,78 L 464,98 L 452,120 L 432,118 L 411,123 L 388,118 L 375,108 Z" />
          {/* Iberia */}
          <path d="M 375,108 L 388,118 L 411,123 L 412,122 L 413,137 L 397,144 L 376,139 L 370,124 Z" />
          {/* Italy */}
          <path d="M 432,100 L 445,103 L 452,120 L 448,140 L 438,155 L 430,138 L 428,118 Z" />
          {/* Africa */}
          <path d="M 375,140 L 397,144 L 416,142 L 452,140 L 475,152 L 516,180 L 493,215 L 445,285 L 426,255 L 402,195 L 376,170 Z" />
          {/* Arabia */}
          <path d="M 477,148 L 515,148 L 518,165 L 503,182 L 484,175 L 474,162 Z" />
          {/* Asia mainland */}
          <path d="M 458,118 L 487,102 L 536,105 L 564,88 L 625,70 L 762,50 L 762,82 L 697,108 L 657,155 L 638,182 L 574,186 L 558,156 L 540,150 L 502,175 L 486,152 L 492,122 Z" />
          {/* India */}
          <path d="M 540,150 L 575,142 L 582,158 L 572,186 L 553,190 L 540,175 L 535,160 Z" />
          {/* SE Asia */}
          <path d="M 638,155 L 660,150 L 667,160 L 663,175 L 650,182 L 638,182 Z" />
          {/* Korea */}
          <path d="M 672,110 L 685,108 L 688,120 L 679,124 L 670,120 Z" />
          {/* Japan */}
          <path d="M 698,105 L 715,100 L 723,110 L 718,122 L 707,126 L 699,120 Z" />
          {/* Australia */}
          <path d="M 654,252 L 690,230 L 726,242 L 736,288 L 712,290 L 658,280 Z" />
          {/* New Zealand */}
          <path d="M 748,298 L 758,292 L 760,312 L 750,315 Z" />
        </clipPath>

        {/* dot grid pattern */}
        <pattern id="wcm-dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.5" fill="var(--neutral-on-background-medium)" />
        </pattern>
      </defs>

      {/* graticule – very subtle */}
      <g stroke="var(--neutral-alpha-weak)" strokeWidth="0.5" opacity="0.5">
        <line x1="0" y1="67" x2="800" y2="67" />
        <line x1="0" y1="133" x2="800" y2="133" />
        <line x1="0" y1="200" x2="800" y2="200" />
        <line x1="0" y1="267" x2="800" y2="267" />
        <line x1="133" y1="0" x2="133" y2="400" />
        <line x1="267" y1="0" x2="267" y2="400" />
        <line x1="400" y1="0" x2="400" y2="400" />
        <line x1="533" y1="0" x2="533" y2="400" />
        <line x1="667" y1="0" x2="667" y2="400" />
      </g>

      {/* dot-grid land fill */}
      <rect width="800" height="400" fill="url(#wcm-dots)" clipPath="url(#wcm-land)" opacity="0.4" />

      {/* region highlights (clipped so they only paint over land) */}
      {/* East Asia */}
      <rect x="560" y="60" width="200" height="135" fill="var(--brand-background-strong)" opacity="0.18" clipPath="url(#wcm-land)" />
      {/* Latin America */}
      <rect x="100" y="140" width="235" height="195" fill="var(--brand-background-strong)" opacity="0.14" clipPath="url(#wcm-land)" />
      {/* Europe */}
      <rect x="360" y="36" width="115" height="112" fill="var(--brand-background-strong)" opacity="0.14" clipPath="url(#wcm-land)" />

      {/* connection arcs */}
      <path d="M 710,121 Q 445,18 180,157" stroke="var(--brand-background-strong)" strokeWidth="1.4" strokeDasharray="5 5" opacity="0.6" />
      <path d="M 710,121 Q 555,22 420,92" stroke="var(--brand-background-strong)" strokeWidth="1.4" strokeDasharray="5 5" opacity="0.6" />
      <path d="M 420,92 Q 284,55 180,157" stroke="var(--brand-background-strong)" strokeWidth="1.4" strokeDasharray="5 5" opacity="0.6" />

      {/* Tokyo */}
      <circle cx="710" cy="121" r="5" fill="var(--brand-background-strong)" opacity="0.18" className="wcmPing1" />
      <circle cx="710" cy="121" r="4" fill="var(--brand-background-strong)" opacity="0.35" />
      <circle cx="710" cy="121" r="2.5" fill="var(--brand-background-strong)" />
      <text x="720" y="118" fontSize="9" fontWeight="600" fill="var(--brand-on-background-medium)" fontFamily="inherit">Tokyo</text>
      <text x="720" y="129" fontSize="8" fill="var(--neutral-on-background-weak)" fontFamily="inherit">East Asia</text>

      {/* Mexico City */}
      <circle cx="180" cy="157" r="5" fill="var(--brand-background-strong)" opacity="0.18" className="wcmPing2" />
      <circle cx="180" cy="157" r="4" fill="var(--brand-background-strong)" opacity="0.35" />
      <circle cx="180" cy="157" r="2.5" fill="var(--brand-background-strong)" />
      <text x="135" y="154" fontSize="9" fontWeight="600" fill="var(--brand-on-background-medium)" fontFamily="inherit" textAnchor="end">México</text>
      <text x="135" y="165" fontSize="8" fill="var(--neutral-on-background-weak)" fontFamily="inherit" textAnchor="end">Latin America</text>

      {/* Stuttgart */}
      <circle cx="420" cy="92" r="5" fill="var(--brand-background-strong)" opacity="0.18" className="wcmPing3" />
      <circle cx="420" cy="92" r="4" fill="var(--brand-background-strong)" opacity="0.35" />
      <circle cx="420" cy="92" r="2.5" fill="var(--brand-background-strong)" />
      <text x="430" y="89" fontSize="9" fontWeight="600" fill="var(--brand-on-background-medium)" fontFamily="inherit">Stuttgart</text>
      <text x="430" y="100" fontSize="8" fill="var(--neutral-on-background-weak)" fontFamily="inherit">Europe</text>
    </svg>
  );
}
