import { Routes, Route } from 'react-router-dom'
import Analytics from './pages/Analytics/Analytics'
import Campaigns from './pages/Campaigns/Campaigns'
import Logs from './pages/Logs/Logs'
import Targets from './pages/Targets/Targets'
import Templates from './pages/Templates/Templates'
import AdminServer from './pages/Settings/AdminServer/AdminServer'
import PhishyServer from './pages/Settings/PhishyServer/PhishyServer'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'


function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/analytics' element={<Analytics/>} />
            <Route path='/campaigns' element={<Campaigns/>} />
            <Route path='/logs' element={<Logs/>} />
            <Route path='/targets' element={<Targets/>} />
            <Route path='/templates' element={<Templates/>} />
            <Route path='/adminserver' element={<AdminServer/>} />
            <Route path='/phishyserver' element={<PhishyServer/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    )
}

export default AppRoutes