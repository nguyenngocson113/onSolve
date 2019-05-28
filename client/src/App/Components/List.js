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
                            const {classCss = '', name = ''} = item;
                            return (
                                <li className={classCss} key={index}>{name}</li>
                            )
                        })
                    }   
                </ul>
                    <table className="table">
                        <tbody>
                        {
                            list.map((item, index) => {
                                const isEven = (index % 2) === 0 ? true : false;
                                const className = classNames({
                                    'row-even': isEven
                                });
                                const {
                                    name = '',
                                    description = '',
                                    thumbnail: {
                                        extension = 'jpg',
                                        path = ''
                                    } = {},
                                    id
                                } = item;
                                const link = {
                                    pathname: `/page/${id}`,
                                    detail: item
                                };
                                return ( <Table 
                                            link={link}
                                            name={name}
                                            description={description}
                                            img={`${path}.${extension}`}
                                            className={className}
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
