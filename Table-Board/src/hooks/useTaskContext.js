import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function useTaskContext() {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error("useTaskContext should be used in <TaskProvider/>");
    }
    return context;
}

export { useTaskContext };
