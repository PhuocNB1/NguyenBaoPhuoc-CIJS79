import './App.css';
import TaskName from "./Task";

function App() {
  return (
    <div className="App">
      <div className='content'>
        <h2>TO DO LIST</h2>
        <div className='form'>
          <input className='input' type='text' placeholder='Enter your task here ...' ></input>
        </div>
        <TaskName TaskName="Clean up bedroom"></TaskName>
        <TaskName TaskName="Buy some milk"></TaskName>
        <TaskName TaskName="Jogging"></TaskName>
        <TaskName TaskName="Learn React"></TaskName>
        <TaskName TaskName="Doing Exercises"></TaskName>
      </div>
      <div className='footer'>5 Tasks Left !</div>
    </div>
  );
}

export default App;
