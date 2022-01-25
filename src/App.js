import './App.css';
import Navbar from './componets/Navbar'
import Sidebar from './componets/Sidebar';
import Header from './componets/header'
import Chart from './componets/chart.js';
import Main from './componets/main.js'

export default function App() {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Header/>
      <Chart/>
      <Main/>
    </div>
  );
}



