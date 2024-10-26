import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import classes from "./classes.module.css";
import DefaultErrorBoundary from "../../Component/DefaultErrorBoundary";

export function DefaultTemplate() {
  const location = useLocation();
  const route = location.pathname;

  return (
    <Box className={classes.root}>
      <header>
        <Header />
      </header>
      <main>
        <DefaultErrorBoundary keyProp={route}>
          <Outlet />
        </DefaultErrorBoundary>
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
}