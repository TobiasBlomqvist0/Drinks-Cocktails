"use client"
import { useCurrentDrinks, useShowDrinks } from "@/app/atoms";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Ingredence() {
  
  const [ingredients, setIngredients] = useState([{value: "Choose ingredence", label: "Choose ingredence"}]) 

  const [search, setSearch] = useState("")
  const [showDrinks, setShowDrinks] = useShowDrinks()
  const [currentDrinks, setCurrentDrinks] = useCurrentDrinks()

  function loopCategorys(category:any) {
    const newIngredients =[{value: "Choose ingredence", label: "Choose ingredence"}, ...category.map((item:any)=> {
      return {value: item.strIngredient1, label: item.strIngredient1}
    })]
    setIngredients(newIngredients)
  }

  async function findDrinks() {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
    .then(function(response){
      loopCategorys(response.data.drinks)
    })
    .catch(function (error){
      console.log(error)
    })
  }

  async function findDrink() {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`)
    .then(function(response){
        setCurrentDrinks(response.data.drinks)
        setShowDrinks(true)
        setSearch("")
    })
    .catch(function (error){
        console.log(error)
    })
  }
  
  useEffect(()=> {
    findDrinks()
  },[])
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 1}}>
        <Typography sx={{fontSize: "1.25rem", color: "white", fontWeight: "bold"}}>Ingredence</Typography>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
            autoComplete="off"
        >
        <div>
            <TextField
            id="outlined-select-currency"
            select
            defaultValue="Choose ingredence"
            onChange={(e)=> setSearch(e.target.value)}
            sx={{backgroundColor: "white", borderRadius: "6px"}}
            >
            {ingredients.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
        </Box>
        <Button sx={{fontSize: "1.5rem", color: "white", textShadow: "red 1px 2px 2px"}} onClick={()=> findDrink()}>Find</Button>
    </Box>
    )
}