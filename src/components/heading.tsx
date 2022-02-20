interface HeadingProps {
  children: React.ReactNode;
}
export const Heading = (props: HeadingProps) => {
  return <span>{props.children}</span>;
};
