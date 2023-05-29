import "./App.css";
import NavbarComponent from "./NavbarComponent";
import ContactPage from "./ContactPage";
function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <hr
        className="hor"
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "3px",
        }}
      />

      <ContactPage></ContactPage>
    </div>
  );
}

export default App;
