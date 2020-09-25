import "styles/global.css";
import "typeface-open-sans";
import "typeface-merriweather";
import { useAnalytics } from "@happykit/analytics";

export default function MyApp({ Component, pageProps }) {
  // Track page views
  useAnalytics({ publicKey: "analytics_pub_3ed30e0be4" });

  return <Component {...pageProps} />;
}
