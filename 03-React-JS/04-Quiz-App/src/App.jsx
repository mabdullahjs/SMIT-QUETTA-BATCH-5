import { useEffect, useState } from 'react'
import './App.css'
import shuffleArray from 'shuffle-array';
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([])
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    fetch('https://the-trivia-api.com/v2/questions')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // console.log(data)
        setData(data)
      })
      .catch(() => {
        // console.log(err)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const shuffled = shuffleArray([...data[index].incorrectAnswers, data[index].correctAnswer])


      setOptions(shuffled)

    }
   
// console.log(options)
    
  }, [data , index])

  function changeIndex() {
    if (!selectedOption) {
      alert('one option must be selected')
    }

    // const currentQuestion = data[index];

    if (selectedOption === data[index].correctAnswer) {

      setScore(prev => prev + 10)
    }
    if (index == data.length - 1) {
      setResult(true)
    }

    if (index < data.length - 1) {
      setIndex(prev => prev + 1)

      setSelectedOption('')
    }


  }
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {
        error && <h1>Error Occured</h1>
      }


      <div className="quiz-card">
        {/* Question Title */}
        {data.length > 0 && !result && (
          <h1 className="question-title">
            {data[index].question.text}
          </h1>
        )}

        {
          result && <h2>Your Score is : {score}</h2>
        }
        {/* Answers List */}
        <div className="options-list">
          {data.length > 0 && !result && options.map((item, i) => {
            return (
              <label key={i} className="option-item">
                <input
                  type="radio"
                  name="quiz-answer"
                  value={item}
                  className="radio-input"
                  onChange={(e) => setSelectedOption(e.target.value)}

                  checked={selectedOption === item}
                />
                <span className="option-text">{item}</span>
              </label>
            );
          })}
        </div>


        <div className="actions-container">
          <button className="next-btn" onClick={changeIndex}>
            Next
          </button>
        </div>
      </div>

    </div>



  )
}

export default App