import React from 'react';
import {Simpson} from "./components/Simpson/Simpson";

const App = () => {
    return (
        <div>
            <Simpson name={'Homer'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpson name={'Marge'} surname={'Simpson'} image={'https://static.wikia.nocookie.net/adventures-of-chris-and-tifa/images/0/0c/Tapped_Out_Unlock_Marge.png'}/>
            <Simpson name={'Bart'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
            <Simpson name={'Lisa'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
        </div>
    );
};

export {App};
