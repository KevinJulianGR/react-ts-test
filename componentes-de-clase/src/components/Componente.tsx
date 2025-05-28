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
            Hola, {this.state.name}
            <br />
            <button onClick={()=>{this.setState({name: "Julian"})}}>
                Cambiar Nombre 
            </button>
        </>
    }
    componentDidMount() {
        console.log("ComponentDidMount");
    
    }
    componentDidUpdate(prevProps: Readonly<ComponenteProps>, prevState: Readonly<ComponentState>, snapshot?: any){
        console.log("ComponentDidUpdate")
        console.log("prevProps");
        console.log(JSON.stringify(prevProps));
        console.log("Current props");
        console.log(JSON.stringify(this.props));
        console.log("prevStae");
        console.log(JSON.stringify(prevState));
        console.log("Current state");
        console.log(JSON.stringify(this.state));
    }
    componentWillUnmount(){
        console.log("ComponentWillMount");
    }
}

interface ComponentState{
    name: string;
}