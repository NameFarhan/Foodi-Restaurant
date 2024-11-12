import { Box, Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <Box className="flex justify-center items-center bg-slate-500 text-white">Hello world!</Box>
      <Button className="m-auto w-25 h-20 bg-cyan-800 block rounded-full" variant="contained">Test Button</Button>
    </>
  );
}

export default App;
