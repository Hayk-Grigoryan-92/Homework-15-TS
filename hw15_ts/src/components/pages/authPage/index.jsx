import { ViewSection } from "./components/viewSection";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import "./style.scss";

export const AuthPage = () => {
  return (
    <div className="authPage">
      <Header />
      <div className="authPageContent">
        <Navbar />
        <ViewSection/>
      </div>
    </div>
  );
};
