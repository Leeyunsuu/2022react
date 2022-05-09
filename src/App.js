import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
  };
  // console.log("헤응" + toDos);
  return (
    <div>
      <h1>내 Todos({/*`${toDos}`*/ toDos.length})</h1>
      <form>
        <input
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder="todo 리스트 적으세요"
        ></input>
        <button onClick={onSubmit}>Save Todo</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
