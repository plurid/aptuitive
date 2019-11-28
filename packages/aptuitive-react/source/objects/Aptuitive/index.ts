import React from 'react';



export interface IAptuitive {
     /**
     * Add elements to be tracked for usage and determine
     * if they are to be included in the User Interface.
     *
     * @param element
     */
    add: (element: JSX.Element) => void;

    design: () => any;
}


export interface AptuitiveOptions {
    hideOnly: boolean;
}


class Aptuitive implements IAptuitive {
    private options: AptuitiveOptions;

    constructor(options: AptuitiveOptions) {
        this.options = options;
    }

    add(element: JSX.Element) {
    }

    design() {
    }
}


export default Aptuitive;
