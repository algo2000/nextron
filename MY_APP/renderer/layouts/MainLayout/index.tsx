import React, { ReactNode, useState } from "react";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";

import ContentsSection from "./ContentsSection";

import { default as S } from "./style";

type props = {
  children: ReactNode;
};

type TMenu = {
  title: string;
  uri: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

const MenuList: TMenu[] = [
  {
    title: "홈",
    uri: "/",
    icon: HomeIcon,
  },
  {
    title: "분석",
    uri: "/analysis",
    icon: AssessmentIcon,
  },
  {
    title: "조회",
    uri: "/lookup",
    icon: SearchIcon,
  },
  {
    title: "관리",
    uri: "/management",
    icon: SettingsIcon,
  },
];

function MainLayout({ children }: props): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {MenuList.map((element, index) => (
          <Link href={element.uri} key={index}>
            <S.MenuListItem button>
              <element.icon color="primary" />
              <ListItemText primary={element.title} color="primary" />
            </S.MenuListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
          <Typography variant="h6">Protec</Typography>
        </Toolbar>
      </AppBar>
      <ContentsSection>{children}</ContentsSection>
    </>
  );
}

export default MainLayout;
