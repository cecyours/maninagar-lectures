import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <main style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Welcome to the Main Section</h2>
          <p>This is a React component rendering example.</p>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
