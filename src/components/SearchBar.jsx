import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        let word = e.target.value
        setSearchValue(word)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
        if(searchValue){
           navigate(`search/${searchValue}`)
           setSearchValue("")
        }
       
    }
  return (
      <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
              borderRadius: 20,
              border: "1px solid #e3e3e3",
              pl: 2,
              boxShadow: "none",
              mr: { sm: 5}
          }}
      >
          <input
              className="search-bar"
              placeholder='Search...'
              value={searchValue}
              onChange={handleChange}
          /> 
          <IconButton type="submit" sx={{ p: "10px", color: "red"}}>
              <Search />
          </IconButton>
    </Paper>
  )
}

export default SearchBar