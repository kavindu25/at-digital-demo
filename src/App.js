import CustomButton from "./components/CustomButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import bgImg from "./assets/images/bg.png";
import sectionImgOne from "./assets/images/section-img-1.png";
import sectionImgTwo from "./assets/images/section-img-2.png";


function App() {
  return (
    <div className="">
      <Navbar />
      <section className="position-relative">
        <img
          src={bgImg}
          alt="background img"
          width={1920}
          className="img-fluid "
        />
        <div className="row">
          <div
            className="position-absolute z-10 start-0 top-50  px-4 py-4  mb-5 col-md-6 text-white"
            style={{
              background:
                "linear-gradient(257deg, #1CBDDD 27.86%, #4DCA79 100%)",
            }}
          >
            <h4 className="display-4 pb-3">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </h4>
            <CustomButton title="Get free consultation" />
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={sectionImgOne} alt="section img" />
            </div>
            <div className="col-md-6">
              <div className="row text-start">
                <div className="">
                  <h3 className="text-primary">Web & Mobile App Development</h3>
                  <p>
                    Your web and mobile Apps are pieces of the puzzle to grow
                    your business. We use frameworks which tailor content and
                    engagement methods to respond to different intents shown by
                    your potential customers who interact with your business
                    online.
                  </p>
                  <CustomButton title="LEARN MORE" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-5">
              <img src={sectionImgTwo} alt="section img" />
            </div>
            <div className="col-md-6 order-md-1">
              <div className="row text-start">
                <div className="">
                  <h3 className="text-primary">Digital Strategy Consulting</h3>
                  <p>
                    Your digital strategy should complement the overall
                    marketing strategy of the company. In online marketing, each
                    component will never work in isolation and every business
                    needs a different mix. We provide a clear concept and
                    strategic overview to find the most efficient model for your
                    business.
                  </p>
                  <CustomButton title="LEARN MORE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
