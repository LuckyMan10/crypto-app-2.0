import React, { useState, useRef } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { userType } from 'features/authApi/types';
import style from './style.module.scss';
import { useHistory } from 'react-router-dom';
import { RouteNames } from 'routes/enum';
import { useOutsideClick } from 'rooks';
import { logout } from 'features/authApi/thunks';
import { useAppDispatch } from 'app/hooks';
import { useMediaQuery } from 'react-responsive';
import { SelectCurr } from './SelectCurr';

const UserMenu: React.FC<userType> = ({ username }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const ref = useRef(null);
  const [openKeys, setOpenKeys] = useState<Array<string>>([]);
  const isMediumScreen = useMediaQuery({ query: '(max-width: 660px)' });
  const { SubMenu } = Menu;
  const onOpenChange = (keys: Array<string>) => {
    setOpenKeys(keys);
  };
  const closeMenuHandler = () => {
    setOpenKeys([]);
  };
  const watchListOpenHandler = () => {
    closeMenuHandler();
    history.push(RouteNames.WATCHLIST);
  };
  const logoutHandler = () => {
    dispatch(logout());
  };
  useOutsideClick(ref, closeMenuHandler);
  return (
    <div className={style.menuWrapper}>
      <div ref={ref} className={style.menu}>
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
          <SubMenu key="sub1" icon={<UserOutlined />} title={username}>
            <Menu.Item key="3" onClick={watchListOpenHandler}>
              Watch list
            </Menu.Item>
            <Menu.Item key="4" onClick={logoutHandler}>
              logout
            </Menu.Item>
            <Menu.Item key="5">{isMediumScreen && <SelectCurr />}</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
};
export { UserMenu };
