import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PickupNotification from "@/components/PickupNotification";

import { contentData } from "@/constants/Content";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <PickupNotification />
      <main className="w-full flex flex-col gap-2 mb-2">
        {contentData.map((content, index) => {
          if ("content" in content) {
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-2 sm:px-2"
              >
                {content.content.map((banner, index) => (
                  <Banner key={index} {...banner} />
                ))}
              </div>
            );
          }

          return <Banner key={index} {...content} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
