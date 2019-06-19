import React, { Component } from 'react';
import { MARVEL } from '../../config/marvel';
import utils from '../utils';
import Header from './Header';
import List from './List';
import {getReleaseList} from './../API/sentryAPI';
// var sentry = new Sentry({
// 	token: '60526eb378c0463f96f106d4fc3b7098f5b5719cd5e44266aa195b923607f76b'
// });
const PARAMS = utils.formatParams(MARVEL.PARAMS_MARVEL);
const LIMIT = 10;
const organization = 'dinovative';
const project = 'maua-frontend';

class Home extends Component {

	state = {
		releases: [],
		isLoading: false,
		error: false
	};

	componentDidMount() {
		// window.addEventListener('scroll', () => this.handleOnScroll());
		this.fetchData();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleOnScroll);
	}

	async fetchData() {
		var url = "http://sentry.dinovative.com/api/0/organizations/dinovative/releases/";
		var bearer = 'Bearer ' + 'dacc310722f2407ba9b8eadc2ab186227556b986887646b293a99870ce97e924';
		await fetch(url, {
				method: 'GET',
				headers: new Headers({
					credentials: 'include',
					'Authorization': bearer,
				})
			}).then(responseJson => responseJson.json()
			).then(result => {
				console.log(result)
				this.setState({releases: result})
			})
			.catch(error => {
				console.log('error:', error)
			});
	};

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
		const { releases = [] } = this.state;
		return (
			<div>
				{releases.length && <List list={releases} title={['Project', 'Version', 'Date Release', 'Date Create', 'Name Version']}/>}
			</div>
		);
	}
}

export default Home;
