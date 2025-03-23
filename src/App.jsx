import { useEffect, useState } from 'react'
import './App.css'
import {Student} from "./components/Student";
import { Teacher } from './components/Teacher';

function App() {
  // declaration
  const [unattended, setUnattended] = useState([])
  const [reactjs, setReactjs] = useState([])
  const [tahfidz, setTahfidz] = useState([])
  // lifecycle
  useEffect(() => {
    setUnattended([
      {name: "dimas", index: 0, isTeacher: true},
      {name: "januar", index: 0, isTeacher: true},
      {name: "rofiq", index: 0, isTeacher: true},
      {name: "arafah", index: 0, isTeacher: true},
      {name: "zaidan", index: 0, isTeacher: false},
      {name: "farrel", index: 0, isTeacher: false},
      {name: "zain", index: 0, isTeacher: false},
      {name: "sidiq", index: 0, isTeacher: false},
      {name: "arif", index: 0, isTeacher: false},
    ])
  }, [])// 

  const Join = (name) => {
    const JoinClass = (className) => {
      const person = unattended.find(item => item.name === name)
      if (person) {
        if (className === 'react') {
          setReactjs([...reactjs, person])
        } else if (className === 'tahfidz') {
          setTahfidz([...tahfidz, person])
        }
        setUnattended(unattended.filter(item => item.name !== name))
      }
    }
    return (
      <div className="button-group">
        <button type="button" onClick={() => JoinClass('react')}>Join React</button>
        <button type="button" onClick={() => JoinClass('tahfidz')}>Join Tahfidz</button>
      </div>
    )
  }

  const attendedList = unattended.map((item, index) => {
    return (
      item.isTeacher ?
      <Teacher key={index} name={item.name} action={Join} /> :
      <Student key={index} name={item.name} action={Join} />
    )
  })

  const reactjsList = reactjs.map((item, index) => {
    return (
      item.isTeacher ?
      <Teacher key={index} name={item.name} /> :
      <Student key={index} name={item.name} />
    )
  })

  const tahfidzList = tahfidz.map((item, index) => {
    return (
      item.isTeacher ?
      <Teacher key={index} name={item.name} /> :
      <Student key={index} name={item.name} />
    )
  })

  return (
    <>
    <h1>Unattended</h1>
    {attendedList}
    <h1>Class ReactJs</h1>
    {reactjsList.length > 0 ? reactjsList : <p> <i> "No class today" </i></p>}
    <h1>Class Tahfidz</h1>
    {tahfidzList.length > 0 ? tahfidzList : <p><i>"No class today"</i></p>}
    <Join/>
    </>
  )
}

export default App
