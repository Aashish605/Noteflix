import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from "./Home/Home.jsx";
import Notes from "./Notes/Notes.jsx";
import Pastpapers from "./PastPaper/Past.jsx";
import Aboutus from "./AboutUS/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Syllabus from "./Syllabus/Syllabus.jsx";
import Syllabus_list from './Components/Syllabus_list.jsx';
import Course from './Components/Course.jsx';
import Pdf from './Components/Pdf.jsx';
import PastTemp from "./Components/PastTemp.jsx"
import Paper_pdf from './Components/Paper_pdf.jsx';
import Syllabus_pdf from './Components/Syllabus_pdf.jsx';
import Serach from './Components/Serach.jsx';
import Error from './Components/Error.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="notes" element={<Notes />} />
        <Route path="pastpapers" element={<Pastpapers />} />
        <Route path="pastpapers/:course" element={<PastTemp/>} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="syllabus" element={<Syllabus />} />
        <Route path="syllabus/:course" element={<Syllabus_list />} />
        <Route path="contact" element={<Contact />} />
        <Route path="notes/:course" element={<Course />} />
        <Route path="notes/:sem/:course/:subj/:link" element={<Pdf />} />
        <Route path="pastpapers/:sem/:course/:subj/:link" element={<Paper_pdf />} />
        <Route path="Syllabus/:sem/:course/:subj/:link" element={<Syllabus_pdf/>} />
        <Route path='search/:data' element={<Serach/>} />
        <Route path='maintenance' element={<Error/>} />
      </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
