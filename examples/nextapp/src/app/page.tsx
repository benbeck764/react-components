import Stack from "@mui/material/Stack";
import Buttons from "../components/Buttons";
import Grids from "../components/Grids";
import Menus from "../components/Menus";
import Typographies from "../components/Typographies";

const Home = () => {
  return (
    <Stack direction="column" gap={5}>
      <Typographies />
      <Buttons />
      <Grids />
      <Menus />
    </Stack>
  );
};

export default Home;
