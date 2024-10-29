const App = () => {
  const todo = { text: "A brand new task", done: true };

  const todos = [
    { text: "Learn JavaScript", done: true },
    { text: "Learn JSX", done: false },
    { text: "Learn HTML", done: true },
    { text: "Learn CSS", done: true },
    { text: "Master React", done: false },
  ];

  const todoList = todos.map((loppingTodo, idx) => (
    <li key={idx}>
      {/* {loppingTodo.text} */}

      {loppingTodo.done
        ? `Task Completed - ${loppingTodo.text}`
        : loppingTodo.text}
    </li>
  ));

  // Just remember. You can nest this ^ | Into another return so you can do a console log if something does come up.

  return (
    <>
      <h1 className="title-tag">JavaScript in JSX</h1>
      <p>{todo.text}</p>

      <h2 className="sub-tag">Conditional Rendering</h2>
      <p>{todo.done ? `Task Completed - ${todo.text}` : todo.text}</p>

      <h2>Looping with JSX</h2>
      <ul>{todoList}</ul>
    </>
  );
};

export default App;
