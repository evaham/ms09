
import "./globals.css";
import NavMenu from "./component/navMenu";
import { ModalProvider } from '@/app/context/modalContext';

export const metadata = {
  title: "MS공동구매",
  description: "공동구매 페이지",
};



export default function RootLayout({ children }) {
  return (
    <html translate="no" lang="ko-KR" className="touch-manipulation">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width, target-densityDpi=medium-dpi" />
      </head>
      <body className="antialiased" >
      <ModalProvider>
        <NavMenu />
        {children}
      </ModalProvider>
      </body>
    </html>
  );
}
