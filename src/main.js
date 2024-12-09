import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import stateManager from './state/stateManager';

function App() {
  const [state, setState] = React.useState(stateManager.getState());

  React.useEffect(() => {
    stateManager.subscribe(() => {
      setState(stateManager.getState());
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <AddItemForm />
      <ItemList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
