import { Routes, Route, Outlet } from "react-router-dom";

import Home from './routes/home/home.components';
import Navigation from "./routes/navigation/navigation.component";


const Shop = () =>{
  return <div> This is SHOP </div>
}

const App = () => {

  // index property means it matches parent path
  return (
    <Routes>
      <Route path="/" element={ <Navigation/> } >
        <Route index element={ <Home/> } />
        <Route path="/shop" element={ <Shop/> } />
      </Route>
    </Routes>
  );
}

export default App;
 