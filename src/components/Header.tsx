import { Menu } from "antd";
import { Link } from "react-router-dom";
const AppHeader = () => {
  return (
    <div className="header">
      <Menu mode="horizontal"  items={[
        {
          label: <Link to={"/popular"}>Popular</Link>,
          key: "popular",
        },
        {
          label: <Link to={"/top-movies"}>Top Movies</Link>,
          key: "top-movies",
        },
        {
          label: <Link to={"/upcoming"}>UpComing</Link>,
          key: "upcoming",
        }
      ]}>

      </Menu>
    </div>
  );
};

export default AppHeader;
