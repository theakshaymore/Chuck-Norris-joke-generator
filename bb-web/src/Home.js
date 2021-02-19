import { Container } from "@material-ui/core";
import Character from "./Character";
import { motion } from "framer";

const Home = () => {
  return (
    <div className="Home">
      <Container maxWidth="sm">
        <motion.div animate={{}} className="Home__character">
          <Character />
        </motion.div>
      </Container>
    </div>
  );
};

export default Home;
