import { Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
// import Services from "./Component/Services/Services";
// import Training from "./Component/Training/Training";
import NavBar from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import DigitalMarketing from "./Pages2/DigitalMarketing";
import WebsiteDes from "./Pages2/WebsiteDes";
import GraphicDes from "./Pages2/GraphicDes";
import StoreMigration from "./Pages2/StoreMigration";
import BecomeDev from "./Page3/BecomeDev";
import FullDigitalMar from "./Page3/FullDigitalMar";
import Seo from "./Page3/Seo";
import Blogss from "./Component/Blogss/Blogss";
// import BlogssDetail from "./Component/Blogss/BlogssDetail";
import BlogDetail from "./Component/BlogDetail/BlogDetail";
import BlogDetail2 from "./Component/BlogDetail/BlogDetail2";
import BlogDetail3 from "./Component/BlogDetail/BlogDetail3";
import BlogDetail4 from "./Component/BlogDetail/BlogDetail4";
import WhatsAppButton from "./WhatsAppButton/WhatsAppButton";
import AppDevlopment from "./Component/Services/AppDevlopment";
import EmailMarketing from "./Component/Services/EmailMarketing";
import Googleads from "./Component/Services/Googleads";
import InfluencerMarketing from "./Component/Services/InfluencerMarketing";
import Pcc from "./Component/Services/Pcc";
import SocialMediaMarketing from "./Component/Services/SocialMediaMarketing";
import BecomeAppDeveloper from "./Trainingg/BecomeAppDeveloper";
import BecomeWebDeveloper from "./Trainingg/BecomeWebDeveloper";
import BecomeGraphicDesigner from "./Trainingg/BecomeGraphicDesigner";
import SearchEngineOptimization from "./Trainingg/SearchEngineOptimization";
import FullDigitalMarketing from "./Trainingg/FullDigitalMarketing";
import Footer from "./Pages/Footer";




function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/training" element={<Training />} /> */}
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/website-designing" element={<WebsiteDes />} />
        <Route path="/graphic-designing" element={<GraphicDes />} />
        <Route path="/store-migration" element={<StoreMigration />} />
        <Route path="/become-dev" element={<BecomeDev />} />
        <Route path="/full-digital" element={<FullDigitalMar />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/blogss" element={<Blogss />} />
        <Route path="/blog-detail-1" element={<BlogDetail />} />
        <Route path="/blog-detail-2" element={<BlogDetail2 />} />
        <Route path="/blog-detail-3" element={<BlogDetail3 />} />
        <Route path="/blog-detail-4" element={<BlogDetail4 />} />
        <Route path="/whatsappbutton" element={<WhatsAppButton />} />
        <Route path="/appdevlopment" element={<AppDevlopment />} />
        <Route path="/influencermarketing" element={<InfluencerMarketing />} />
        <Route path="/emailmarketing" element={<EmailMarketing />} />
        <Route path="/googleads" element={<Googleads />} />
        <Route path="/pcc" element={<Pcc />} />
        <Route path="/socialmediamarketing" element={<SocialMediaMarketing />} />
        <Route path="/becomeappdeveloper" element={<BecomeAppDeveloper/>} />
        <Route path="/becomewebdeveloper" element={< BecomeWebDeveloper/>} />
        <Route path="/becomegraphicdesigner" element={<BecomeGraphicDesigner />} />
        <Route path="/searchengineoptimization" element={< SearchEngineOptimization/>} />
        <Route path="/fulldigitalmarketing" element={<FullDigitalMarketing/>} />






      </Routes>
      <Footer/>
    </>
  );
}

export default App;
