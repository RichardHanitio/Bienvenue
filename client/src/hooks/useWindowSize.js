import {useState, useEffect} from "react";
import {useTheme} from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

const useWindowSize = () => {
  const [isDesktopDisplay, setIsDesktopDisplay] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setIsDesktopDisplay(matches)
  }, [matches])

  return isDesktopDisplay;
}

export default useWindowSize;