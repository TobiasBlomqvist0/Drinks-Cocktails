"use client"
import { useCurrentDrinks, useShowDrinks } from "@/app/atoms";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function TextInput() {

    const [search, setSearch] = useState("")
    const [showDrinks, setShowDrinks] = useShowDrinks()
    const [currentDrinks, setCurrentDrinks] = useCurrentDrinks()

    async function findDrinks() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(function(response){
            setCurrentDrinks(response.data.drinks)
            setShowDrinks(true)
            setSearch("")
        })
        .catch(function (error){
            console.log(error)
        })
    }
    
    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <TextField autoComplete="off" value={search} onChange={(e)=> setSearch(e.target.value)} sx={{width: "100%", backgroundColor: "white", borderRadius: "6px"}} label="SeachInput"/>
            <Button sx={{fontSize: "1.3rem", color: "white", textShadow: "red 1px 2px 2px", fontWeight: "bold"}} onClick={()=> findDrinks()}>Search</Button>
        </Box>
    )
}