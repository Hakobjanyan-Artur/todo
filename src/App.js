import './App.css';
import Form from './components/Form/Form';
import Cheked from './components/Checked/Cheked';
import Todo from './components/Todo/Todo';


function App() {
  return (
    <div className="App">
          <Form />
          <Cheked />
          <Todo />     
    </div>
  );
}

export default App;
