import Seo from "../Seo/Seo";
import Footer from "../components/footer";
import Header from "../components/Header";

const Layout = ({ children, auth, login }) => {
  return (
    <div className="wrapper">
      <Seo />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
