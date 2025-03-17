/* eslint-disable react/prop-types */
import { Title } from "../Title";
const Layout = ({ children }) => {
  return (
    <>
      <header className="w-full h-16 absolute top-0 left-0 bg-amber-900 p-4">
        <Title />
      </header>
      <main className="w-full min-h-screen">{children}</main>
    </>
  );
};

export { Layout };
