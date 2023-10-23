import { ThemeProvider } from './src/Presentation/context/themeContext/ThemeContext';
import { Navigator } from './src/Presentation/navigator/Navigator';


export default function App() {
  return (
    <AppState>
        <Navigator />
    </AppState>
  );
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}
