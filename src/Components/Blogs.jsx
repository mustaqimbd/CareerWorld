import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='w-[70%] mx-auto text-3xl font-bold mb-5'>Question a : When should you use context API?</h1>
                <p className='mb-8'><strong>Answer : </strong> When I would like to pass data directly between components and avoid "prop drilling," where I have to pass data down multiple levels of the component tree. If I find myself passing data through multiple levels of components, it may be a good idea to use the Context API to simplify my code.</p>
            </div>
            <div>
                <h1 className='w-[70%] mx-auto text-3xl font-bold mb-5'>Question b : What is a custom hook?</h1>
                <p className='mb-8'><strong>Answer : </strong>A custom hook is a function that uses one or more of the built-in React hooks, such as useState or useEffect, to provide a reusable piece of logic for my React components. Custom hooks allow us to abstract away complex logic and provide a simpler, more declarative interface for my components. By using the custom hook, I can simplify the code in my components and avoid repeating the same logic over and over again.</p>
            </div>
            <div>
                <h1 className='w-[70%] mx-auto text-3xl font-bold mb-5'>Question c : What is useRef?</h1>
                <p className='mb-8'><strong>Answer : </strong>useRef is a built-in hook in React that provides a way to create a mutable reference to a DOM element or any other value that persists between re-renders of a component.Unlike useState, useRef does not cause a re-render when the value is updated. Instead, it allows you to access and modify the value directly.</p>
            </div>
            <div>
                <h1 className='w-[70%] mx-auto text-3xl font-bold mb-5'>Question d : What is useMemo?</h1>
                <p className='mb-8'><strong>Answer : </strong>useMemo is a React built-in hook that is used to optimize the performance of a React application. It memoizes (caches) the result of a function and returns the cached result when the function is called again with the same set of inputs. useMemo takes two arguments: a function that calculates the value to be memoized, and an array of dependencies that trigger the recalculation of the memoized value. If any of the dependencies change, the memoized value is recomputed, otherwise the cached value is returned.</p>
            </div>
        </div>
    );
};

export default Blogs;