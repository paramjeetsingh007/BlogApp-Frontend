import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import toast from 'react-hot-toast';

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem('userId');
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/blog/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch user blogs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);

  return (
    <Box sx={{ padding: 3, minHeight: '80vh' }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : blogs.length > 0 ? (
        <Grid container spacing={3} justifyContent="center">
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog._id}>
              <BlogCard
                id={blog._id}
                isUser={true}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                username={blog.user.username}
                time={blog.createdAt}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <Typography variant="h5" color="textSecondary">
            You haven't created any blogs yet.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default UserBlogs;
