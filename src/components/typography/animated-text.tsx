export const AnimatedText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`${className} hover-text`}>{children}</p>;
};
