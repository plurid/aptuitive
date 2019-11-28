import React from 'react';

import {
    IAptuitive,
    AptuitiveOptions,
    AptuitiveProperties,
} from '../../interfaces';



class Aptuitive implements IAptuitive {
    private options: AptuitiveOptions;

    constructor(options: AptuitiveOptions) {
        this.options = options;
    }

    handleOnClick (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        elementID: string,
    ) {
        console.log('elementID', elementID);
        console.log('click', event);
    }

    handleOnMouseEnter (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        elementID: string,
    ) {
        console.log('elementID', elementID);
        console.log('mouse enter', event);
    }

    handleOnMouseLeave (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        elementID: string,
    ) {
        console.log('elementID', elementID);
        console.log('mouse leave', event);
    }

    add (
        WrappedComponent: React.FC<any>,
    ) {
        const AptuitiveComponent: React.FC<AptuitiveProperties> = (properties) => {
            const {
                aptID,
                ...passThroughProperties
            } = properties;

            return (
                <div
                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => this.handleOnClick(event, aptID)}
                    onMouseEnter={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => this.handleOnMouseEnter(event, aptID)}
                    onMouseLeave={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => this.handleOnMouseLeave(event, aptID)}
                >
                    <WrappedComponent
                        {...passThroughProperties}
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
