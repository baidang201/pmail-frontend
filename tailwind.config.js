/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      background: 'var(--main-bg-color)',
      SideBarBackground: 'var(--side-bg-color)',
      SideBarText: 'var(--main-text-color)',
      mainText: 'var(--main-text-color)',
      blackText: 'var(--black-text-color)',
      whiteText: 'var(--white-text-color)',
      grayText: '#B3B3B3',
      SideBarActiveBackground: 'var(--active-side-bg-color)',
      sideBarHoverBackground: 'var(--hover-side-bg-color)',
      white: 'var(--white)',
      borderGray: 'var(--gray)',
      textBlue: '#2423B5',
      primary: '#D62EFF'
    },
    container: {
      center: true
    },
    extend: {
      spacing: {
        256: '256px',
        117: '117px',
        236: '236px',
        50: '50px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar'), require('flowbite/plugin')]
}
