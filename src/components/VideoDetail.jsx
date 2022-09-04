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

  if(!videoDetail?.snippet) return <div>Loading....</div>

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff"}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}> 
                <Typography variant={{ sm: "subtitle1", md: "h6"}} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }}/>
                </Typography>
              </Link>
              <Stack>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail