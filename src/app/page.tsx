import { Box, Typography} from "@mui/material";
import SearchBox from "./components/search/searchBox";


export default function Home() {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#032ca6", height: "100vh"}}>
      <Typography color="white" sx={{fontSize: "2.5rem", fontWeight: "bold", m: 2}}>Drinks&Cocktails</Typography>
      <SearchBox/>
    </Box>
  )
}