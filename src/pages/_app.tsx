import "@/styles/globals.css";
import '@/styles/BurgerMenu.css'
import '@/styles/mobile.css';
import '@/styles/registerForm.css';

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
