import { useState } from "react"
import Result from "./Result"

const Quiz = (props) => {
    const QuizData = props.data
     // eslint-disable-next-line
    const [state, setState] = useState({quesNo: 0, optionNo: 0, score: 0, finish: false}) 
    const selectHandler = (i) => {
        return () => setState({quesNo: state.quesNo, optionNo: i+1, score: state.score, finish: false})
    }
    const nextQuestionHandler = () =>
    {
        let currentScore = state.score
        if(state.optionNo === QuizData[state.quesNo].answer)
        {
            currentScore += 1
        }
        if(state.quesNo < QuizData.length - 1)
        {
            setState({quesNo: state.quesNo+1, optionNo: 0, score: currentScore, finish: false})
        }
        else
        {
            setState({quesNo: state.quesNo, optionNo: 0, score: currentScore, finish: true})
        }
    }
    return (
        <div>
            <p className="heading-txt"> PYTHON QUIZ</p>
            <div className="container">
                {state.finish ? (
                    <Result score={state.score} total={QuizData.length} /> 
                ): (
                    <>
                        <div className="question">
                            <span id="question-number">{state.quesNo + 1}</span>
                            <span id="question">{QuizData[state.quesNo].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[state.quesNo].options.map((option, i) => {
                                return (
                                    <button key={i}
                                    className={`option-btn ${state.optionNo === i+1? "checked": null}`} onClick={selectHandler(i)}>
                                        {option}
                                    </button>    
                                )
                            })}
                        </div>
                        <input type="button" value="Next" id="next-button" onClick={nextQuestionHandler}></input>
                    </>        
                )}
            </div>
        </div>
    )
}

export default Quiz