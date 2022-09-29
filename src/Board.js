import { Box, Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useGlobalContext } from "./context";

const controlStyles = {
  margin: '0 10px',
  padding: '10px 20px',
  fontSize: '1rem'
}

const circleStyles = (color) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: '50%',
  background: color
})

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

export const Board = () => {

  const { circlesList, createCircle, removeCircle } = useGlobalContext()
  console.log('circlesList: ', circlesList);

  useEffect(() => {

  }, [])

  const handleCreate = () => {


    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const randomColor = `rgb(${r},${g},${b})`;

    const circle = {
      id: nanoid(),
      color: randomColor
    }
    createCircle(circle)
  }

  return (
    <div className="board">
      {circlesList.map((item) => {
        return <Box key={item.id} className="board__circle" sx={circleStyles(item.color)}>
          lorem ipsum
        </Box>
      })}
      <div className="board__controls">
        <Button variant="contained" className="board__create" sx={controlStyles} color='create' onClick={handleCreate}>Create</Button>
        <Button variant="contained" className="board__remove" sx={controlStyles} color='remove' onClick={removeCircle}>Delete</Button>
      </div>
    </div >
  );
}
