import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
	searchBar: {
		padding: "1rem",
		margin: "1rem 0",
	},
	searchInput: {
		display: "flex",
		width: "100%",
		background: "#fafbfc",
		padding: "6px 16px",
		borderRadius: "6px",
		fontSize: "20px",
		border: "none",
		outline: "none",
	},
}));

function SearchBar({ handleInput, search }) {
	const classes = useStyles();

	return (
		<Box className={classes.searchBar}>
			<Input
				className={classes.searchInput}
				variant="outlined"
				type="text"
				placeholder="Search for a movie.."
				disableUnderline
				onChange={handleInput}
				onKeyPress={search}
				startAdornment={
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				}
			/>
		</Box>
	);
}

export default SearchBar;
