

import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/landingpage/landingPage';
import AboutUs from "./pages/aboutus/aboutUs";
import HomePage from "./pages/homepage/homePage";
import ContactUs from "./pages/contactus/contactUs";
import Category_PhotosPage from "./pages/category_photospage/category_PhotosPage";
import AdminHomePage from "./dashboard/pages/adminhomepage/adminHomePage";
import Login from "./dashboard/pages/login/login";
import AdminInfoPage from "./dashboard/pages/admininfopage/adminInfoPage";
import PhotoGalleryPage from "./dashboard/pages/photogallerypage/photoGalleryPage";
import CategoryGalleryPage from "./dashboard/pages/categorygallerypage/categoryGalleryPage"
import PhotoDetailPage from "./dashboard/pages/photodetailpage/photoDetailPage"
import CategoryDetailPage from "./dashboard/pages/categorydetailpage/categoryDetailPage"
import PhotoDetails from "./components/photodetails/PhotoDetails"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route component={LandingPage} path="/" exact />
          <Route component={AboutUs} path="/aboutus" />
          <Route component={HomePage} path="/homepage" />
          <Route component={ContactUs} path="/contactus" />
          <Route component={Category_PhotosPage} path="/category_photospage/:id" />
          <Route component={Login} path="/testlogin" />
          <Route component={AdminHomePage} path="/adminhome" />
          <Route component={AdminInfoPage} path="/admininfo" />
          <Route component={PhotoGalleryPage} path="/photogallerypage" />
          <Route component={CategoryGalleryPage} path="/categorygallerypage" />
          <Route component={PhotoDetailPage} path="/photodetailpage/:id" />
          <Route component={PhotoDetailPage} path="/photodetailpage" />
          <Route component={CategoryDetailPage} path="/categorydetailpage/:id" />
          <Route component={CategoryDetailPage} path="/categorydetailpage" />
          <Route component={PhotoDetails} path="/photodetails/:id" />
        </Switch>
      </BrowserRouter>

      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
