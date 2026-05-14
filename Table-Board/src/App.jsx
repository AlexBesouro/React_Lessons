import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { Notes } from "./pages/Notes";
import { Tasks } from "./pages/Tasks";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/notes" element={<Notes />}></Route>
                <Route path="/tasks" element={<Tasks />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
