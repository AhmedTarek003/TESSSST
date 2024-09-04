import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");
      console.log(data);
    };
    getAllProducts();
  }, []);
  return <div>App</div>;
};

export default App;
