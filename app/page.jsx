import Contents from "./components/Contents";
import UnitLink from "./components/UnitLink";
import Container from "./components/Container";
import PlatForm from "./components/PlatForm";
import Products from "./components/Products";
import BuildYourApp from "./components/BuildYourApp";
import DevPrograms from "./components/DevPrograms";
import Subfooter from "./components/Subfooter";
import Footer from "./components/Footer";
import Superfoot from "./components/Superfoot";
export default function Home() {
  return (
    <>
      <Container>
        <UnitLink />
        <Contents />
        <PlatForm />
        <Products />
        <BuildYourApp />
        <DevPrograms />
        <Subfooter />
        <Footer />
        <Superfoot />
      </Container>
    </>
  );
}
