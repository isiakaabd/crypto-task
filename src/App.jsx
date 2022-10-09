import {
  Header,
  UpperSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  MarketSection,
  DetailsSection,
  ProfitSection,
  Mining,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <UpperSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <MarketSection />
      <div style={{ display: "none" }}>
        <DetailsSection />
        <ProfitSection />
        <Mining />
        <Footer />
      </div>
    </>
  );
}

export default App;
