import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
export default App;
function App() {
  return (
    <div>
      <DynamicInput></DynamicInput>
    </div>
  );
}

const FirstComponent = () => {
  return (
    <div>
      <h1>Heading 1</h1>

      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, itaque
        tempora! Accusamus laudantium deleniti nam corporis, aliquid laborum
        dignissimos ipsam voluptatem omnis doloribus nulla facilis quia delectus
        hic porro quidem!
      </h2>
    </div>
  );
};

const SecondComponent = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <input type="button" value="Like" onClick={increment} />
    </div>
  );
};

const ThirdComponent = () => {
  const [counter] = useState(100);

  const [username] = useState("sunil");

  return (
    <div>
      <h1>ThirdComponent</h1>
      <div>{counter}</div>
      <div>{username}</div>
    </div>
  );
};

const FourthComponent = () => {
  const [counter] = useState(10);
  const [username] = useState("sunil");
  const [list] = useState(["Delhi", "Mumbai", "Kolkata", "Hyderabad"]);

  return (
    <div>
      <h1>FourthComponent</h1>
      <div>{list}</div>
      {list.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
};

const ListExample = () => {
  const [list, setlist] = useState([1, Math.random()]);

  const update = () => {
    setlist([Math.random(), ...list]);
  };
  return (
    <div>
      <div>
        <h1>List Example</h1>
        <input type="button" value="Add" onClick={update} />
        {list.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

const ListExample2 = () => {
  const [list, setlist] = useState([1, 2]);

  const add = () => {
    setlist([Math.random(), ...list]);
  };

  return (
    <div>
      <div>List Example</div>

      <input type="button" value="Add" onClick={(e) => add()} />
      {list.map((item, index) => (
        <div key={index} className="beautify">
          {item}
        </div>
      ))}
    </div>
  );
};

const InputComponent = () => {
  const [list, setlist] = useState(["Delhi", "kolkata"]);

  const AddTweet = () => {
    setlist(["Mumabi", ...list]);
  };

  return (
    <div>
      <h1>FaceBook</h1>
      <div>
        <input type="text " value="" placeholder="Post Something..." />
        <input type="button" value="Post" onClick={(e) => AddTweet()} />
      </div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const DynamicInput = () => {
  const [list, setlist] = useState([]);
  const [postInput, setPostInput] = useState("");
  const readandUpdate = (e) => setPostInput(e.target.value);

  const AddPost = () => {
    setlist([postInput, ...list]);
    setPostInput("");
  };

  return (
    <div>
      <h1>Facebook</h1>
      <input
        type="text"
        value={postInput}
        placeholder="Post here"
        onChange={(e) => readandUpdate(e)}
      />
      <input type="button" value="Post" onClick={(e) => AddPost()} />
      {list.map((item, index) => (
        <div className="beautify">{item}</div>
      ))}
    </div>
  );
};
