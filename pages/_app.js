// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react";
import "@fontsource/inter/500.css";

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "light",
  theme: {
    fonts: {
      sans: "Inter",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
