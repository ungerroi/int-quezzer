import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Adm from './pages/Adm'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Cnd from './pages/Cnd'
import Exm from './pages/Exm'
import Rps from './pages/Rps'
import CndSingle from './pages/CndSingle'
import ExmSingle from './pages/ExmSingle'
import RpsSingle from './pages/RpsSingle'


function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="adm" replace={true} />} />
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoute />} >
        <Route path="adm" element={<Adm />} >
          {/* main admin pages */}
          <Route path="cnd" element={<Cnd />} />
          <Route path="exm" element={<Exm />} />
          <Route path="rps" element={<Rps />} />
          {/* single admin pages */}
          <Route path="cnd/:cid" element={<CndSingle />} />
          <Route path="exm/:eid" element={<ExmSingle />} />
          <Route path="rps/:rid" element={<RpsSingle />} />
        </Route>
      </Route>
      <Route path="*" element={(() => <h1>PAGE NON FOUTE - 404 :(</h1>)()} />
    </Routes>
  );
}

export default App;


