import PropTypes from "prop-types";
import Script from "next/script";
import { Noto_Sans_TC } from "next/font/google";
import "@/styles/main.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "源衡物理治療所",
  description:
    "我們的專業團隊能協助您定位病痛原因，以最適合的方式改善問題、重拾生活平衡"
};

const notoSansTC = Noto_Sans_TC({ preload: false });

export default function RootLayout({ children, modal }) {
  return (
    <html lang="zh-Hant-TW">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></Script>
        <script
          async
          data-id={process.env.CHATLING_ID}
          id="chatling-embed-script"
          type="text/javascript"
          src="https://chatling.ai/js/embed.js"
        ></script>
        <title>源衡物理治療所</title>
      </head>
      <body className={notoSansTC.className} suppressHydrationWarning>
        <div className="layout">
          <Header />
          {children}
          {modal}
          <div id="modal-root" />
        </div>
        <Footer />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node
};
