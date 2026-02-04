import type { SVGProps } from 'react';

export function EstudioBarbosaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="250" height="34" viewBox="0 0 250 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text 
            fontFamily="Montserrat, sans-serif"
            fontSize="28" 
            fontWeight="bold" 
            fill="currentColor"
        >
            <tspan x="0" y="28">estudio</tspan>
            <tspan x="115" y="28" fill="hsl(var(--primary))">barbosa</tspan>
        </text>
    </svg>
  );
}
