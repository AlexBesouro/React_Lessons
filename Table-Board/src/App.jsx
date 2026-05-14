import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { Notes } from "./pages/Notes";
import { Tasks } from "./pages/Tasks";
import "./App.css";
import { TaskDetail } from "./pages/TaskDetail";
import { NotFound } from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/notes" element={<Notes />}></Route>
                <Route path="/tasks" element={<Tasks />}></Route>
                <Route path="/tasks/:id" element={<TaskDetail />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
