import Welcome from "@/components/welcome";
import Skills from "@/components/skills";
import MyWork from "@/components/myWork";

export default function Home() {
  return (
    <div class="snap-y snap-mandatory">
      <Welcome />
      <Skills />
      <MyWork />
    </div>
  );
}
