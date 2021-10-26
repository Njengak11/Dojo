const BlogList = ({blogs,title}) => {
   


    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blogs.id}>
                    <h2>{blog.title}</h2>
                    <p>Writeen by {blog.author}</p>
                </div>
            ))}
        </div>
      );
}
 
export default BlogList;