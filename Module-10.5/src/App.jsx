import { LoginForm } from "./components/LoginForms";
import { UserInfo } from "./components/UserInfo";
import { ProtectedContent } from "./components/ProtectedContent";

import "./App.css";

function App() {
    return (
        <div>
            <UserInfo />
            <LoginForm />
            <ProtectedContent />
        </div>
    );
}

export default App;
