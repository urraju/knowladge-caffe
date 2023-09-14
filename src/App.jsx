 
import { useState } from 'react'
import './App.css'
import BookMarks from './Components/BookMarks'
import Header from './Components/Header'
import Blog from './Components/blog'

function App() {

  const [bookM , setBookM] = useState([])
  const [count, setCount] = useState(0)

  const bookMarkHandler = (book) => {
    const bookMarks = [...bookM , book]
    setBookM(bookMarks)
  }
  const countTime = (time) => {
    const countPlus = count + time;
    setCount(countPlus)
  }
  const ClosButton = (bookId) => {
    const bookButton = bookM.filter(button =>  button.id !== bookId)
    setBookM(bookButton)
  }
    return (
      <> 

        <div>
        <Header />
      <div className=' mt-20 w-9/12  mx-auto  flex flex-col  md:flex-row lg:flex-row md:gap-24  lg:gap-32'>
        <Blog bookMarkHandler={bookMarkHandler} countTime={countTime} />
        <BookMarks ClosButton={ClosButton} bookM={bookM} count={count} />
      </div>
        </div>

      </>
    )
}

export default App
