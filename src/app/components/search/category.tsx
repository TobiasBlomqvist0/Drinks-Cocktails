"use client"
import { useCurrentDrinks, useShowDrinks } from "@/app/atoms";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Category() {

  const [categorys, setCategorys] = useState([{value: "Choose category", label: "Choose category"}])
  
  const [search, setSearch] = useState("")
  const [showDrinks, setShowDrinks] = useShowDrinks()
  const [currentDrinks, setCurrentDrinks] = useCurrentDrinks()

  function loopCategorys(category:any) {
    const newCategory =[{value: "Choose category", label: "Choose category"}, ...category.map((item:any)=> {
      return {value: item.strCategory, label: item.strCategory}
    })]
    setCategorys(newCategory)
  }

  async function findCategory() {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
    .then(function(response){
      loopCategorys(response.data.drinks)
    })
    .catch(function (error){
      console.log(error)
    })
  }
  
  async function findDrink() {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search}`)
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
    findCategory()
  },[])

  return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 1}}>
            <Typography sx={{fontSize: "1.5rem", color: "white", fontWeight: "bold"}}>Category</Typography>
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
                defaultValue="Choose category"
                onChange={(e)=> setSearch(e.target.value) }
                sx={{backgroundColor: "white", borderRadius: "6px"}}
                >
                {categorys.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            </Box>
            <Button sx={{fontSize: "1.25rem", color: "white", textShadow: "red 1px 2px 2px"}} onClick={()=> findDrink()}>Find</Button>
        </Box>
    )
}