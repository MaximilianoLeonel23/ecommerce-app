import { Outlet } from "react-router-dom";
import MainHeader from "./../organisms/MainHeader";
import MainMenu from "./../molecules/header/MainMenu";
const MainPage = () => {
  return (
    <div>
      <MainHeader>
        <MainMenu />
      </MainHeader>
      <div className="pt-16 container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
