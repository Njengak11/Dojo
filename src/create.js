import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";

const Create = () => {
const [title,setTitle] = useState('');
const [body,setBody] = useState('');
const [isPending,setIsPending] = useState(false);
const history = useHistory();


const handleSubmit = (e) => {
e.preventDefault();
const blog = { title,body,};

setIsPending(true);

fetch('http://localhost:8000/blogs', {
    method:'POST',
    headers:{"Content-TYpe": "application/json"},
    body:JSON.stringify(blog)
}).then (() => {
    console.log('added')
    setIsPending(false);
    history.push('/');
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

                
                 {!isPending && <button>Add Blog</button>}
                 {isPending && <button disabled>Add Blog....</button>}
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;