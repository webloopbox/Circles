import { Switch } from "@mui/material";
import { Box, Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useGlobalContext } from "./context";
import { Circle } from "./models/circle";

const controlStyles = {
  margin: '0 10px',
  padding: '10px 20px',
  fontSize: '1rem'
}

const switchStyles = {
  position: 'absolute',
  left: '25px', 
  bottom: '-55px',
}

const circleStyles = (color: string) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: '50%',
  background: color
})

const randomBetween = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));

export const Board = () => {

  const { circlesList, createCircle, removeCircle, changeTheme, themeName } = useGlobalContext()

  const handleCreate = () => {

    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    const circle = {
      id: nanoid(),
      color: `rgb(${r},${g},${b})`
    }
    createCircle(circle)
  }

  return (
    <div className="board">
      {circlesList.map((circle: Circle) => {
        return <Box key={circle.id} className="board__circle" sx={circleStyles(circle.color)}>
          lorem ipsum
        </Box>
      })}
      <div className="board__controls">
        <Button variant="contained" className="board__create" sx={controlStyles} color='create' onClick={handleCreate}>Create</Button>
        <Button variant="contained" className="board__remove" sx={controlStyles} color='remove' onClick={removeCircle}>Delete</Button>
        <Switch
          checked={(themeName==="theme2") ? true : false}
          onChange={(event) => changeTheme(event)}
          inputProps={{ 'aria-label': 'controlled'}}
          sx={switchStyles}
        />
      </div>
    </div >
  );
}
