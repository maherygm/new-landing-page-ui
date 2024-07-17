import BoxReveal from "@/@components/magicui/box-reveal";
import { AnimatedGradientTextDemo } from "./annimatedGradientText";
import { AnimatedShinyTextDemo } from "./shinyText";
import { WordRotateDemo } from "./wordRotate";

export function BoxRevealDemo() {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center p-5">
      {/* Section pour les éléments animés */}
      <div className="w-full max-w-[32rem] flex-grow flex flex-col justify-start mr-40">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            A Simple way to<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={1}>
          <p className="text-[3.5rem] font-semibold">Control influencers</p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={1.2}>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <p className="text-[3.5rem] font-semibold">through</p>
            <WordRotateDemo text={["AI", "Health"]} />
          </div>
        </BoxReveal>
      </div>

      {/* Section pour les autres éléments statiques */}
      <div className="w-full max-w-[32rem] flex-grow flex flex-col justify-start mr-40">
        <BoxReveal boxColor={"#5046e6"} duration={1.8}>
          <h2 className="mt-[.5rem] text-[1rem]">
            Lorem ipsum dolor , dicta!{" "}
            <span className="text-[#5046e6]">Lorem, ipsum dolor.</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-4">
            <p>
              -&gt; Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dolorem, rem!
              <span className="font-semibold text-[#5046e6]"> React</span>,
              <span className="font-semibold text-[#5046e6]"> Typescript</span>,
              <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
              and
              <span className="font-semibold text-[#5046e6]"> Framer Motion</span>.
              <br />
              -&gt; 100% open-source, and customizable. <br />
            </p>
          </div>
        </BoxReveal>
      </div>

      {/* Section pour les éléments animés */}
      <div className="w-full max-w-[32rem] flex-grow flex flex-col justify-start mr-40">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="flex gap-2 mb-5">
            <AnimatedShinyTextDemo text="Try it now" />
            <AnimatedGradientTextDemo text="Try it now The Magic AI" />
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}
