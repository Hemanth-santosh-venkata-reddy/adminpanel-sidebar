import { useEffect, useState } from "react";
import "./sidebar.scss";
import { SiCplusplus } from "react-icons/si";
import {
  BsFillCollectionFill,
  BsFillBookmarksFill,
  BsPieChartFill,
  BsPlug,
  BsChevronDown,
} from "react-icons/bs";
import { FcBullish } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
const Sidebar = () => {
  const [categoryActive, setCategoryActive] = useState(false);
  const [postsActive, setPostsActive] = useState(false);
  const [pluginsActive, setPluginsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [acn1, setAcn1] = useState("active"); // assumes link 1 is default active
  const [acn2, setAcn2] = useState("");
  const [acn3, setAcn3] = useState("");
  const [acn4, setAcn4] = useState("");
  const [acn5, setAcn5] = useState("");
  const [acn6, setAcn6] = useState("");
  const startChangeVis = (id) => {
    setAcn1("");
    setAcn2("");
    setAcn3("");
    setAcn4("");
    setAcn5("");
    setAcn6("");
    if (id === "a") setAcn1("active");
    else if (id === "b") setAcn2("active");
    else if (id === "c") setAcn3("active");
    else if (id === "d") setAcn4("active");
    else if (id === "e") setAcn5("active");
    else if (id === "f") setAcn6("active");
  };
  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  function downClick(e) {
    if (e === "category") {
      console.log(1);
      setCategoryActive(!categoryActive);
    } else if (e === "Posts") {
      console.log(2);
      setPostsActive(!postsActive);
    } else if (e === "Plugins") {
      console.log(3);
      setPluginsActive(!pluginsActive);
    }
  }

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 760) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  // create an event listener
  useEffect(() => {
    if (window.innerWidth < 760) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", handleResize);
    // window.addEventListener("onload",handleResize )
  }, []);

  return (
    <div>
      <div className={isMobile ? "sidebar close" : "sidebar"}>
        <div class="logo-details">
          <SiCplusplus className="icon" />
          <span class="logo_name">CodingLab</span>
        </div>
        <ul className="nav-links">
          <li
            onClick={() => {
              startChangeVis("a");
            }}
            className={acn1}
          >
            <a href="#" id="a" href="#">
              <SiCplusplus className="icon" />
              <span className="link_name">Dashboard</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  catergory
                </a>
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              startChangeVis("b");
            }}
            // className={acn2}
            className={categoryActive && acn2 ? "open active" : ""}
          >
            <div className="icon-link">
              <a href="#">
                <BsFillCollectionFill className="icon" />
                <span className="link_name">category</span>
              </a>
              <BsChevronDown
                className={categoryActive ? "rotate" : "arrow"}
                onClick={() => downClick("category")}
              />
            </div>
            <ul className={categoryActive ? " open sub-menu" : "sub-menu "}>
              <li>
                <a href="#">web Design</a>
              </li>
              <li>
                <a href="#">Card Design</a>
              </li>
              <li>
                <a href="#">Login form</a>
              </li>
            </ul>
          </li>
          <li
            id="c"
            href="#"
            onClick={() => {
              startChangeVis("c");
            }}
            // className={acn3}
            className={postsActive && acn3 ? "open active" : ""}
          >
            <div className="icon-link">
              <a href="#">
                <BsFillBookmarksFill className="icon" />
                <span className="link_name">Posts</span>
              </a>
              <BsChevronDown
                className={postsActive ? "rotate" : "arrow"}
                onClick={() => downClick("Posts")}
              />
            </div>
            <ul className={postsActive ? "sub-menu open" : "sub-menu"}>
              <li>
                <a href="#">html&css</a>
              </li>
              <li>
                <a href="#">javascript</a>
              </li>
              <li>
                <a href="#">React js</a>
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              startChangeVis("d");
            }}
            className={acn4}
          >
            <a href="#">
              <BsPieChartFill className="icon" />
              <span className="link_name">Analytics</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              startChangeVis("e");
            }}
            className={acn5}
          >
            <a href="#">
              <FcBullish className="icon" />
              <span className="link_name">chart</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  chart
                </a>
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              startChangeVis("f");
            }}
            className={pluginsActive && acn6 ? "open active" : ""}
          >
            <div className="icon-link">
              <a href="#">
                <BsPlug className="icon" />
                <span className="link_name">Plugins</span>
              </a>
              <BsChevronDown
                className={pluginsActive ? "rotate" : "arrow"}
                onClick={() => downClick("Plugins")}
              />
            </div>
            <ul className={pluginsActive ? "sub-menu" : "sub-menu open"}>
              <li>
                <a href="#">Plugins</a>
              </li>
              <li>
                <a href="#">html&css</a>
              </li>
              <li>
                <a href="#">javascript</a>
              </li>
              <li>
                <a href="#">React js</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <header>
          <h1>
            <span>
              {" "}
              <FaBars className="menu" onClick={handleClick} />
            </span>
            Dashboard
          </h1>
        </header>
        <main>
          <div className="content">
            <h1>aaaaaaaaaaa</h1>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Sidebar;
