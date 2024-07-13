import { MarqueeDemo } from "./mycomponents/MarqueeDemo";
import { AnimatedBeamDemo } from "./mycomponents/animatedBeam";
import { BoxRevealDemo } from "./mycomponents/boxReveal";
import { IconCloudDemo } from "./mycomponents/iconCloud";
import { AnimatedShinyTextDemo } from "./mycomponents/shinyText";
import { ScrollBasedVelocityDemo } from "./mycomponents/velocityScroll";
import { WordRotateDemo } from "./mycomponents/wordRotate";

function App() {
  return (
    <>
      <AnimatedShinyTextDemo />
      <BoxRevealDemo />
      <WordRotateDemo />
      <IconCloudDemo />
      <AnimatedBeamDemo />
      <MarqueeDemo />
      <ScrollBasedVelocityDemo />
    </>
  );
}

export default App;
