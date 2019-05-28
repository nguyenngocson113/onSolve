import React, { Component } from 'react';
import './Table.scss';
import { Link, withRouter } from 'react-router-dom';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    pressEnter(e) {
        if(e.keyCode === 13) {
            const {link = '/'} = this.props;
            this.props.history.push(link);
        }
    }

    render() {
        const { 
            name = '', 
            description = '', 
            img = '', 
            link = '', 
            index = '', 
            className = '' 
        } = this.props;
        return (
            <tr key={index} className={className}>
                    <td tabIndex={`${index}1`} className="name"><span>{name}</span></td>
                    <td tabIndex={`${index}2`}>
                        <span className="description-text">{description}</span>
                    </td>
                    {link ?
                        <td tabIndex={`${index}3`} onKeyDown={(e) => this.pressEnter(e)}>
                            <Link to={link} >
                                <img className="description-thumbnail" src={img}></img>
                            </Link>
                        </td>
                    :
                    <td tabIndex={`${index}3`}>
                            <img className="description-thumbnail" src={img}></img>
                    </td>
                    }
            </tr>
        );
    }
}

export default withRouter(Table);
