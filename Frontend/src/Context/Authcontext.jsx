import { createContext, useState } from "react";
// import { useContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const is = localStorage.getItem("isLogin");




    function login() {
        setIsAuth(true);
    }
    function logout() {
        setIsAuth(false);
    }
    return <AuthContext.Provider value = {{isAuth, login,logout}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider