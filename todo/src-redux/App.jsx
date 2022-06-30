import './App.css';
import TodoForm from './TodoForm';
import TodoListe from './TodoListe';
import {Provider} from 'react-redux';
import store from './store';

function App() {

   return (
      <Provider store={store}>
      <div className="todoliste">
        <TodoForm />
        <TodoListe />     
      </div>
      </Provider>
    );
}


export default App;
