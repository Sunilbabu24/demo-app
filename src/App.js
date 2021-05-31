import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list] = useState([1, 2, 3, 4, 5, 1, 1, 2, 3]);

  return (
    <div>
      <h1 className="bg-primary sticky-top p-3">Project title</h1>

      {list.map((items, index) => (
        <div className="alert-primary p-3 rounded mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolore ab
          voluptate libero et. Ducimus soluta facilis eum itaque? Placeat veniam
          iusto maxime laborum, commodi est impedit et nemo nobis.100
        </div>
      ))}
    </div>
  );
}

export default App;
