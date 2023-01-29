import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { Provider } from "react-redux";
import { store } from "../store";
import Global from "../styles/global";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={montserrat.className}>
        <Global />
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
