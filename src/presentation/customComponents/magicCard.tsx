import { MagicCard } from "@/@components/magicui/magic-card";

export function MagicCardDemo() {
  const IsDark = getTheme() === "light" ? true : false;

  function getTheme(): string | void {
    return localStorage.getItem("theme");
  }

  return (
    <div
      className={
        "flex h-[500px] w-full flex-col justify-around lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center  whitespace-nowrap text-4xl w-96"
        gradientColor={!IsDark ? "#262626" : "#3f3f3f10"}
      >
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center  whitespace-nowrap text-4xl w-96"
        gradientColor={!IsDark ? "#262626" : "#3f3f3f10"}
      >
        Card
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center  whitespace-nowrap text-4xl w-96"
        gradientColor={!IsDark ? "#262626" : "#3f3f3f10"}
      >
        Card
      </MagicCard>
    </div>
  );
}
