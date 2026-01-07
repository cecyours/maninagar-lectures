import './App.css'
import Button from './components/Button'
import InputWithArgument from './components/InputWithArgument'
import KeyBord from './components/KeyBord'
import Student from './components/Student'
import StudentList from './components/StudentList'
import TypingPlayground from './components/TypingPlayground'

function App() {

  const Students = [
    { roll:1, name: "Tanvi", course: "MERN Stack"},
    { roll:2, name: "Rosewin", course: "MERN Stack"},
    { roll:3, name: "Raju", course: "Full Stack"},
    { roll:4, name: "Rajesh", course: "Full Stack"},
    { roll:5, name: "Rajendra", course: "MERN Stack"},
    { roll:6, name: "Rajju", course: "MERN Stack"}
  ]


  return (
    <>
      <div>

        {/* <Student stuRoll={67} stuName={'Rosewin'} /> */}

        {/* <Student stuRoll={56} stuName={'Tanvi'} /> */}

        {/* <Student  />  */}

        {/* <StudentList students={Students} /> */}

        {/* <Button /> */}

        {/* <KeyBord /> */}

        <InputWithArgument />

        <TypingPlayground />
      </div>
    </>
  )
}

export default App
