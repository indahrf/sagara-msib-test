import {BrowserRouter, Routes, Route} from "react-router-dom";
import ClothesList from "./components/ClothesList.js";
import AddClothes from "./components/AddClothes";
import EditClothes from "./components/EditClothes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClothesList/>}/>
        <Route path="add" element={<AddClothes/>}/>
        <Route path="edit/:id" element={<EditClothes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;