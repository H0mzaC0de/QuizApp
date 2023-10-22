'use client'
import {  useState } from 'react'

const questions = [
  {
    prompt:"What is the color of the sky ?",
    correctAnswer:"Blue",
    answers:["Blue","Red","Yellow","Green"]
  },
  {
    prompt:"Who is the greatest player of all time?",
    correctAnswer:"Messi",
    answers:["Cristiano Ronaldo","Messi","Maradonna","Pele"]
  },
  {
    prompt:"What's the national animal of Australia?",
    correctAnswer:"Kangaroo",
    answers:["Eagle","Lion","Zaebra","Kangaroo"]
  }
]

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score,setScore] = useState(0)
  const isGameOver = questions[currentQuestionIndex]== undefined ? true : false
  const currentOne=questions[currentQuestionIndex]

  const handleSubmit = (e)=>{
    e.preventDefault()
    // TODO:if correct answer is chosen score++
    if(currentOne.correctAnswer==selectedAnswer){
      setScore(score+1)
      console.log(score)
      setCurrentQuestionIndex((prev)=>prev+1)
    }else{
      setCurrentQuestionIndex((prev)=>prev+1)
    }
    // else go next question
  }


  return (
     
    <main className='text-center h-full w-full flex flex-col items-center justify-evenly'>
      {isGameOver ? <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-[3rem] '>Congratulations on completing the quiz</h1>
        <span className='text-[1rem]'>Your score is {score} out of {questions.length}</span>
      </div> : 
      <>
      <div className='w-[70%] bg-gray-600 border border-solid border-y-grey-500 rounded-[30px]'>
      <h1 className='text-[3rem] '>{questions[currentQuestionIndex].prompt}</h1>
    </div>
    <div className='w-[50%] h-[60%] px-[20px] py-[10px]'>
    <form action="" className='w-full h-full flex flex-col items-start justify-evenly'>
      {currentOne.answers.map((answer)=>{
        return (
        
          <label key={answer} className='text-[1.7rem] w-full text-left px-5 py-3 border border-l-gray-500 border-r-gray-500  border-solid border-y-gray-500 rounded-[40px] '>
          <input onChange={()=>{setSelectedAnswer(answer);console.log(answer)}} type="radio" value="" name='answer' className='mr-5 scale-150 cursor-pointer' ></input>{answer}
          </label>
          
          )

      })}
      <button type="submit" onClick={handleSubmit} className='text-[1.5rem] px-8 py-3 border border-solid border-purple-600 rounded-[30px]'>Submit</button>
    </form>
    </div>
    </>
      }
      
    </main>
      
  )
  
}
