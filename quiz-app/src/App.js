import React from 'react';
import './App.css';

import SearchInput from './components/InputComponent';
export const RoleContext = React.createContext();
function App() {
  return (
  <>
    <SearchInput />
  </>
  );
}

export default App;
