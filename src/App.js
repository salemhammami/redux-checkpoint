import { useSelector } from "react-redux"
import './App.css';
import AddTask from './Components/AddTask';
import ListTasks from './Components/ListTasks';

function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
            <AddTask/>

      <ListTasks/>
    </div>
  );
}

export default App;
