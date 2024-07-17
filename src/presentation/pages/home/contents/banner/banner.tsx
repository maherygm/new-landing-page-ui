import { TiPen } from "react-icons/ti";
import GridPattern from "../../../../../@components/magicui/grid-pattern";
import TypingAnimation from "../../../../../@components/magicui/typing-animation";
import { cn } from "../../../../../@lib/utils";
import { BoxRevealDemo } from "../../../../customComponents/boxReveal";
import { IconCloudDemo } from "../../../../customComponents/iconCloud";

const Banner = () => {
  return (
    <div className=" h-full flex flex-col items-center">
      <div className="relative p-10 mt-20 w-[80%] flex justify-between  mx-auto">
        <BoxRevealDemo />
        <IconCloudDemo />
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      <div className="w-[80%] mx-auto  px-10">
        <div className="bg-white dark:bg-zinc-900 py-9 px-5 rounded-xl ">
          <h1 className="flex gap-2">
            Trusted by <TiPen />
          </h1>
          <TypingAnimation
            className="flex text-black dark:text-white"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi a
            aspernatur tempora sint laudantium, dicta nisi repudiandae labore ea,
            adipisci eveniet cumque saepe ut nihil molestias ducimus obcaecati ad
            quibusdam commodi provident quae tempore. Vitae quaerat dolores dolore
            non ipsum eligendi a omnis porro architecto. Quae nulla eos aliquid"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
