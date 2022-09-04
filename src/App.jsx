import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChannelDetail, Navbar, Feed, SearchFeed, VideoDetail } from "./components"
import { Box } from "@mui/material"


function App() {
  
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000"}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/videos/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
