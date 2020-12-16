import React from "react";
import { Column } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import styled from "styled-components";

const CardContainer = styled(Column)`
  background-color: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 4;
  cursor: pointer;
  max-width: 32%;
  padding: 16px 32px 16px 32px;
  &:hover {
    border-color: #3751ff;
    &:nth-child(n) > span {
      color: #3751ff;
    }
  }
  @media (max-width: 768px) {
    max-width: none;
    margin: 10px;
  }
`;

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: "#FFFFFF",
    border: `1px solid ${theme.color.lightGrayishBlue2}`,
    borderRadius: 4,
    cursor: "pointer",
    maxWidth: 350,
    padding: "16px 32px 16px 32px",
    "&:hover": {
      borderColor: theme.color.lightBlue,
      "&:nth-child(n) > span": {
        color: theme.color.lightBlue,
      },
    },
  },
  title: {
    ...theme.typography.cardTitle,
    color: theme.color.grayishBlue2,
    marginBottom: 12,
    minWidth: 102,
    textAlign: "center",
  },
  value: {
    color: theme.color.veryDarkGrayishBlue,
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: "1px",
    lineHeight: "50px",
    textAlign: "center",
  },
}));

function MiniCardComponent({ className = "", title, value }) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  // const composedClassName = [classes.container, className].join(" ");
  return (
    <CardContainer
      flexGrow={1}
      // className={composedClassName}
      horizontal="center"
      vertical="center"
    >
      <span className={classes.title}>{title}</span>
      <span className={classes.value}>{value}</span>
    </CardContainer>
  );
}

export default MiniCardComponent;
