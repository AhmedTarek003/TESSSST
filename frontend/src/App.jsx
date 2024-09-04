import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://tesssst-neon.vercel.app/api/products"
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  return <div>App</div>;
};

export default App;
