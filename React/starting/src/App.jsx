import "./App.css";
// import { Title } from "./Title.jsx";
// import Product from "./Product.jsx";
// import MsgBox from "./msgBox.jsx"; // Fix case sensitivity
import "./Product.css";
import ProductTab from "./ProductTab.jsx";

function App() {
  // let options = ["hi-tech", "durable", "Quality", "Customize"];
  return (
    <>
      {/* <Title title="Phone" />
      <Product title="Realme X" features={options} price={30000} />
      <Product title="Realme Y" features={options} price={20000} />
      <Product title="Realme Z" features={options} price={15000} />
      <MsgBox userName="Rahul" txtcolor="red" /> Fix typo and case */}
      <ProductTab />

    </>
  );
}

export default App;
