import type { SVGProps } from 'react';

export function OrbitalLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 152 36"
      width="127"
      height="30"
      {...props}
    >
      <defs>
        <linearGradient
          id="orbital-gradient"
          x1="32.3"
          y1="6.6"
          x2="9.7"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="hsl(var(--accent))" />
          <stop offset="1" stopColor="hsl(var(--primary))" />
        </linearGradient>
      </defs>
      <path
        d="M21.366 32.8237C12.8942 32.8237 6 25.9295 6 17.4577C6 9.00344 12.8766 2.0918 21.366 2.0918C25.6021 2.0918 29.4795 3.74353 32.3278 6.5918L29.986 8.93362C27.7013 6.6489 24.6937 5.23091 21.366 5.23091C14.8973 5.23091 9.74233 10.6381 9.74233 17.4577C9.74233 24.2773 14.8973 29.6845 21.366 29.6845C24.6937 29.6845 27.7013 28.2665 29.986 25.9818L32.3278 28.3237C29.4795 31.172 25.6021 32.8237 21.366 32.8237Z"
        fill="url(#orbital-gradient)"
      />
      <text
        x="48"
        y="28"
        fontFamily="Montserrat, sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        orbital
      </text>
    </svg>
  );
}
