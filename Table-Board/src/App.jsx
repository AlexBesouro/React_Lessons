import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./App.css";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Tasks = lazy(() => import("./pages/Tasks"));
const TaskDetail = lazy(() => import("./pages/TaskDetail"));
const Notes = lazy(() => import("./pages/Notes"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <Suspense fallback={<p style={{ textAlign: "center", padding: "40px" }}>Loading...</p>}>
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
        </Suspense>
    );
}

export default App;
