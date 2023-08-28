import ShoppingList from "./ShoppingList";
import Newsletter from "./Newsletter";
import MainCarousel from "./MainCarousel";

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Newsletter />
    </div>
  );
}

export default Home;
