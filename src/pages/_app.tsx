import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/app/components/Layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // check if microphone permission is granted
    // if not, ask for permission
    // if granted, start listening
    navigator.permissions
      .query({ name: "microphone" as any })
      .then((result) => {
        if (result.state === "granted") {
          // start listening
        } else if (result.state === "prompt") {
          // ask for permission
        } else if (result.state === "denied") {
          // ask for permission
        }
        result.onchange = function () {
          console.log(result.state);
        };
      });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
