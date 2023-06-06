import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BizpushDashboard from "./component/BizpushDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./shoppage/ShopNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/bizpushpixel" element={<BizpushDashboard />}></Route>
          <Route path="/shoppage" element={<MyNavbar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
