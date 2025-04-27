import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "PapaJhons",
  description: "Pizza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    <Header/>

        {children}
      </body>
    </html>
  );
}
