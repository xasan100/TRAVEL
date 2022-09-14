import City from "./cites/City";
import Home from "./home/Home";
import Umrah from "./umrah/Umrah";
import Samarqand from "./samarqand/samarqand";
import Attractions from "./attractions/Attractions";
import AboutUs from "./AboutUs/AboutUs";
import Questions from "./Quetions/Questions";
import Contacts from "./contack/Contacts";

export const Main = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/cites",
    page: <City />,
  },
  {
    path: "/umrah",
    page: <Umrah />,
  },
  {
    path: "/detailed",
    page: <Samarqand />,
  },
  {
    path: "/attractions",
    page: <Attractions />,
  },
  {
    path: "/aboutus",
    page: <AboutUs />,
  },
  {
    path: "/questions",
    page: <Questions />,
  },
  {
    path: "/contacts",
    page: <Contacts />,
  },
];
