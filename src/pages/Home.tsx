import { Discover } from "../components/Ui/Home/Discover";
import { Review } from "../components/Ui/Home/Review";
import { Hero } from "../components/Ui/Home/Hero";
export const Home = () => {
  return (
    <div>
      <Hero />
      <Discover />
      <Review />
    </div>
  );
};
