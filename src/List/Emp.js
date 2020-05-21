import React from 'react';

import './List.css';

const emp = (props) => (
    <article className="Employee" onClick={props.clicked}>
        <h2>{props.id}</h2>
        <div className="Info">
            <div className="box">
                <b>{props.name}</b><br/>
                {props.desg}<br/>
                {props.doj}
                </div>
                <button onClick={props.clicked}>Delete</button>
        </div>
    </article>
);

export default emp;