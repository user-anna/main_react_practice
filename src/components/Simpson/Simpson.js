import React from 'react';

const Simpson = (props) => {
    const {name, surname, image} = props
    return (
        <div>
            <div>
                <div>name: {name}</div>
                <div>Surname: {surname}</div>
                <img src={image} alt={name}/>
            </div>
        </div>
    );
};

export {Simpson};