import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { Typography, Stack, Box } from '@mui/material'
import ReactPlayer from "react-player"
import { CheckCircle } from "@mui/icons-material"
import { Videos } from "./Index"
import { fetchFromAPI } from '../utils/fetchFromApi'

const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)

  useEffect(() => {
   fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`)
   .then((data) => setVideoDetail(data?.items[0]))
  }, [])

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail.snippet.title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail