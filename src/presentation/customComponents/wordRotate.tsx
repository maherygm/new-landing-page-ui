import WordRotate from "@/@components/magicui/word-rotate";

type props = {
  text: string[];
};

export function WordRotateDemo({ text }: props) {
  return (
    <WordRotate
      className="text-7xl font-bold text-black dark:text-white"
      words={text}
    />
  );
}
