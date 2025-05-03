import React, { createContext } from 'react';

export const Authcontext = createContext()
const Authprovider = ({ children }) => {
    const user = "never stop rony "

    return (
        <div>
            <Authcontext.Provider value={user}>{children}</Authcontext.Provider>
        </div>
    );
};

export default Authprovider;