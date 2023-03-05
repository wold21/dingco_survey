import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/home/Home";
import NotFound from "./pages//Error/NotFound";

function App() {
    return (
        <BrowserRouter>
            <div className="App"></div>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
