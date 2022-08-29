import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos, ChannelCard } from "./Index"
import { fetchFromAPI } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?.part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))


    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail