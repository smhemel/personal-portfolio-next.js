'use client'

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { moonIcon, sunIcon } from '@/assets';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useState, useEffect, PropsWithChildren } from 'react';

const Toggle = ({ children }: PropsWithChildren) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const addDarkTheme = () => {
    setIsDarkTheme(true);
    setTheme('dark');
    reactLocalStorage.set('darkTheme', true);
  }

  const removeDarkTheme = () => {
    setTheme('light');
    setIsDarkTheme(false);
    reactLocalStorage.set('darkTheme', false);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const darkTheme = reactLocalStorage.get('darkTheme');
    const darkThemeParsed = darkTheme !== undefined && typeof darkTheme === 'string' && JSON.parse(darkTheme);
    
    const systemTheme = resolvedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    if (darkTheme === undefined) {
      systemTheme === 'dark' ? addDarkTheme() : removeDarkTheme();
    } else {
      darkThemeParsed ? addDarkTheme() : removeDarkTheme();
    }
  }, [mounted, theme, resolvedTheme, setTheme]);

  return (
    <main>
      <div className="bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden">
          <button
            onClick={() => { !isDarkTheme ? addDarkTheme() : removeDarkTheme(); }}
            className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500 z-40"
          >
            <motion.span
              animate={{ scale: isDarkTheme ? 0 : 1 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
            >
              {moonIcon}
            </motion.span>
            <motion.span
              animate={{ scale: isDarkTheme ? 1 : 0 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-3xl dark:bg-zinc-800"
            >
              {sunIcon}
            </motion.span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
}

export default Toggle;
