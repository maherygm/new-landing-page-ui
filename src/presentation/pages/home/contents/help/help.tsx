import DotPattern from "../../../../../@components/magicui/dot-pattern";
import { cn } from "../../../../../@lib/utils";
import { AnimatedBeamDemo } from "../../../../customComponents/animatedBeam";
import { SparklesTextDemo } from "../../../../customComponents/sparkleText";

type Props = {};

const Help = (props: Props) => {
  return (
    <div className="relative flex w-[80%] mx-auto py-11">
      <div className=" h-full w-1/2">
        <div className="py-8">
          <SparklesTextDemo text="Friendly Princing" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          praesentium iste adipisci et! Ex, esse incidunt vero ad placeat
          sapiente inventore aperiam impedit, blanditiis voluptatem amet
          excepturi explicabo, molestias nulla molestiae ea enim? Molestiae
          culpa officiis quas ab, suscipit ex?
        </p>
      </div>
      <div className="relative w-1/2">
        <AnimatedBeamDemo />
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
};

export default Help;
