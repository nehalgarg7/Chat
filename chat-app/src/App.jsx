import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} exact></Route>
          <Route path="/login" Component={Login} exact></Route>
          <Route path="/chats" Component={ChatPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
