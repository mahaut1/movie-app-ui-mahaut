import { useTranslation } from "react-i18next";
import { Select, MenuItem, Box } from "@mui/material";
import classes from "./classes.module.css";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box className={classes.root}>
      <Select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value as string)}
        className={classes.select}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
        <MenuItem value="de">Deutsch</MenuItem>
        <MenuItem value="es">español</MenuItem>
      </Select>
    </Box>
  );
}