
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import GamePage from './pages/game/GamePage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ProfilePage from "./pages/profile/ProfilePage";
import PaymentPage from "./pages/payment/PaymentPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/game/:game_id" element={<GamePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
