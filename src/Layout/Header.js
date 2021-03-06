import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles({
  typographyStyles: {
    flex: 1,
  },
  appbarStyle: {
    backgroundColor: "#2292a4",
    color: "white",
  },
});
function Header() {
  const classes = useStyle();
  const handleClick = () => {
    window.location.href = "https://wa.link/sjz6ar";
  };

  return (
    <AppBar position="fixed" className={classes.appbarStyle}>
      <Toolbar>
        <Typography variant="h6" className={classes.typographyStyles}>
          Anas Vakyathodi
        </Typography>
        <IconButton onClick={handleClick} className={classes.appbarStyle}>
          <WhatsAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
