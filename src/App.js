// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import NoteList from "./component/NoteList";
import Login from "./component/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<NoteList />} />
      </Routes>
    </Router>
  );
}

export default App;
