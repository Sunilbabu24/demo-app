import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div>
      <h1 className="sticky-top bg-danger p-2">Instagram</h1>

      {list.map((items, index) => (
        <div
          className="alert-primary m-3"
          style={{ height: "300px" }}
          key={index}
        >
          <img
            src={"https://picsum.photos/200" + index}
            alt=""
            className="rounded"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
