import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#be6571'
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			light: '#0066ff',
			main: '#f96471',
			dark: '#4f4e62',
			contrastText: '#ffcc00'
		}
		// error: will use the default color
	}
})
