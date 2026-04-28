import { FC, JSX, PropsWithChildren } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "div";

interface Props {
  type?: HeadingTag;
  className?: string;
}

const Heading: FC<PropsWithChildren<Props>> = ({
  type = "h2",
  children,
  className,
}) => {
  const HeadingTag = type.toLowerCase() as keyof JSX.IntrinsicElements;

  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export default Heading;
