import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
  },
  spacing: factor => `${0.5 * factor}rem`,
})

export default responsiveFontSizes(theme)
