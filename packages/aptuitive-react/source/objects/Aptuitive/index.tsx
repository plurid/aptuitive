import React from 'react';



export interface IAptuitive {
     /**
     * Add elements to be tracked for usage and determine
     * if they are to be included in the User Interface.
     *
     * @param element
     */
    add: (WrappedComponent: React.FC<any>) => React.FC<any>;

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

    handleClick(
        event: any,
    ) {
        console.log('clicked', event);
    }

    add(WrappedComponent: React.FC<any>) {
        const AptuitiveComponent: React.FC<any> = (properties) => {
            return (
                <WrappedComponent
                    onClick={(event: any) => this.handleClick(event)}
                    {...properties}
                />
            );
        }

        return AptuitiveComponent;
    }

    design() {
    }
}


export default Aptuitive;
