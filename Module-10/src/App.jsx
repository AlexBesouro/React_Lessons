import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Notes from "./pages/Notes";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
    return (
        <Routes>
            {/* La route parente utilise le Layout */}
            <Route element={<Layout />}>
                {/* Les routes enfants s'affichent dans <Outlet /> */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}

export default App;
