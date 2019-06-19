import React, { Component } from 'react';
import './Table.scss';
import { Link, withRouter } from 'react-router-dom';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        isUpdate: false
    };

    updateVersion() {
        this.setState({isUpdate: true});
    }

    onChangeNameVer(e, version) {
        console.log(e.target.value)
        
    }

    render() {
        const { 
            name = '', 
            index = '', 
            version = '',
            dateReleased = '',
            dateCreated = '',
            versionName = ''
        } = this.props;
        const {isUpdate = false} = this.state;
        return (
            <tr key={index}>
                    <td tabIndex={index}><span>{name}</span></td>
                    <td tabIndex={index}><span>{version}</span></td>
                    <td tabIndex={index}><span>{dateReleased}</span></td>
                    <td tabIndex={index}><span>{dateCreated}</span></td>
                    <td tabIndex={index} onClick={() => {this.updateVersion()}}> {isUpdate ? <input onChange={(e) => {this.onChangeNameVer(e, version)}}></input> : <span>{versionName}</span>}</td>
            </tr>
        );
    }
}



export default withRouter(Table);
