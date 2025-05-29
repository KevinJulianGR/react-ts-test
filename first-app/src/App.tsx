import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list =["Kevin", "Julian", "Andres"]

  const handleSelect =(elemento:String)=>{
    console.log("imprimiendo "+elemento )
  }

  return (
    <Card>
      <CardBody title="Titulo" text="Texto" />
      <List data={list} onSelect={handleSelect}/>
    </Card>
  );
}

export default App;
