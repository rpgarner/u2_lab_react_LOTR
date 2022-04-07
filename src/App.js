import React from 'react'
import './App.css'
import Movie from './components/Movie'

const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lord of the Rings: A Trilogy</h1>
      </header>
      <main>
        <Movie title='The Fellowship of the Ring' score =" 8.9 / 10 " year =" 2001 " rating =" PG-13 " about ='A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.' hours='2' minutes='58' poster='https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'/>
        <Movie title='The Two Towers' score = " 8.8 / 10 "year =" 2002 " rating =" PG-13 " about = "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard." hours='2' minutes='59' poster='https://image.tmdb.org/t/p/original/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg'/>
        <Movie title='The Return of the King' score = " 9.0 / 10 "year =" 2003 " rating =" PG-13 "about = "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring." hours='3' minutes='21' poster='https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'/>
      </main>
      <footer>One Ring to Rule them All</footer>
    </div>
  )
}

export default App
