import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    
    const login = () =>{
        setCurrentUser({
            id: 1,
            name: "John Doe",
            profilePic:"https://img.freepik.com/free-photo/studio-portrait-bearded-man-posing-beige-background-looking-into-camera-with-broad-smile-his-face_295783-16582.jpg?w=740&t=st=1670978023~exp=1670978623~hmac=e003676acfeeecea885ae34e31fc749d4da45df1695216bb6ebc587288b81fc5"
        });
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
}