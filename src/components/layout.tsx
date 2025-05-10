interface Props {
  children: JSX.Element | JSX.Element[];
}
export const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {children}
    </div>
  );
};
