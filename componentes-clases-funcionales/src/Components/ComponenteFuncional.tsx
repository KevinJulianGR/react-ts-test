interface ComponenteFuncionalProps{
    name: string;

}

export const ComponenteFuncional : React.FC<ComponenteFuncionalProps>=({name})=>{
    
    return (
        <>
        Hola Mundo desde un componente funcional hecho por {name}
        </>
    ) 
}