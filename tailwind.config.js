/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'waffle-mobile': "url('/src/assets/image-waffle-mobile.jpg')",
        'cream-brulee-mobile': "url('/src/assets/image-creme-brulee-mobile.jpg')",
        'macaron-mobile': "url('/src/assets/image-macaron-mobile.jpg')",
        'tiramisu-mobile': "url('/src/assets/image-tiramisu-mobile.jpg')",
        'baklava-mobile': "url('/src/assets/image-baklava-mobile.jpg')",
        'meringue-mobile': "url('/src/assets/image-meringue-mobile.jpg')",
        'cake-mobile': "url('/src/assets/image-cake-mobile.jpg')",
        'brownie-mobile': "url('/src/assets/image-brownie-mobile.jpg')",
        'panna-cotta-mobile': "url('/src/assets/image-panna-cotta-mobile.jpg')",


        'waffle-desktop': "url('/src/assets/image-waffle-desktop.jpg')",
        'cream-brulee-desktop': "url('/src/assets/image-creme-brulee-desktop.jpg')",
        'macaron-desktop': "url('/src/assets/image-macaron-desktop.jpg')",
        'tiramisu-desktop': "url('/src/assets/image-tiramisu-desktop.jpg')",
        'baklava-desktop': "url('/src/assets/image-baklava-desktop.jpg')",
        'meringue-desktop': "url('/src/assets/image-meringue-desktop.jpg')",
        'cake-desktop': "url('/src/assets/image-cake-desktop.jpg')",
        'brownie-desktop': "url('/src/assets/image-brownie-desktop.jpg')",
        'panna-cotta-desktop': "url('/src/assets/image-panna-cotta-desktop.jpg')",


        'waffle-thumb' : "url('/src/assets/image-waffle-thumbnail.jpg')",
        'cream-brulee-thumb': "url('/src/assets/image-creme-brulee-thumbnail.jpg')",
        'macaron-thumb': "url('/src/assets/image-macaron-thumbnail.jpg')",
        'tiramisu-thumb': "url('/src/assets/image-tiramisu-thumbnail.jpg')",
        'baklava-thumb': "url('/src/assets/image-baklava-thumbnail.jpg')",
        'meringue-thumb': "url('/src/assets/image-meringue-thumbnail.jpg')",
        'cake-thumb': "url('/src/assets/image-cake-thumbnail.jpg')",
        'brownie-thumb': "url('/src/assets/image-brownie-thumbnail.jpg')",
        'panna-cotta-thumb': "url('/src/assets/image-panna-cotta-thumbnail.jpg')"

      },
      fontFamily: {
        redhat: ["Red Hat", "sans-serif"],
      },
    }
  },
  plugins: [],
}