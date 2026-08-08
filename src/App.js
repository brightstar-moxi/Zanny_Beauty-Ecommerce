//import logo from './logo.svg';
import './App.css';
import React,{ Suspense} from "react";
import { Route,Routes } from 'react-router';



const Home = React.lazy(() =>import ("./collection/Home"))
const Produce = React.lazy(() =>import('./collection/Produce'));
const Blog = React.lazy(() =>import('./collection/Blog'));
const About = React.lazy(() =>import('./collection/About'));
const Portfolio = React.lazy(() =>import('./collection/Portfolio'));
const Contact = React.lazy(() =>import('./collection/Contact'));
const Nomatch = React.lazy(() =>import('./collection/Nomatch'));

function App() {
  return (
<>

<Suspense fallback ={<div className="text-white">Loading... please wait</div>}>
<Routes>
  <Route>
    <Route path="/" element={<Home/>} />
    <Route path="produce" element={<Produce/>} />
    <Route path="blog" element={<Blog/>} />
    <Route path="about" element={<About/>} />
    <Route path="portfolio" element={<Portfolio/>} />
    <Route path="contact" element={<Contact/>} />
    <Route path="*" element={<Nomatch/>} />
  </Route>
  </Routes>
  </Suspense>
</>
  );
}

export default App;
