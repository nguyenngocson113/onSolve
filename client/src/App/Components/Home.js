import React, { Component } from 'react';
import { MARVEL } from '../../config/marvel';
import utils from '../utils';
import Header from './Header';
import List from './List';

const PARAMS = utils.formatParams(MARVEL.PARAMS_MARVEL);
const LIMIT = 10;

class Home extends Component {

	state = {
		list: [],
		offset: 0,
		isLoading: false,
		error: false
	};

	componentDidMount() {
		window.addEventListener('scroll', () => this.handleOnScroll());
		this.fetchData();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleOnScroll);
	}

	fetchData() {
		const { list = [], offset = 0 } = this.state;
		this.setState({isLoading: true});
		fetch(`${MARVEL.CHARACTERS_URL}?${PARAMS}&offset=${offset}&limit=${LIMIT}`)
			.then(res => res.json())
			.then((result) => {
				const {
					data: {
						results = []
					} = {}
				} = result;
					this.setState({list: [...list, ...results], offset: offset + LIMIT, isLoading: false});
				
			})
			.catch((error) => {
				this.setState({error: true, isLoading: false});
			});
	}

	handleOnScroll() {
		var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
		var clientHeight = document.documentElement.clientHeight || window.innerHeight;
		var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
	
		if (scrolledToBottom) {
			this.fetchData();
		}
	}

	render() {
		const { list = [], isLoading = false, error = false } = this.state;
		const title = [{ classCss: 'name', name: 'Name' }, { classCss: 'description', name: 'Description' }];
		return (
			<div>
				<Header />
				{list.length ? <List list={list} title={title} /> : (
					<div>
						<h2>No List Items Found</h2>
					</div>
				)
				}
				{/* {isLoading &&
					
				} */}
				{isLoading &&
					<div>Loading...</div>
				}
				{error && 
					<div> 503 Service Unavailable </div>
				}
			</div>
		);
	}
}

export default Home;
