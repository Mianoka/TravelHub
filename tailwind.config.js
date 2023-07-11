/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 5s linear infinite',
      },
      keyframes :  {
        blob : {
        '0%, 100%' : { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'},
        '50%' :{ borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'}
        }
      }
    }
  },
  plugins: [],
}