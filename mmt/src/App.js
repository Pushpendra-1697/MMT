import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./pages/AllRoutes";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
};

export default App;
