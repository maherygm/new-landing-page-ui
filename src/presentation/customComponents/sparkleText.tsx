import SparklesText from "@/@components/magicui/sparkles-text";

type props = {
  text?: string;
};

export function SparklesTextDemo({ text }: props) {
  return <SparklesText text={text} />;
}
