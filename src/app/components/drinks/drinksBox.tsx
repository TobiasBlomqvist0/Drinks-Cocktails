"use client"

import { useCurrentDrinks, useShowDrinks } from "@/app/atoms"
import { Box, Button, Typography } from "@mui/material"
import EachDrink from "./eachDrink"

export default function DrinksBox() {

    const [showDrinks, setShowDrinks] = useShowDrinks()
    const [currentDrinks, setCurrentDrinks] = useCurrentDrinks()
    return (
        <Box sx={{display: showDrinks ? "block" : "none", position: "absolute", width: "100%", minHeight: "100vh", top: 0, left: 0, zIndex: 5, backgroundColor: "#032ca6", textAlign: "center"}}>
            <Typography sx={{fontSize: "2.5rem", fontWeight: "bold", color: "white"}}>Results</Typography>
            <Button color="error" sx={{fontSize: "1.25rem"}} onClick={()=> setShowDrinks(false)}>Back</Button>
            <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {currentDrinks.map((drink:any, index:number)=> 
                    <EachDrink drink={drink} key={drink.strDrink + index}/>
                )}
            </Box>
        </Box>
        
    )
}