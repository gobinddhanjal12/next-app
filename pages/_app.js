import "@/styles/globals.css";
import "../styles/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/contact.css";
import "../styles/employeedetail.css";
import "../styles/productdetail.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
