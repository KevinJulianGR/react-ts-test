import { useEffect, useState } from "react"; 

interface ComponenteFuncionalProps {
  name: string;
}

export function ComponenteFuncional(props: ComponenteFuncionalProps) {
  const [name, setName] = useState(props.name); // ⬅️ Aquí se declara el estado
    console.log("Use state: "+ name);
  useEffect(() => {
    console.log("Use Effect: " + props.name);
    setName(props.name);
  }, [props.name]);

  return (
    <>
      Hola, {name}
      <br />
      <button onClick={() => setName("Julian")}>
        Cambiar Nombre
      </button>
    </>
  );
}
