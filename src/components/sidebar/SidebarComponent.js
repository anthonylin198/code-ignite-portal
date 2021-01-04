import React from "react";
import { useHistory } from "react-router-dom";
import SLUGS from "../../resources/slugs";
import {
  IconLogout,
  IconSettings,
  IconSubscription,
  IconAgents,
  IconOverview,
  IconContacts,
  IconTickets,
} from "../../assets/icons";
import { convertSlugToUrl } from "../../resources/utilities";
import LogoComponent from "./LogoComponent";
import Menu from "./MenuComponent";
import MenuItem from "./MenuItemComponent";

// redux
import { useDispatch } from "react-redux";
import { userReducer } from "../../redux/reducers/user";

// styled components
import styled from "styled-components";

const Seperator = styled.div`
  border-top: 2px solid #f7f8fc;
  margin-top: 16px;
  margin-bottom: 16px;
  opacity: 0.06;
`;

function SidebarComponent() {
  const { push } = useHistory();
  const isMobile = window.innerWidth <= 1080;

  const { logout } = userReducer.actions;
  const dispatch = useDispatch();

  async function logoutUser() {
    // destroy the auth token
    dispatch(logout());
    push(SLUGS.signin);
  }

  function onClick(slug, parameters = {}) {
    push(convertSlugToUrl(slug, parameters));
  }

  return (
    <Menu isMobile={isMobile}>
      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <LogoComponent />
      </div>
      <MenuItem
        id={SLUGS.profile}
        title="Profile"
        icon={IconAgents}
        onClick={() => onClick(SLUGS.profile)}
      />
      <MenuItem
        id={SLUGS.dashboard}
        title="Dashboard"
        icon={IconOverview}
        onClick={() => onClick(SLUGS.dashboard)}
      />
      <MenuItem
        id={SLUGS.curriculum}
        title="Curriculum"
        icon={IconSubscription}
        onClick={() => onClick(SLUGS.curriculum)}
      />
      <MenuItem
        id={SLUGS.explore}
        title="Explore"
        icon={IconContacts}
        onClick={() => onClick(SLUGS.explore)}
      />
      <Seperator></Seperator>

      <MenuItem
        id={SLUGS.messages}
        title="Messages"
        icon={IconTickets}
        onClick={() => onClick(SLUGS.messages)}
      />

      <MenuItem
        id={SLUGS.settings}
        title="Settings"
        icon={IconSettings}
        onClick={() => onClick(SLUGS.settings)}
      />

      <MenuItem
        id="logout"
        title="Logout"
        icon={IconLogout}
        onClick={logoutUser}
      />
    </Menu>
  );
}

export default SidebarComponent;
