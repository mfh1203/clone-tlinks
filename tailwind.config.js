module.exports = {
  purge: {
    enabled: true,
    content: [
       './dist/*.html' 
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'bookmark-blue':'#376eb3',
        'bookmark-sky':'#e6eef3',
      },
      height:{
        'xl':'20rem',
      },
    },
    container:{
      center:true,
      padding:'2rem',

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
