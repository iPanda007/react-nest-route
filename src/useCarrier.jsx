import React from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserComsumer = UserContext.Consumer;

export {UserProvider,UserComsumer}
