import { useState } from "react/cjs/react.development";

const Create = () => {
const [title,setTitle] = useState('');
const [body,setBody] = useState('');
const [author,setAuthor] = useState('mario');
const handleSubmit = (e) => {
e.preventDefault();
const blog = { title,body,author};

fetch('http://localhost:8000/blogs', {
    method:'POOST',
    headers:{"Content-TYpe": "application/json"},
    body:JSON.stringify(blog)
})
}

    return ( 
        <div className='create'>
            <h2>Create A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Blog Title
                </label>
                <input type='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                 <label>
                    Blog Body
                </label>
                <textarea required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>
                    Blog Author
                </label>
                <select
                value={author} 
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='mario'>Mario</option>
                    <option value='yoahi'>Yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;