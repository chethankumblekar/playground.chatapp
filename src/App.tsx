import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./containers/Login";
import { AuthProvider } from "./useContext/authProvider";
import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <main role="main" className="container">
          <Routes>
            <Route index path="/" Component={Home} />
            <Route path="/login" Component={Login} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
