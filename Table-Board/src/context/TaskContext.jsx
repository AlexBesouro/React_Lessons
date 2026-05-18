import { useReducer } from "react";
import { createContext } from "react";
import { TASKS } from "../data/tasks";

const initialState = {
    tasks: TASKS,
    filter: "all",
    nextId: TASKS.length + 1,
};
function taskReducer(state, action) {
    const date = new Date().toLocaleDateString("fr-Fr");
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: state.nextId,
                        title: action.payload.title,
                        done: false,
                        description: action.payload.description || action.payload.title,
                        dateCreated: date,
                    },
                ],
                nextId: state.nextId + 1,
            };

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case "DONE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) => (task.id === action.payload ? { ...task, done: !task.done } : task)),
            };
        case "FILTER_TASK":
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
}
const TaskContext = createContext(null);

function TaskProvider({ children }) {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}
export { TaskProvider, TaskContext };
