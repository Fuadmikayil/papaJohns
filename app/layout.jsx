import Header from "./components/header";
import "./globals.css";
export const metadata = {
  title: "PapaJhons",
  description: "Pizza",
  icons: {
    icon: '/favicon.png', // <- bunu əlavə edirik
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
