import Welcome from "@/components/welcome";
import Skills from "@/components/skills";
import MyWork from "@/components/myWork";
import Contact from "@/components/contact";
import About from "@/components/about";
import Ability from "@/components/ability";

export default function Home() {
  return (
    <>
      <Welcome />
      <Ability />
      {/*
      <Skills />
      <MyWork />
      <About />
      <Contact /> */}
    </>
  );
}
