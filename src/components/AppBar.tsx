import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuComponent from "./MenuComponent.tsx";
import "./appBar.scss";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({
  home,
  className1,
  href1,
  titleLanguage1,
  className2,
  href2,
  titleLanguage2,
  to1,
  to2,
  to3,
  to4,
  to5,
  to6,
  to7,
  to8,
  to9,
  to10,
  to11,
  to12,
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  name7,
  name8,
  name9,
  name10,
  name11,
  name12,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Виконано пошук:", searchQuery);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="header">
          <div className="menu">
            <IconButton
              className="menu-btn"
              aria-label="open drawer"
              onClick={handleMenuOpen}
            ></IconButton>

            <Box className="menu-logo">
              <Typography
                variant="h6"
                noWrap
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Front-End
              </Typography>
              <Link className="menu-logo-logoLink" to={home}></Link>
            </Box>
          </div>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={handleSearchSubmit}>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
          </Search>
        </Toolbar>
      </AppBar>

      {isMenuOpen && (
        <MenuComponent
          className1={className1}
          href1={href1}
          titleLanguage1={titleLanguage1}
          className2={className2}
          href2={href2}
          titleLanguage2={titleLanguage2}
          to1={to1}
          to2={to2}
          to3={to3}
          to4={to4}
          to5={to5}
          to6={to6}
          to7={to7}
          to8={to8}
          to9={to9}
          to10={to10}
          to11={to11}
          to12={to12}
          name1={name1}
          name2={name2}
          name3={name3}
          name4={name4}
          name5={name5}
          name6={name6}
          name7={name7}
          name8={name8}
          name9={name9}
          name10={name10}
          name11={name11}
          name12={name12}
          onClose={handleMenuClose}
        />
      )}
    </Box>
  );
}
