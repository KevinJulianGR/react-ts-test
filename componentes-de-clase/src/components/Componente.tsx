import React, { ComponentProps } from "react";

interface ComponenteProps{
    name:string;
}

export class Componente extends React.Component<ComponenteProps, ComponentState>{
    
    constructor(props: ComponenteProps){
        super(props);
        this.state = {
            name: this.props.name
        }
        console.log("constructor")
    }

    render(){
        console.log("render")
        return <>
            Hola {this.state.name}
        </>
    }
}

interface ComponentState{
    name: string;
}