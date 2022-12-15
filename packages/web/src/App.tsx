import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeContext, themeMappings, ThemeMode } from './context/ThemeContext';
import Layout from './pages/Layout';
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
  }
`;

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.Light);

  useEffect(() => {
    const isDark = localStorage.getItem('isDark');
    if (isDark === '1') setTheme(ThemeMode.Dark);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={themeMappings[theme]}>
        <GlobalStyle />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
