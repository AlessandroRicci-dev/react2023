import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Globals";
import { Theme } from "./styles/Theme";

import Homepage from "./pages/HomePage";

export interface User {
  id: string;
  user: string;
  age: number;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const onSave = (user: User) => {
    setUsers([...users, user]);
  };
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Homepage userList={users} onSave={onSave} />
    </ThemeProvider>
  );
};

export default App;
