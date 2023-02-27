import Welcome from "@/components/welcome";
import Skills from "@/components/skills";
import MyWork from "@/components/myWork";
import Contact from "@/components/contact";
import About from "@/components/about";
import Ability from "@/components/ability";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  console.log("    ▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓   ▓​▓▓▓");
  console.log("  ▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓​▒▒▒▓▓");
  console.log("  ▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓​▓▒▒▓▓");
  console.log("   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓​▓▓▓▓");
  console.log("     ▓▓▓▓▓███▓▓▓▓▓▓▓███▓▓▓​▓▓");
  console.log("    ▓▓▓▓▓▓███▓▓▓▓▓▓▓███▓▓▓​▓▓▓");
  console.log("    ▓▓▓▓▓▓▓▓▒▒▒███▒▒▒▓▓▓▓▓​▓▓▓");
  console.log("    ▓▓▓▓▓▓▓▒▒▒▒███▒▒▒▒▓▓▓▓​▓▓▓");
  console.log("     ▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓​▓▓");
  console.log("       ▓▓▓▓▓▓▒▒▒▒▒▒▒▓▓▓▓▓▓");
  console.log("     ▓▓▓░░░░░▓▓▓▓▓▓▓░░░░░▓​▓▓");
  console.log(" ▓▓▓▓░░░░░░░░░░░▓░░░░░░░░░​░░▓▓▓▓");
  console.log("▓▓▓▓▓░░░░░╔══╦╦╦═╦═╦╦╦═╗░░​░░▓▓▓▓▓");
  console.log("▓▓▓▓▓▓░░░░╚╗╔╣╩║╬║║║═╣═╣░░​░▓▓▓▓▓▓");
  console.log("▓▓▓▓▓▓▓░░░░║║║╦║║║║║║╠═║░░​▓▓▓▓▓▓▓");
  console.log("▓▓▓▓▓▓▓░░░░╚╝╚╩╩╩╩╩╩╩╩═╝░░​▓▓▓▓▓▓▓");
  console.log(" ▓▓▓▓▓▓░░░░░░▄██▄██▄░░░░░░▓​▓▓▓▓▓");
  console.log("   ▓▓▓▓░░░░░░███████░░░░░░▓​▓▓▓");
  console.log("     ▓▓█▓░░░░███████░░░░▓█​▓▓");
  console.log("  ▓▓▓▓▓▓▓▓▓░░░█████░░░▓▓▓▓​▓▓▓▓▓");
  console.log(" ▓▓▒▒▒▒▒▒▓▓▓░░░███░░░▓▓▓▒▒​▒▒▒▒▓▓");
  console.log("▓▓▒▒▒▒▒▒▒▒▒▓▓▓░░▀░░▓▓▓▒▒▒▒​▒▒▒▒▒▓▓");
  console.log("▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓░▓▓▓▓▒▒▒​▒▒▒▒▒▒▒▓▓");
  console.log("▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▒▒▒▒▒​▒▒​▒▒▒▓▓");
  console.log("▓▓▓▒▒▒▒▒▒▒▒▓▓▓     ▓▓▓▒▒▒▒​▒▒​▒▒▓▓▓");
  console.log(" ▓▓▓▓▓▓▓▓▓▓▓▓       ▓▓▓▓▓▓​▓▓▓▓▓▓");
  console.log(
    "Greetings! 👋 If you're feeling curious, you might be wondering how awesome this website is."
  );
  console.log(
    "If you find it intriguing and would like to explore the code that powers it, I've made it available on https://github.com/GautierE/portfolio. Don't hesitate to take a look!"
  );
  console.log(
    "Additionally, you can reach me at gautier.edel.info@gmail.com ✨."
  );

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
