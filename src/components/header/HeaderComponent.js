import React, { useContext } from "react";
import { string } from "prop-types";
import { useHistory } from "react-router-dom";
import { Row } from "simple-flexbox";
// import { createUseStyles, useTheme } from "react-jss";
import { SidebarContext } from "../../hooks/useSidebar";
import SLUGS from "../../resources/slugs";
import { IconBell, IconSearch } from "../../assets/icons";
import DropdownComponent from "../../components/dropdown";

import styled from "styled-components";

// redux
import { useSelector } from "react-redux";

const Container = styled(Row)`
  height: 40px;
`;

const IconStyles = styled.div`
  cursor: pointer;
  margin-left: 25px;
  @media (max-width: 768px) {
    margin-left: 12px;
  }
`;

const Separator = styled.div`
  border-left: 1px solid #dfe0eb;
  margin-left: 32px;
  margin-right: 32px;
  height: 32px;
  width: 2px;
  @media (max-width: 768px) {
    margin-left: 14px;
    margin-right: 0;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;

  @media (max-width: 1080px) {
    margin-left: 50px;
  }
  @media (max-width: 468px) {
    font-size: 20px;
  }
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-align: right;
  @media (max-width: 768px) {
    display: none;
  }
`;

// const Avatar = styled.img`
//   height: 35px;
//   width: 35px;
//   min-width: 35px;
//   border-radius: 50px;
//   margin-left: 14px;
//   border: 1px solid #dfe0eb;
//   @media (max-width: 768px) {
//     margin-left: 14px;
//   }
// `;

const Avatar2 = styled.div`
  height: 35px;
  width: 35px;
  background-color: #ff8c94;
  min-width: 35px;
  border-radius: 50px;
  margin-left: 14px;
  border: 1px solid #dfe0eb;
  @media (max-width: 768px) {
    margin-left: 14px;
  }
`;

function HeaderComponent() {
  const { push } = useHistory();
  const { currentItem } = useContext(SidebarContext);

  let title;

  const user = useSelector((state) => state.user);

  switch (true) {
    case currentItem === SLUGS.dashboard:
      title = "Dashboard";
      break;
    case [SLUGS.overview, SLUGS.overviewTwo, SLUGS.overviewThree].includes(
      currentItem
    ):
      title = "Overview";
      break;
    case currentItem === SLUGS.tickets:
      title = "Tickets";
      break;
    case [SLUGS.ideas, SLUGS.ideasTwo, SLUGS.ideasThree].includes(currentItem):
      title = "Ideas";
      break;
    case currentItem === SLUGS.contacts:
      title = "Contacts";
      break;
    case currentItem === SLUGS.agents:
      title = "Agents";
      break;
    case currentItem === SLUGS.articles:
      title = "Articles";
      break;
    case currentItem === SLUGS.subscription:
      title = "Subscription";
      break;
    case currentItem === SLUGS.settings:
      title = "Settings";
      break;
    case currentItem === SLUGS.componentsList:
      title = "Components List";
      break;
    case currentItem === SLUGS.profile:
      title = "Profile";
      break;
    case currentItem === SLUGS.curriculum:
      title = "Curriculum";
      break;
    case currentItem === SLUGS.explore:
      title = "Explore";
      break;
    case currentItem === SLUGS.messages:
      title = "Messages";
      break;
    default:
      title = "";
  }

  function onSettingsClick() {
    push(SLUGS.settings);
  }

  return (
    <Container vertical="center" horizontal="space-between">
      <Title>{title}</Title>
      <Row vertical="center">
        <IconStyles>
          <IconSearch />
        </IconStyles>
        <IconStyles>
          <DropdownComponent
            // Have a few different icon bells here
            label={<IconBell />}
            options={[
              {
                label: "Notification #1",
                onClick: () => console.log("Notification #1"),
              },
              {
                label: "Notification #2",
                onClick: () => console.log("Notification #2"),
              },
              {
                label: "Notification #3",
                onClick: () => console.log("Notification #3"),
              },
              {
                label: "Notification #4",
                onClick: () => console.log("Notification #4"),
              },
            ]}
            position={{
              top: 42,
              right: -14,
            }}
          />
        </IconStyles>
        <Separator></Separator>
        <DropdownComponent
          label={
            <>
              <Name>{user.name}</Name>
              {/* <Avatar
                // Insert link to the user image
                src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4"
                alt="avatar"
                // className={classes.avatar}
              /> */}
              <Avatar2>A</Avatar2>
            </>
          }
          options={[
            {
              label: "Settings",
              onClick: onSettingsClick,
            },
            {
              label: "Logout",
              onClick: () => console.log("logout"),
            },
          ]}
          position={{
            top: 52,
            right: -6,
          }}
        />
      </Row>
    </Container>
  );
}

HeaderComponent.propTypes = {
  title: string,
};

export default HeaderComponent;
