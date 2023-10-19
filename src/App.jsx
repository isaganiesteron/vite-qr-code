import { Grid, Box, Typography, CssBaseline } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import qrImage from "./assets/images/image-qr-code.png"

const theme = createTheme({
	palette: {
		background: { default: "hsl(212, 45%, 89%)" },
	},
	typography: {
		fontFamily: ["Outfit"].join(","),
	},
})
const firstRowStyle = { marginTop: "100px;" }
const columnTop = { backgroundColor: "hsl(0, 0%, 100%)", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }
const columnBotton = { backgroundColor: "hsl(0, 0%, 100%)", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }
const firstText = { padding: "0px 20px 0px 20px", marginTop: "15px", fontSize: "18px", fontWeight: "700" }
const secondText = { padding: "0px 15px 0px 15px", marginTop: "15px", fontSize: "15px", fontWeight: "400", color: "#BBBBBB" }

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container direction="column" xs={12}>
				<Grid item xs={12} sx={firstRowStyle} />
				<Grid item container>
					<Grid item xs={4} />
					<Grid item container direction="column" justifyContent="center" alignContent="center" xs={4}>
						<Box display="flex" justifyContent="center" alignItems="center" width="250px" minWidth="250px" height="250px" minHeight="250px" sx={columnTop}>
							<Box component="img" src={qrImage} borderRadius="20px" width="230px" minWidth="230px" height="230px" minHeight="230px"></Box>
						</Box>
						<Box alignContent="center" width="250px" minWidth="250px" height="180px" minHeight="180px" sx={columnBotton}>
							<Typography align="center" variant="h5" sx={firstText}>
								Improve your front-end skills by building projects
							</Typography>
							<Typography align="center" textAlign="center" paragraph sx={secondText}>
								Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={4} />
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
