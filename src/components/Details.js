import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import { Close, Star } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	details: {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		backgroundColor: "#242424",
		overflowY: "scroll",
		display: "flex",
		justifyContent: "center",
		padding: "1rem",
	},
	detailsContent: {
		maxWidth: "920px",
		color: "#fafbfc",
		padding: "1rem",
	},
	headingContent: {
		marginBottom: "3rem",
	},
	headerText: {
		flex: 1,
		fontSize: "32px",
		fontWeight: 700,
	},
	headerYear: {
		fontSize: "24px",
		fontWeight: 400,
	},
	headerContent: {
		display: "flex",
		alignItems: "center",
		marginBottom: "0.2rem",
	},
	closeButton: {
		color: "#fafbfc",
		fontSize: "32px",
	},
	closeIcon: {
		fontSize: "26px",
	},
	rating: {
		display: "flex",
		alignItems: "center",
	},
	ratingIcon: {
		color: "#f5c518",
		marginRight: "0.5rem",
	},
	info: {
		display: "flex",
	},
	posterImage: {
		borderRadius: "6px",
	},
	plotText: {
		margin: "0 2rem",
	},
}));

function Details({ selected, closePopup }) {
	const classes = useStyles();

	return (
		<Box className={classes.details}>
			<Box className={classes.detailsContent}>
				<Box className={classes.headingContent}>
					<Box className={classes.headerContent}>
						<Typography className={classes.headerText}>
							{selected.Title}
							<span className={classes.headerYear}> ({selected.Year})</span>
						</Typography>
						<Button className={classes.closeButton} onClick={closePopup}>
							<Close className={classes.closeIcon} />
						</Button>
					</Box>
					<Box>
						<Typography className={classes.rating}>
							<Star className={classes.ratingIcon} />
							<span>{selected.imdbRating}</span>
						</Typography>
					</Box>
				</Box>
				<Box className={classes.info}>
					<img
						className={classes.posterImage}
						src={selected.Poster}
						alt="Poster"
					/>
					<Typography className={classes.plotText}>{selected.Plot}</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Details;
