import SideBar from "../../components/sidebar/SideBar";
import CategoriesPanel from "../../components/categoriespanel/CategoriesPanel";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import "./homepage.css";
import { useEffect, useState } from "react";


function HomePageDetail(params) {
  const [theabout, setTheabout] = useState(null);


  useEffect(() => {
    // setTimeout(async () => {
    //   const res = await fetch(`//localhost:8000/admininfo/${1}`);

    //   const data = await res.json();
    //   setTheabout(data.result[0]);
    //   console.log(data.result);
    // }, 5000)
    fetch(`//localhost:8000/admininfo/${1}`)
      // fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTheabout(data.result[0]);
      })

  }, [])

  // const aboutTxt = { daniaabout } //+ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // let str = aboutTxt.split(".");
  // let partStr = str[0] + ".";
  const history = useHistory();

  function moreButtonClick() {
    history.push("/aboutus");
  }
  return (
    <div className="aboutUsPart">
      {theabout && <p>{theabout.AboutUs.split(".")[0]} .</p>}
      {!theabout && <p>loading ...</p>}
      <Button className="btn_homep" onClick={moreButtonClick}>More info</Button>

    </div>
  );
}

function HomePage() {
  return (
    <div className="mainPage">

      <CategoriesPanel />

      <div className="downPage">
        <SideBar />
        <HomePageDetail />

      </div>
    </div>
  );
}

export default HomePage;