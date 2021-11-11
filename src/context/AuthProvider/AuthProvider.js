import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;






















// import React, { createContext } from 'react';
// import useFirebase from '../../hooks/useFirebase'



// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const allContext = useFirebase()
//     // const event = useOffer();
//     const data = {
//         allContext,
//         // event
//     }
//     return (
//         <AuthContext.Provider value={data}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;