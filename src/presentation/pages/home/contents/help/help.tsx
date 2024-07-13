import { AnimatedBeamDemo } from "../../../../customComponents/animatedBeam";
import { SparklesTextDemo } from "../../../../customComponents/sparkleText";

type Props = {};

const Help = (props: Props) => {
  return (
    <div className="flex w-[80%] mx-auto py-11">
      <div className="h-full w-1/2">
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
      <div className="w-1/2">
        <AnimatedBeamDemo />
      </div>
    </div>
  );
};

export default Help;
