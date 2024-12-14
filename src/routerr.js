import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './App';
import Tree from './tree';
import Formula from './formula';
const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Tree/>} path='/tree' />
            <Route element={<Formula/>} path='/formula' />
            <Route path='*' element={<div>Not found</div>} />
        </Routes>
    </BrowserRouter>
}

export default Router