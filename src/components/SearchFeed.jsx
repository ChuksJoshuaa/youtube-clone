import React,{ useState, useEffect } from 'react'
import { Box, Typography } from "@mui/material"
import { Videos } from "./Index"
import { useParams } from "react-router-dom"

import { fetchFromAPI } from "../utils/fetchFromApi"

const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {
      setVideos(data.items)
    })
    //Anytime search value change, fetch data from api
  }, [searchTerm])
   
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white"}}>
          Search result for  <span style={{ color: '#F31503'}}>
           { searchTerm }
          </span>{" "}videos
        </Typography>

        <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed