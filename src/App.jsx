import React from 'react'
import { Button, Typography } from '@mui/material'
import Header from './components/Header'
import './App.css'
import CourseCard from './components/CourseCard'

const courseList =[
  {
    image: "https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png",
    heading: "Fullstack MERN Engineering",
    description: "The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript."
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFT7Xo3eDDEVih0-1gh2eBTeZgupH1sbVM_w&s",
    heading: "Java Backend Engineering",
    description: "Spring is a lightweight and popular open-source Java-based framework developed by Rod Johnson in 2003. It is used to develop enterprise-level applications. It provides support to many other frameworks such as Hibernate, Tapestry, EJB, JSF, Struts, etc,"
  },
  {
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
    heading: "Data Analytics",
    description: "In computing, data is information that has been translated into a form that is efficient for movement or processing. "
  },
]

const App = () => {
  return (
   <div>
    <Header />
    <div style={{marginTop:'30px'}}>
        <Typography variant='h3' align='center'>
          Welcome to Acciojob
        </Typography>
        <Typography variant='body2' align='center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate reiciendis rerum, laborum obcaecati, pariatur commodi quaerat asperiores dicta enim similique suscipit cumque totam quis. Molestias vitae ipsum sequi corrupti voluptatem.
        </Typography>
    </div>
    <Typography variant='h4' align='center' marginTop='30px'>
        Our amazing courses
    </Typography>
    <div style={{
      display:'flex', 
      gap:'16px',
      flexWrap:'wrap',
      justifyContent:'center', 
      marginTop:'20px', 
      paddingBottom:'100px'
      }}>
      
      {courseList.map((course, index) => <CourseCard key={index} image={course.image} description={course.description} heading={course.heading} />)}
    </div>
      <footer>
        <Typography align='center'>
          Made with by S MD Usman
        </Typography>
      </footer>
   </div>
  )
}
export default App