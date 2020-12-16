import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { useHistory } from "react-router-dom";
import SLUGS from "../../resources/slugs";
import {
  IconContacts,
  IconLogout,
  IconSettings,
  IconSubscription,
  IconTickets,
} from "../../assets/icons";
import { convertSlugToUrl } from "../../resources/utilities";
import LogoComponent from "./LogoComponent";
import Menu from "./MenuComponent";
import MenuItem from "./MenuItemComponent";

const useStyles = createUseStyles({
  separator: {
    borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
});

function SidebarComponent() {
  const { push } = useHistory();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const isMobile = window.innerWidth <= 1080;

  async function logout() {
    push(SLUGS.login);
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
        icon={IconSubscription}
        onClick={() => onClick(SLUGS.profile)}
      />
      <MenuItem
        id={SLUGS.dashboard}
        title="Dashboard"
        icon={IconSubscription}
        onClick={() => onClick(SLUGS.dashboard)}
      />
      {/* <MenuItem
        id={SLUGS.overview}
        items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
        title="Overview"
        icon={IconOverview}
      >
        <MenuItem
          id={SLUGS.overview}
          title="Sub Item 1"
          level={2}
          icon={IconAgents}
          onClick={() => onClick(SLUGS.overview)}
        />
        <MenuItem
          id={SLUGS.overviewTwo}
          title="Sub Item 2"
          level={2}
          icon={IconContacts}
          onClick={() => onClick(SLUGS.overviewTwo)}
        />
        <MenuItem
          id={SLUGS.overviewThree}
          title="Sub Item 3"
          level={2}
          icon={IconArticles}
          onClick={() => onClick(SLUGS.overviewThree)}
        />
      </MenuItem> */}
      <MenuItem
        id={SLUGS.componentslist}
        title="ComponentsList"
        icon={IconSubscription}
        onClick={() => onClick(SLUGS.componentsList)}
      />
      <MenuItem
        id={SLUGS.tickets}
        title="Tickets"
        icon={IconTickets}
        onClick={() => onClick(SLUGS.tickets)}
      />

      <MenuItem
        id={SLUGS.contacts}
        title="Contacts"
        icon={IconContacts}
        onClick={() => onClick(SLUGS.contacts)}
      />
      <div className={classes.separator}></div>
      <MenuItem
        id={SLUGS.settings}
        title="Settings"
        icon={IconSettings}
        onClick={() => onClick(SLUGS.settings)}
      />

      <MenuItem id="logout" title="Logout" icon={IconLogout} onClick={logout} />
    </Menu>
  );
}

export default SidebarComponent;
