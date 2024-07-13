import AnimatedGridPattern from "@/@components/magicui/animated-grid-pattern";
import { cn } from "../../../../../@lib/utils";
import { MagicCardDemo } from "../../../../customComponents/magicCard";

const Service = () => {
  return (
    <div className="w-[80%] relative mx-auto my-9 flex flex-col gap-10 py-40">
      <div className="flex relative flex-col gap-6 items-center justify-center">
        <h1 className="text-7xl">What the Offer</h1>
        <p className="max-w-5xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi a
          aspernatur tempora sint laudantium, dicta nisi repudiandae labore ea,
          adipisci eveniet cumque saepe ut nihil molestias ducimus obcaecati ad
          quibusdam commodi provident quae tempore. Vitae quaerat dolores dolore
          non ipsum eligendi a omnis porro architecto. Quae nulla eos aliquid.
        </p>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      <MagicCardDemo />
    </div>
  );
};

export default Service;
