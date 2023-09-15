import "./App.css";
import Header from "./layouts/header";
import HomePage from "./pages/home";
import Footer from "./layouts/footer";
import Modal from "./components/modal";

function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <Footer />
            <Modal />
        </div>
    );
}

export default App;
