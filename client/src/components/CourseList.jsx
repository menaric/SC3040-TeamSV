import { Box, Typography, TextField, CircularProgress } from "@mui/material";
import CourseInfo from "./CourseInfo.jsx";
import { useEffect, useState } from "react";

const CourseList = () => {
  const [courses, setCourses] = useState([])
  const [search, setSearch] = useState("") // Add search state
  const [isLoading, setIsLoading] = useState(false)

  const getAllCourses = async () => {
      const response = await fetch(
        `http://localhost:3001/course/`,
        {
          method: "GET"
        }
      )
  
      const data = await response.json()
      return data
    }

  useEffect(() => {
    setIsLoading(true)
    getAllCourses().then((data) => {
      setCourses(data)
      setIsLoading(false)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  const courseComponent = courses.map((courses) => (
    <CourseInfo
      key = {courses._id}
      id = {courses._id}
      courseCode = {courses.courseCode}
      courseName = {courses.courseName}
    />
  ))
    

  return (
    <Box justifyContent="center" alignItems="center">
      <TextField
        label="Search Courses"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: "1rem", width: "100%" }}
      />
      {isLoading ? 
        <Box 
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress /> 
        </Box>
        : <Box display="flex" flexDirection="column" gap="1.5rem">
        {courseComponent
          .filter(
            (course) =>
              course.props.courseCode
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              course.props.courseName.toLowerCase().includes(search.toLowerCase())
          )
          .map((filteredCourse) => filteredCourse)}
      </Box>
      }
    </Box>
  )
}

export default CourseList