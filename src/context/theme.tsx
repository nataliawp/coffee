import React from "react";

type Theme = 'light' | 'dark'

interface ThemeProps {
    theme: Theme
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeProps>({} as ThemeProps);

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [theme, setTheme] = React.useState<Theme>('dark');

    const changeTheme = (newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme)
    }

    const toggleTheme = () => {
        if (theme === 'light'){
            changeTheme('dark')
        } else changeTheme('light')
    }

    React.useEffect(() => {
        if (typeof window === undefined) return;
        setTheme(localStorage.getItem('theme') as Theme);
        if (theme === 'light'){
            document.body.classList.remove('dark');
        } else document.body.classList.add('dark');
    }, [theme]);

    const defaultValue = {
        theme,
        setTheme,
        toggleTheme
    }

    return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
    return React.useContext(ThemeContext)
}

export default ThemeProvider;