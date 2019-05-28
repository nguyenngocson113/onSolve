import React, { Component } from 'react';
import Header from './Header';
import utils from '../utils';
import { MARVEL } from '../../config/marvel';
import Table from './Table';
import _ from 'lodash';
import './Page.scss';

class Page extends Component {
    constructor(props) {
		super(props);
    }

    state = {
        comics: [],
        isLoading: false
    };
    
    componentDidMount() {
        const {
            location: {
                detail: {
                    comics: {
                        collectionURI = ''
                    } = {}
                } = {}
            } = {}
        } = this.props;
        const params = utils.formatParams(MARVEL.PARAMS_MARVEL);
        this.setState({isLoading: true});
        fetch(`${collectionURI}?${params}`)
        .then(res => res.json())
        .then((result) => {
            const {
                data: {
                    results = []
                } = {}
            } = result;
            this.setState({comics: [...results], isLoading: false});
        })
        .catch((error) => {
            this.setState({isLoading: false});
        });

    }

    render() {
        const {
            location: {
                detail: {
                    description = '',
                    name = '',
                    thumbnail: {
                        path = '',
                        extension = ''
                    } = {}
                } = {}
            } = {}
        } = this.props;
        const {
            comics = [],
            isLoading = false
        } = this.state;
        return (
            <div>
                <Header />
                <div className="row post">
                    <div className="col-md-6">
                        <div className="content">
                            <img className='image' src={`${path}.${extension}`}></img>
                            <h1 className="title">{name}</h1>
                            { description && 
                                <p> {description} </p>
                            }
                            {isLoading && <div>Loading...</div>}
                            {!_.isEmpty(comics) && 
                                <div>
                                <p>Comics: </p>
                                <table>
                                    <tbody>
                                        {
                                            comics.map((item, index) => {
                                                const {
                                                    title: name = '',
                                                    description = '',
                                                    thumbnail: {
                                                        path = '',
                                                        extension = ''
                                                    } = {}
                                                } = item;
                                                return (<Table 
                                                    name={name}
                                                    description={description}
                                                    img={`${path}.${extension}`}
                                                    index={index}
                                                    key={index}
                                                />)
                                            })
                                        }
                                    </tbody>
                                </table>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;