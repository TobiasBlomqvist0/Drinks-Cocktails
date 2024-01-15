"use client"
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";


export default function EachDrink({drink}:any) {
    
    const [drinkDetails, setDrinkDetails] = useState(false)
    const [selectedDrinkDetails, setSelectedDrinkDetails]:any = useState([])
    const [id,setId] = useState(drink.idDrink)

    function detialsTrue() {
        setDrinkDetails(true)
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(function(response){
                setSelectedDrinkDetails(response.data.drinks[0])
            })
            .catch(function (error){
                console.log(error)
        })
        window.scrollTo({ top: 0, behavior: "instant" })
    }

    function detailsFalse() {
        setDrinkDetails(false)
    }

    return (
        <Box sx={{cursor: "pointer"}}>
            <Box sx={{margin: "24px 0"}} onClick={()=> detialsTrue()}>
                <Typography sx={{fontSize: "1.5rem", fontWeight: "bold", color: "white"}}>{drink.strDrink}</Typography>
                <img style={{width: "400px", height: "400px", borderRadius: "4px", marginBottom: "12px", margin: "4px 8px"}} src={drink.strDrinkThumb} alt={drink.strDrink + " Picture"} />
            </Box>
            <Box sx={{display: drinkDetails ? "block" : "none" ,position: "absolute", left: 0, top: 0, height: "100%", width: "100%", backgroundColor: "#032ca6", zIndex: 10, cursor: "default"}}>
                <Box sx={{color: "white",display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Box sx={{width: "500px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Typography sx={{fontSize: "2rem", fontWeight: "bold"}}>{selectedDrinkDetails.strDrink}</Typography>
                        <Button color="error" sx={{zIndex: 20}} onClick={()=> detailsFalse()}>back</Button>
                        <img style={{width: "400px", height: "400px", borderRadius: "4px", marginBottom: "12px", margin: "4px 8px"}} src={selectedDrinkDetails.strDrinkThumb} alt={selectedDrinkDetails.strDrink + " Picture"} />        
                        <Typography sx={{fontSize: "1.2rem"}}>{selectedDrinkDetails.strAlcoholic} - {selectedDrinkDetails.strCategory}</Typography>
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Typography variant="subtitle1">{selectedDrinkDetails.strInstructions}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{fontSize: "1.5rem", fontWeight: "bold", marginTop: "12px"}}>ingredients</Typography>
                            <ul style={{listStyle: "none", textAlign: "center", padding: "0"}}>
                                {selectedDrinkDetails.strIngredient1 ? <li>{selectedDrinkDetails.strIngredient1} - {selectedDrinkDetails.strMeasure1}</li> : ""}
                                {selectedDrinkDetails.strIngredient2 ? <li>{selectedDrinkDetails.strIngredient2} - {selectedDrinkDetails.strMeasure2}</li> : ""}
                                {selectedDrinkDetails.strIngredient3 ? <li>{selectedDrinkDetails.strIngredient3} - {selectedDrinkDetails.strMeasure3}</li> : ""}
                                {selectedDrinkDetails.strIngredient4 ? <li>{selectedDrinkDetails.strIngredient4} - {selectedDrinkDetails.strMeasure4}</li> : ""}
                                {selectedDrinkDetails.strIngredient5 ? <li>{selectedDrinkDetails.strIngredient5} - {selectedDrinkDetails.strMeasure5}</li> : ""}
                                {selectedDrinkDetails.strIngredient6 ? <li>{selectedDrinkDetails.strIngredient6} - {selectedDrinkDetails.strMeasure6}</li> : ""}
                                {selectedDrinkDetails.strIngredient7 ? <li>{selectedDrinkDetails.strIngredient7} - {selectedDrinkDetails.strMeasure7}</li> : ""}
                                {selectedDrinkDetails.strIngredient8 ? <li>{selectedDrinkDetails.strIngredient8} - {selectedDrinkDetails.strMeasure8}</li> : ""}
                                {selectedDrinkDetails.strIngredient9 ? <li>{selectedDrinkDetails.strIngredient9} - {selectedDrinkDetails.strMeasure9}</li> : ""}
                                {selectedDrinkDetails.strIngredient10 ? <li>{selectedDrinkDetails.strIngredient10} - {selectedDrinkDetails.strMeasure10}</li> : ""}
                                {selectedDrinkDetails.strIngredient11 ? <li>{selectedDrinkDetails.strIngredient11} - {selectedDrinkDetails.strMeasure11}</li> : ""}
                                {selectedDrinkDetails.strIngredient12 ? <li>{selectedDrinkDetails.strIngredient12} - {selectedDrinkDetails.strMeasure12}</li> : ""}
                                {selectedDrinkDetails.strIngredient13 ? <li>{selectedDrinkDetails.strIngredient13} - {selectedDrinkDetails.strMeasure13}</li> : ""}
                                {selectedDrinkDetails.strIngredient14 ? <li>{selectedDrinkDetails.strIngredient14} - {selectedDrinkDetails.strMeasure14}</li> : ""}
                                {selectedDrinkDetails.strIngredient15 ? <li>{selectedDrinkDetails.strIngredient15} - {selectedDrinkDetails.strMeasure15}</li> : ""}
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}