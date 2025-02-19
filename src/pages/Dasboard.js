import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: "linear-gradient(to bottom, #415a77, #1b263b)",
        minHeight: "100vh",
        padding: "40px 0",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        {/* Welcome Message */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Welcome to Blog App 🚀
          </Typography>
          <Typography variant="h6" align="center">
            Explore the best blogs and share your thoughts!
          </Typography>
        </motion.div>

        {/* Cards Section */}
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          {[
            { title: "About App", desc: "This is a blogging platform for sharing ideas." },
            { title: "Technologies", desc: "Built with React, Node.js, MongoDB & MUI." },
            { title: "Features", desc: "Write, edit, and share blogs with the world!" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <Card sx={{ backgroundColor: "#283747", color: "white", minHeight: "140px" }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
