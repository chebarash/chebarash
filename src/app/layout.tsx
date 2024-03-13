import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: `Shóma • Programmer`,
  description: `Hi. I'm Shóma. A Programmer.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <svg viewBox="0 0 1920 1107">
          <g opacity="0.3" filter="url(#filter0_f_1501_589)">
            <rect
              x="-50"
              y="-28"
              width="2005"
              height="635"
              fill="url(#paint0_linear_1501_589)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1501_589"
              x="-550"
              y="-528"
              width="3005"
              height="1635"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_1501_589"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1501_589"
              x1="-102.556"
              y1="-28.0001"
              x2="1925.23"
              y2="762.408"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7A00" />
              <stop offset="0.605" stopColor="#0085FF" />
              <stop offset="1" stopColor="#05FF00" />
            </linearGradient>
          </defs>
        </svg>
      </body>
    </html>
  );
}
