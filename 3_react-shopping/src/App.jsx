import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductionSection from "./components/ProductionSection";
import Container from './components/Container'

export default function App() {
  return (
    <Container>
      <Header />
      <CategorySection />
      <ProductionSection />
      <Footer />
    </Container>
  );
}