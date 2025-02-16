import { ReactNode } from "react";

import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import Create from "./components/Create/Create.tsx";

import DreamsProvider from "./providers/DreamsProvider.tsx";
import ThemeProvider from "./providers/ThemeProvider.tsx";

import "./App.module.css";

function App(): ReactNode {
  return (
    <ThemeProvider>
      <DreamsProvider>
        <Header />
        <main>
          <Toolbar />
          <Result />
        </main>
        <Create />
      </DreamsProvider>
    </ThemeProvider>
  );
}

export default App;
