import React from 'react';
import styled from 'styled-components';


const Content = styled.div`
	position: fixed;
	width: 100%;
	height: 80px;
	background-color: #ffe0e0;
`;

const Title = styled.h2`
	margin: 5px 0 0;
	text-align: center;
`;

const ItunesForm = styled.div`
	display: flex;
	width:300px;
	margin:0 auto;

	
`;

const Button = styled.button`
	background-color: #f0c040;};
	color: #ffffff;
	border-radius: 2em;
	height: 28px;
	:hover {
		cursor: pointer;
		background-color: #528f19;
	}
	:focus {
		outline-color: #528f19;
	}
`;

const Input = styled.input`
	height: 25px;
	margin: 0 1em;
	padding: 0 1em;
	background-color: #ffffff;
	border-radius: 1em;
	color:#404040;
	font-size: 16px;
	::placeholder {
		color:  #404040;
	}
	:focus {
		outline-color:  #404040;
	}
`;



class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			searchMedia: 'all',
		};
	}

	handleSearchTextChange = event =>
		this.setState({ searchText: event.target.value });

	handleSearchMediaChange = event =>
		this.setState({ searchMedia: event.target.value });

	render() {
		const { startSearch } = this.props;
		const { searchText, searchMedia } = this.state;

		return (
			<Content>
				<Title>iTunes Search </Title>
				<ItunesForm>
					<Input
						type="text"
						value={searchText}
						placeholder="Enter artist name"
						onChange={this.handleSearchTextChange}
					/>

					<Button onClick={() => startSearch(searchText, searchMedia)}>
						search
					</Button>
				</ItunesForm>
			</Content>
		);
	}
}

export default Header;
