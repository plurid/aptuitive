export interface UserDesign {
    elementID: string;
}


export interface IAptuitive {
    /**
    * Add elements to be tracked for usage and determine
    * if they are to be included in the User Interface.
    *
    * @param element
    */
   add: (
       WrappedComponent: React.FC<any>,
   ) => React.FC<any>;

   design: () => any;
}


export interface AptuitiveOptions {
   hideOnly: boolean;
}


export interface AptuitiveProperties {
   aptID: string;
   [key: string]: any;
}
