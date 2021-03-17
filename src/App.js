import React, { useState } from "react";
import axios from "axios";

import {
	makeStyles,
	MuiThemeProvider,
	createMuiTheme,
} from "@material-ui/core/styles";
import { CssBaseline, Container } from "@material-ui/core";

import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Details from "./components/Details";

const bodyStyle = createMuiTheme({
	palette: {
		background: {
			default: "#222",
		},
	},
	typography: {
		fontFamily: "PT Sans",
	},
});

const useStyles = makeStyles(theme => ({
	main: {
		width: "100%",
		maxWidth: "960px",
		margin: "0 auto",
	},
}));

function App() {
	const classes = useStyles();
	const apiUrl = "http://www.omdbapi.com/?apikey=bf410ecf";

	const [state, setState] = useState({
		searchQuery: "",
		results: [],
		selected: {},
	});

	const search = e => {
		if (e.key === "Enter") {
			axios(apiUrl + "&s=" + state.searchQuery).then(({ data }) => {
				let results = data.Search;
				setState(previousState => {
					return { ...previousState, results: results };
				});
			});
		}
	};

	const handleInput = e => {
		let searchQuery = e.target.value;
		setState(previousState => {
			return { ...previousState, searchQuery: searchQuery };
		});
	};

	const openPopup = id => {
		axios(apiUrl + "&i=" + id + "&plot=full").then(({ data }) => {
			let result = data;
			setState(previousState => {
				return { ...previousState, selected: result };
			});
		});
	};

	const closePopup = () => {
		setState(previousState => {
			return { ...previousState, selected: {} };
		});
	};

	return (
		<>
			<MuiThemeProvider theme={bodyStyle}>
				<CssBaseline />
				<Container className={classes.main}>
					<SearchBar handleInput={handleInput} search={search} />
					<Results results={state.results} openPopup={openPopup} />
					{typeof state.selected.Title != "undefined" ? (
						<Details selected={state.selected} closePopup={closePopup} />
					) : (
						false
					)}
				</Container>
			</MuiThemeProvider>
		</>
	);
}

export default App;
