import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, PaginationItem, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom'

const theme = createTheme({
	components: {
		MuiPagination: {
			styleOverrides: {
				root: {
					"& .MuiPaginationItem-root": {
						color: "rgba(255, 255, 255, 0.5)", // Default text color
					},
					"& .MuiPaginationItem-page.Mui-selected": {
						backgroundColor: "#1976d2", // Background for selected page
						color: "#fff", // Text color for selected page
						borderColor: "#1976d2",
					},
					"& .MuiPaginationItem-page.Mui-selected:hover": {
						backgroundColor: "#115293", // Darker shade on hover
					},
					"& .MuiPaginationItem-root:hover": {
						backgroundColor: "rgba(25, 118, 210, 0.1)", // Light hover effect
					},
					"& .MuiPaginationItem-ellipsis": {
						color: "rgba(255, 255, 255, 0.5)", // Color for ellipsis (...)
					},
					"& .css-1c5o7vy-MuiPagination-ul": {
						flexWrap: "nowrap"
					}
				}
			}
		}
	}
})


export default function PaginationComponent({ countPage, page, handleChangePage }) {
	return (
		<ThemeProvider theme={theme}>
			<Stack spacing={2} alignItems={"center"}>
				<Pagination
					count={countPage}
					page={page}
					variant="outlined"
					color="primary"
					onChange={handleChangePage}
					renderItem={(item) => (
						<PaginationItem
							component={Link}
							to={`/${item.page === 1 ? `?page=1` : `?page=${item.page}`}`}
							{...item}
						/>
					)}
				/>
			</Stack>
		</ThemeProvider>
	);
}
