import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 pt-0">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll">
          {/* Portada */}
          <div className="rounded-2xl mb-4">
            <img
              src="https://assets.xboxservices.com/assets/ee/3e/ee3e94b6-b1d3-4f49-a6fa-e91c8e3cf69a.jpg?n=681554_Sneaky-Slider-1084_1600x675_01.jpg"
              className="w-full h-[500px] object-cover  md:object-top rounded-2xl"
            />
          </div>
          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
            <Card
              img="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
              title="Marvel's Spider-Man"
              category="PS5"
              price="51"
            />
            <Card
              img="https://m.media-amazon.com/images/I/91OWgMrKsQL.jpg"
              title="Little Nightmares II"
              category="PS4"
              price="40"
            />
            <Card
              img="https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDfb8QFD.png"
              title="Ghost of Tsushima"
              category="PS4"
              price="48"
            />
            <Card
              img="https://media.vandal.net/m/82925/call-of-duty-warzone-20203102215835_1.jpg"
              title="Call of Duty: Warzone"
              category="PC"
              price="60"
            />
            <Card
              img="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/07/fc-24-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1"
              title="FC 24"
              category="Xbox Series X"
              price="120"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;