import localFont from 'next/font/local';

export const switzer = localFont({
  src: [
    {
      path: './Switzer-Variable.woff2',
      style: 'normal',
    },
    {
      path: './Switzer-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  // This allows you to use 'font-switzer' in Tailwind
  variable: '--font-switzer', 
  // Standard weights for Switzer
  weight: '100 900',
  display: 'swap',
});