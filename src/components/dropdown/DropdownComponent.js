import React, { useState } from "react";
import {
  arrayOf,
  element,
  func,
  number,
  oneOfType,
  shape,
  string,
} from "prop-types";
import { Column } from "simple-flexbox";
// import { createUseStyles, useTheme } from "react-jss";
import { IconArrowUp } from "../../assets/icons";

import styled from "styled-components";

const DropdownColumnContainer = styled(Column)`
  position: relative;
`;

const DropdownButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  outline: none;
`;

// you changed a little bit for styled
const DropdownItemsContainer = styled(Column)`
  background: white;
  border: 1px solid #dfe0eb;
  border-radius: 5px;
  min-width: 170px;
  padding: 0;
  position: absolute;
  width: 100%;
  /* & button:first-of-type:hover div > svg > path: {
    fill: "#DDE2FF";
  } */
  top: ${({ position }) => {
    return position.top + "px";
  }};
  right: ${({ position }) => position.right + "px"};
  bottom: ${({ position }) => position.bottom}+ "px";
  left: ${({ position }) => position.left + "px"};
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: -19px;
  right: 15px;
`;

const DropdownItemButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 16;
  outline: none;
  padding: 10px 10px;

  &:hover {
    background: #dde2ff;
  }
`;

// const useStyles = createUseStyles((theme) => ({
//   arrowContainer: {
//     position: "absolute",
//     top: -19,
//     right: 15,
//   },
//   dropdownButton: {
//     alignItems: "center",
//     background: "transparent",
//     border: "none",
//     cursor: "pointer",
//     display: "flex",
//     padding: 0,
//     outline: "none",
//   },
//   dropdownContainer: {
//     position: "relative",
//   },
//   dropdownItemsContainer: {
//     background: "white",
//     border: `1px solid "#DFE0EB"`,
//     borderRadius: 5,
//     minWidth: 170,
//     padding: 0,
//     position: "absolute",
//     width: "100%",
//     top: ({ position }) => position.top,
//     right: ({ position }) => position.right,
//     bottom: ({ position }) => position.bottom,
//     left: ({ position }) => position.left,
//     "& button:first-of-type:hover div > svg > path": {
//       fill: "#DDE2FF",
//     },
//   },
//   dropdownItem: {
//     cursor: "pointer",
//     background: "transparent",
//     border: "none",
//     fontSize: 16,
//     outline: "none",
//     padding: "10px 10px",
//     "&:hover": {
//       background: "#DDE2FF",
//     },
//     "&:after": {
//       content: '" "',
//       display: "block",
//       position: "relative",
//       bottom: -10,
//       width: "100%",
//       height: 1,
//       background: "#DDE2FF",
//     },
//     "&:last-child:after": {
//       content: "",
//       display: "none",
//     },
//   },
// }));

function DropdownComponent({ label, options, position }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  // const theme = useTheme();

  function onDropdownClick() {
    setUserMenuOpen((prev) => !prev);
  }

  function onItemClick(onClick) {
    setUserMenuOpen(false);
    onClick && onClick();
  }

  return (
    <DropdownColumnContainer>
      <DropdownButton onClick={onDropdownClick}>{label}</DropdownButton>
      {userMenuOpen && (
        <DropdownItemsContainer position={position}>
          {options.map((option, index) => (
            <DropdownItemButton
              key={`option-${index}`}
              // className={classes.dropdownItem}
              onClick={() => onItemClick(option.onClick)}
            >
              {option.label}
              {index === 0 && (
                <ArrowContainer>
                  <IconArrowUp />
                </ArrowContainer>
              )}
            </DropdownItemButton>
          ))}
        </DropdownItemsContainer>
      )}
    </DropdownColumnContainer>
  );
}

DropdownComponent.propTypes = {
  label: oneOfType([string, element]),
  options: arrayOf(
    shape({
      label: oneOfType([string, arrayOf(element)]),
      onClick: func,
    })
  ),
  position: shape({
    top: number,
    right: number,
    bottom: number,
    left: number,
  }),
};

DropdownComponent.defaultProps = {
  position: {
    top: 52,
    right: -6,
  },
};

export default DropdownComponent;
