import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage, IndexPage } from "./component";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
