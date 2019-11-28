import React from 'react';

import Aptuitive from '@plurid/aptuitive-react';



const Button = () => {
    return (
        <button>
            button
        </button>
    );
}

const aptuitive = new Aptuitive();

const AptButton = aptuitive.add(Button);


const App = () => {
    return (
        <div>
            <AptButton />
        </div>
    );
}


export default App;
