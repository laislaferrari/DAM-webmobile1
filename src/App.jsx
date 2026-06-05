import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ClienteProvider } from "./context/ClienteContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ClienteProvider>
      <div>
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    </ClienteProvider>
  );
}

export default App;
