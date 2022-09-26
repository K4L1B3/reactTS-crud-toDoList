import {
    BrowserRouter as Router,
    Routes, // Garante que apenas uma única rota esteja visivel no mesmo momento
    Route
} from "react-router-dom";
import { Test } from "./pages/Teste/Teste";
import {Teste2} from "./pages/Teste2/Teste2";

export function AppRoutes() {
    return (
        <Router>
            <Routes>     
                <Route path="/teste" element={<Test /> }   /> 
                <Route path="/teste2" element={<Teste2 />} />  
           </Routes>
        </Router>
    )
}