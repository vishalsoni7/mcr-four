import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Header } from "./pages/Header";
import { Posts } from "./pages/Posts";
import { SideBar } from "./pages/SideBar";
import { SinglePost } from "./pages/SinglePost";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app">
        {" "}
        <SideBar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:currentPostId" element={<SinglePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
