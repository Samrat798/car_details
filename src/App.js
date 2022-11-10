import "./App.css";
import Cars from "./api/cars.json";
import Car_details from "./components/Car_details";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const scrollRight = () => {
    ref.scrollX += 40;
  };
  return (
    <>
      <div className="app">
        {Cars.map((item) => (
          <Car_details
            id={item.id}
            type={item.bodyType}
            name={item.modelName}
            modelType={item.modelType}
            image={item.imageUrl}
          />
        ))}
      </div>
      <div className="app-btn_container">
        <button className="left-btn button">
          <img src="./images/chevron-circled.svg" alt="Right Button" />
        </button>
        <button onClick={scrollRight} className="right-btn button">
          <img src="./images/chevron-circled.svg" alt="Left Button" />
        </button>
      </div>
    </>
  );
}

export default App;
