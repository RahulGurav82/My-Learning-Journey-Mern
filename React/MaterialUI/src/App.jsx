import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

  return (
    <>
      <Button variant="contained" color='success' size='small' startIcon={ <DeleteIcon />}>Delete</Button>
    </>
  )
}

export default App
