import React from 'react';
import '../StyleSheets/MyStyle.css';

 const book = [
    { id: 101, bname: 'Master React', price: 670 },
    { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
    { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const courses=[
    {id:1001,cname:'Angular',startdate:'4/5/2021'},
    {id:1002,cname:'React',startdate:'6/3/20201'}
];

 const posts = [
    {id: 1, title: 'React Learning', content: 'Welcome to learning React!',Author:'Stephen Biz'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.',Author:'Schewzdenier'}
  ];

const Books = () => {

    const bookdetail = (
        book.map((books) =>
            <div key={books.id}>
                <h3>{books.bname}</h3>
                <h4>{books.price}</h4>
            </div>
        )
    )

    const coursedetail=(
        courses.map((course)=>
        <div key={course.id}>
        <h1>{course.cname}</h1>
      <h4>{course.startdate}</h4>
        </div>
        )
    )

const blogdetail=(
    posts.map((blog)=>
    <div key={blog.id}>
    <h1>{blog.title}</h1>
        <h4>{blog.Author}</h4>
        <p>{blog.content}</p>
    </div>
    )
)

    return (
        <div>
            <div className="v1">
            <h1>BookDetails</h1>
            {bookdetail}
        </div>
        <div className="v2">
        <h1>Course Details</h1>
        {coursedetail}
        </div>
        <div className="v3">
            <h1>BLog Details</h1>
            {blogdetail}
        </div>
        </div>
        
    )

}
export default Books;