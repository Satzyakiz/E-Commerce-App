import React from 'react';

export const ProductListView = (props) => {
    return (<div className="view">
                <div className="view-header">
                    <div>
                        <h1 className="view-title">{props.title}</h1>
                        <h5>{props.subtitle}</h5>
                    </div>
                    {props.link !== undefined ? <button>View More</button> : <div></div>}
                </div>
                <div className={props.large === true ? 'productl-list' : 'product-list'}>
                    {props.children}
                </div>
            </div>);
}