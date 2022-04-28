// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: true,
        colors: {
          primary: '#0f1116',
          secondary: '#DCEDFF',
          accent: '#A2FAA3',
          error: '#f05d5e',
          info: '#627264',
          success: '#627264',
          warning: '#f05d5e',

          // backgroundmain: '#0f1116',
          // highlight: '#A2FAA3',
          // normal: '#DCEDFF',
          // outline: '#627264',
          // alert: '#f05d5e'
        }
      },
    },
  },
})
