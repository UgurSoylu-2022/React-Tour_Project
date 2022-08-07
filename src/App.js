import './App.scss';
import Card from './components/navbar/card/Card';
import Header from './components/navbar/header/Header';
import Navbar from './components/navbar/navbar/Navbar';

import { data } from "./helpers/Data"

function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Header/>
        <Card data={data}/>
    </div>
  );
}

export default App;
