import './App.css';
import MyComp from "./components/MyComp";

function App() {

  function greed(name) {
    return (
      <>
        <h1>  Hello , {name}   </h1>
      </>
    )
  }
  return (
    <>
      <h1>Hello World</h1>
      {true && <h2 className="text-danger"> hello world 2 </h2>}
      {greed("Sania")}
      <MyComp name={"Sania"} location={"Ahmedabad"} course={"MERN"} />
    </>
  );
}

export default App;
