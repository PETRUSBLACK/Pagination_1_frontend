import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Posts from './components/Posts';

  function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10)

  // Get the current posts
  const indexOfLastpost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastpost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastpost);

  useEffect( () => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading}/>
    </div>
  );
}

export default App;
