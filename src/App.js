import SearchAppBar from "./nav";
import Story from "./story";
import Third from "./third";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   {/* <SearchAppBar></SearchAppBar> */}
    //   {/* <Story></Story> */}
    //   {/* <Third></Third> */}
    //   <Home></Home>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/story" element={<Story></Story>}></Route>
        <Route path="/menu" element={<SearchAppBar></SearchAppBar>}></Route>
        <Route path="/careers" element={<Third></Third>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
