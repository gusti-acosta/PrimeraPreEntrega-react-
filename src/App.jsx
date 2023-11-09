import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './index.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListContainer';

function App() {
  return (
  <div>
    <NavBarComponent/>
    <ItemListConteiner greeting={"Productos más vendidos"}/>
  </div>
  );
}
export default App;
