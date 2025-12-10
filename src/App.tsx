import MainContent from "./components/maincontent";
import Header from "./components/header";
import Footer from "./components/footer";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

