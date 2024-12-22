import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPageController from './controllers/LoginPageController';
import MainPageControlller from './controllers/MainPageController';
import HeaderView from './views/HeaderView';
import DetailController from './controllers/DetailController';

function App() {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginPageController />} />
        <Route path="/home" element={<MainPageControlller />} />
        <Route path="/coin/:id" element={<DetailController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
