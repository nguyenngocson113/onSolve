import React, { Component } from 'react';
import './List.scss';
import classNames from 'classnames';
import Table from './Table';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list = [], title = [] } = this.props;
        return (
            <div className="List">
                <ul className="title">
                    {
                        title.map((item, index) => {
                            const {header = '', name = ''} = item;
                            return (
                                <li className={header} key={index}>{item}</li>
                            )
                        })
                    }   
                </ul>
                    <table className="table">
                        <tbody>
                        {
                            list.map((item, index) => {
                                const isEven = (index % 2) === 0 ? true : false;
                                const {
                                    projects = [],
                                    version = '',
                                    dateReleased = '',
                                    dateCreated = ''
                                } = item;
                                const {slug: projectName = ''} = projects[0];
                                return (<Table 
                                            name={projectName}
                                            version={version}
                                            dateReleased={dateReleased}
                                            dateCreated ={dateCreated}
                                            index={index}
                                            key={index}
                                        />);
                            })
                        }
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default List;
