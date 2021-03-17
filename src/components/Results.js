import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ResultsItem from "./ResultsItem";

const useStyles = makeStyles(theme => ({
	results: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
}));

function Results({ results, openPopup }) {
	const classes = useStyles();

	return (
		<Grid container className={classes.results} spacing={0}>
			{results.map(result => (
				<ResultsItem
					key={result.imdbID}
					result={result}
					openPopup={openPopup}
				/>
			))}
		</Grid>
	);
}

export default Results;
