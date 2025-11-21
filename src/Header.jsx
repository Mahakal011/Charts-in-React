import { AppBar, Button, Typography, Toolbar, Box } from "@mui/material";
import { FormattedMessage } from "react-intl";

export default function Header() {
  
  const cdacLogo = "https://img.favpng.com/15/5/12/c-dac-hyderabad-c-dac-thiruvananthapuram-centre-for-development-of-advanced-computing-logo-png-favpng-uP3K0bczqGPSE2yaA2BsiEDsm.jpg";

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>    
        <Box
          component="img"
          src={cdacLogo}
          alt="C-DAC Logo"
          sx={{
            height: 45,              
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "4px",
          }}
        />
        
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            textAlign: "center" 
          }} 
        >
          District Analytics
        </Typography>

        <Button color="inherit">
          <FormattedMessage id="hi" defaultMessage="Hi" />, Sachin
        </Button>

      </Toolbar>
    </AppBar>
  );
}