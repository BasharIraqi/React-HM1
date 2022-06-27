import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StudentListComp from './Components/StudenListComp';
import YoutubeVideoListCopm from './Components/YoutubeVideoListCopm';



export default function GetYoutubeList()
{
  const list=[
  {title: "Video 1", url: "https://www.youtube.com/embed/0TJG4gO1U7o",width:560, height:315},
  {title: "Video 2", url: "https://www.youtube.com/embed/cTXLxXj88kw",width:560, height:315},
  {title: "Video 3", url: "https://www.youtube.com/embed/BGkL2Pq-g3A",width:560, height:315},
  {title: "Video 4", url: "https://www.youtube.com/embed/Tz4Fq1XV8PU",width:560, height:315},

  ];
  return(
      <YoutubeVideoListCopm list={list} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <StudentListComp />
  <GetYoutubeList />
  </>
);