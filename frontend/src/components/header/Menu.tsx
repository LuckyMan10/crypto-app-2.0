import React, { useState, useRef } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { userType } from 'features/authApi/types';
import style from './style.module.scss';
import { useHistory } from 'react-router-dom';
import { RouteNames } from 'routes/enum';
import { useOutsideClick } from 'rooks';

const UserMenu: React.FC<userType> = ({ username }) => {
  const history = useHistory();
  const ref = useRef(null);
  const [openKeys, setOpenKeys] = useState<Array<string>>([]);
  const { SubMenu } = Menu;
  const onOpenChange = (keys: Array<string>) => {
    setOpenKeys(keys);
  };
  const watchListOpenHandler = () => {
    history.push(RouteNames.WATCHLIST);
  };
  const closeMenuHandler = () => {
    setOpenKeys([]);
  };
  useOutsideClick(ref, closeMenuHandler);
  return (
    <div className={style.menuWrapper}>
      <div ref={ref} className={style.menu}>
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
          <SubMenu key="sub1" icon={<UserOutlined />} title={username}>
            <SubMenu key="sub4" title="Account info">
              <Menu.Item key="7">email: -</Menu.Item>
              <Menu.Item key="8">name: -</Menu.Item>
            </SubMenu>
            <Menu.Item onClick={watchListOpenHandler} key="9">
              Watch list
            </Menu.Item>
            <Menu.Item key="10">logout</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
};
export { UserMenu };
