import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	resultItem: {
		maxWidth: "180px",
		margin: "0.5rem",
		cursor: "pointer",
	},
	resultImage: {
		maxWidth: "180px",
		borderRadius: "6px",
		transition: "all 0.1s ease-in-out",
		"&:hover": {
			transform: "scale(1.1)",
		},
	},
	resultTitle: {
		color: "#fafbfc",
		padding: "10px",
		fontWeight: "700",
		fontSize: "14px",
	},
}));

function ResultsItem({ result, openPopup }) {
	const classes = useStyles();

	return (
		<Grid
			item
			xs
			className={classes.resultItem}
			onClick={() => openPopup(result.imdbID)}
		>
			<img className={classes.resultImage} src={result.Poster} alt="Poster" />
			<Typography className={classes.resultTitle}>{result.Title}</Typography>
		</Grid>
	);
}

export default ResultsItem;
