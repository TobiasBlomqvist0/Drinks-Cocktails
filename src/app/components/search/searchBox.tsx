"use client"
import { Box } from "@mui/material";
import TextInput from "./textInput";
import Category from "./category";
import Random from "./random";
import Ingredence from "./ingredence";
import DrinksBox from "../drinks/drinksBox";

export default function SearchBox() {
    return (
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center" ,width: "100%"}}>
        <Box sx={{width: "50%"}}>
          <TextInput/>
        </Box>
        <Box sx={{display: "flex", width: "50%", justifyContent: "space-evenly"}}>
          <Category/>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Random/>
            </Box>
          <Ingredence/>
        </Box>
        <DrinksBox/>
      </Box>
    )
}