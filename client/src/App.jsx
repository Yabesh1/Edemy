
import { Route, Routes, useMatch } from 'react-router-dom'
import './App.css'
import Home from './Pages/Student/Home'
import CourseList from './Pages/Student/CourseList'
import CourseDetail from './Pages/Student/CourseDetail'
import MyEnroll from './Pages/Student/MyEnroll'
import Player from './Pages/Student/Player'
import Loading from './Components/Student/Loading'
import Educator from './Pages/Educator/Educator'
import Dashboard from './Pages/Educator/Dashboard'
import AddCourse from './Pages/Educator/AddCourse'
import MyCourses from './Pages/Educator/MyCourses'
import StudentEnroll from './Pages/Educator/StudentsEnrolled'
import Navbar from './Components/Student/Navbar'
import "quill/dist/quill.snow.css";

function App() {


  const isEducatorRoute = useMatch('/educator/*')


  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute &&  <Navbar/>}
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetail />} />
        <Route path='/my-enroll' element={<MyEnroll />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path='/educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentEnroll />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
