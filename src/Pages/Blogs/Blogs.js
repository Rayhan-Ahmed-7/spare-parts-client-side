import React from 'react';

const Blogs = () => {
    return (
        <div className='w-10/12 mx-auto mt-6 grid lg:grid-cols-2 grid-cols-1 gap-8 mb-8'>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>How will you improve the performance of a React Application?</h2>
                <p className='text-justify text-gray-800 mt-3'>
                    Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.
                    <br /> * Keeping component state local where necessary
                    <br /> * Memoizing React components to prevent unnecessary re-renders
                    <br /> * Code-splitting in React using dynamic import()
                    <br /> * Lazy loading images in React
                </p>
            </div>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>What are the different ways to manage a state in a React application?</h2>
                <p className='text-justify text-gray-800 mt-3 text-md'>
                    The Four Kinds of React State to Manage
                    <br /> 1. Local state
                    <br /> 2. Global state
                    <br /> 3. Server state
                    <br /> 4. URL state
                    <p>1. Local state is most often managed in React using the useState hook.</p>
                    <p>2. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                    <p>3. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                    <p>4. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
                </p>
            </div>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>How does prototypical inheritance work?</h2>
                <p className='text-justify text-gray-800 mt-3'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
            </div>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts ?</h2>
                <p className='text-justify text-gray-800 mt-3'>
                we should never update the state directly because If you update it directly, it will cause problem in our application you should always update with the setProducts When you directly update the state, it does not change this.
                and in with setProducts we can update our products latter like after fetching from backend .
                </p>
            </div>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name ?</h2>
                <p className='text-justify text-gray-800 mt-3'>
                    we can use es6 filter array method. Like bellow.
                    <br />
                    <p>const result=products.filter(product=>products.name.includes(searchText));</p>
                </p>
            </div>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>What is a unit test? Why should write unit tests?</h2>
                <p className='text-justify text-gray-800 mt-3'>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
        </div>
    );
};

export default Blogs;