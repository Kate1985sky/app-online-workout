import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <div className="position-absolute w-100 top-0 z-2">
      <Navigation />
    </div>
  );
};
