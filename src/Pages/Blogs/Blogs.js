import React from 'react';

const Blogs = () => {
    return (
        <div className='w-10/12 mx-auto mt-6 grid lg:grid-cols-2 grid-cols-1 gap-8 mb-8'>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>what is the Difference between javascript and nodejs.?</h2>
                <p className='text-justify text-gray-800 mt-3'>
                <span className='text-xl font-bold text-gray-900'>Java Script: </span>
                Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. It is basically used on the client-side. Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. 
                </p>
                <p className='text-justify text-gray-800 mt-3'>
                <span className='text-xl font-bold text-gray-900'>Node js: </span>
                NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags.
                </p>
            </div>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>When should you use nodejs and when should you use mongodb.?</h2>
                <p className='text-justify text-gray-800 mt-3'>
                <span className='text-xl font-bold text-gray-900'>Node js: </span>
                 Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                </p>
                <p className='text-justify text-gray-800 mt-3'>
                <span className='text-xl font-bold text-gray-900'>MongoDB: </span>
                MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                </p>
            </div>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>what is the Differences between sql and nosql databases..?</h2>
                <p className='text-justify text-gray-800 mt-3'>
                <span className='text-xl font-bold text-gray-900'>SQL: </span>
                These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage. These databases are best suited for complex queries. Vertically Scalable.
                </p>
                <p className='text-justify text-gray-800 mt-3'>
                <span className='text-xl font-bold text-gray-900'>NOSQL: </span>
                They have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. Horizontally scalable.
                </p>
            </div>
            <div className='md:mt-0 mt-4'>
                <h2 className='text-2xl font-bold text-gray-800'>What is the purpose of jwt and how does it work.?</h2>
                <p className='text-justify text-gray-800 mt-3'>
                <span className='text-xl font-bold text-gray-900'>JWT: </span>
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
            </div>
        </div>
    );
};

export default Blogs;