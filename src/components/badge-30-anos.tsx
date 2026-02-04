import type { SVGProps } from 'react';

export function Badge30Anos(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="relative w-24 h-24" >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
        </defs>
        <circle cx="50" cy="50" r="48" fill="#FDB813"/>
        <circle cx="50" cy="50" r="42" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
        <text fontFamily="Montserrat, sans-serif" fill="#000000" fontSize="28" fontWeight="bold" textAnchor="middle" x="50" y="58">
          30
        </text>
        <text fontFamily="Montserrat, sans-serif" fill="#FFFFFF" fontSize="9" fontWeight="bold">
          <textPath xlinkHref="#circle" startOffset="50%" textAnchor="middle">
            AÑOS DE TRAYECTORIA
          </textPath>
        </text>
      </svg>
    </div>
  );
}
