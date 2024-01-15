const Result = (props) =>
{
    return (
        <div className='show-score'>
            <h1>Result</h1>
            Score: {props.score} <br/>
            Total: {props.total}
        </div>
        
    )
}

export default Result