import { Layout } from "antd";
import HeaderBlogs from "components/Header";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

export const MainLayout = () => {
  return (
    <div className="App">
      <Header>
        <HeaderBlogs />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};
