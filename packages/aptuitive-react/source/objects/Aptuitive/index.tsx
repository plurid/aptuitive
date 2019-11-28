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

    handleOnClick (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) {
        console.log('click', event);
    }

    handleOnMouseEnter (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) {
        console.log('mouse enter', event);
    }

    handleOnMouseLeave (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) {
        console.log('mouse leave', event);
    }

    add (
        WrappedComponent: React.FC<any>,
    ) {
        const AptuitiveComponent: React.FC<any> = (properties) => {
            return (
                <div
                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => this.handleOnClick(event)}
                    onMouseEnter={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => this.handleOnMouseEnter(event)}
                    onMouseLeave={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => this.handleOnMouseLeave(event)}
                >
                    <WrappedComponent
                        {...properties}
                    />
                </div>
            );
        }

        return AptuitiveComponent;
    }

    design () {
    }
}


export default Aptuitive;
