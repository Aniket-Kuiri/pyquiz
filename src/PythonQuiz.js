export const PyQuizData = [
    {
        question: "What does the *args and **kwargs syntax in function parameters represent?",
        options: [" They are placeholders for required and optional arguments, respectively.", 
                  "They indicate variable-length argument lists.", 
                  "They are used for naming conventions.", 
                  " They are decorators for function arguments."],
        answer: 2
    },
    {
        question: "What is the Global Interpreter Lock (GIL) in CPython and its impact on multithreading?",
        options: ["It allows only one thread to execute Python bytecode at a time.", 
                  "It ensures global variables are locked during execution.", 
                  "It promotes parallel execution of threads.", 
                  "It prevents deadlock in multithreaded applications."],
        answer: 1
    },
    {
        question: "What is the purpose of the super() function in Python?",
        options: ["Calls the superclass constructor.", 
                  "Accesses the superclass's attributes and methods.", 
                  "Defines a metaclass.", 
                  "Specifies a base class."],
        answer: 2
    },
    {
        question: "Which of the following statements about Python's async/await syntax is true?",
        options: ["async is used to define asynchronous functions, and await is used to call them.", 
                  "await is used to define asynchronous functions, and async is used to call them.", 
                  "Both async and await are used interchangeably.", 
                  "Neither async nor await is used in asynchronous programming."],
        answer: 3
    }

]

export default PyQuizData