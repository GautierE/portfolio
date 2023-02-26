import Welcome from "@/components/welcome";
import Skills from "@/components/skills";
import MyWork from "@/components/myWork";
import Contact from "@/components/contact";
import About from "@/components/about";
import Ability from "@/components/ability";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        transition={Zoom}
        progressClassName="toast-purple-bar"
      />
      <Welcome />
      <Ability />
      <Skills />
      <MyWork />
      <About />
      <Contact />
    </div>
  );
}
