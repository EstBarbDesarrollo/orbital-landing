import type { SVGProps } from 'react';

export function OrbitalLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <text
        x="60"
        y="32"
        fontFamily="var(--font-headline), sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="currentColor"
        className="text-foreground"
      >
        Orbital
      </text>
      <circle cx="25" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="4" className="text-primary" />
      <ellipse
        cx="25"
        cy="25"
        rx="20"
        ry="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        transform="rotate(-30 25 25)"
        className="text-accent"
      />
    </svg>
  );
}
