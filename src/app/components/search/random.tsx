"use client"
import { useCurrentDrinks, useShowDrinks } from "@/app/atoms";
import { Box, Button } from "@mui/material";
import axios from "axios";


export default function Random() {

    //https://www.thecocktaildb.com/api/json/v1/1/random.php

    const [showDrinks, setShowDrinks] = useShowDrinks()
    const [currentDrinks, setCurrentDrinks] = useCurrentDrinks()

    async function findDrink() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(function(response){
            setCurrentDrinks(response.data.drinks)
            setShowDrinks(true)
        })
        .catch(function (error){
            console.log(error)
        })
    }


    return (
        <Box sx={{height: "100%", display: "flex", alignItems: "center"}}>
            <Button onClick={()=> findDrink()} sx={{fontSize: "1.25rem", color: "white", textShadow: "red 1px 2px 2px", fontWeight: "bold"}}>Random drink</Button>
        </Box>
    )
}