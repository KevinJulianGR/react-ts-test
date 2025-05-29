import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list =["Kevin", "Julian", "Andres"]

  return (
    <Card>
      <CardBody title="Titulo" text="Texto" />
      <List data={list}/>
    </Card>
  );
}

export default App;
