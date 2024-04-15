"use client"
import React,{useState} from 'react'
import { Container, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const Search = () => {
  const Destination = ['Asia', 'America','Wester Europe', 'Africa Wild'];
  const Duration = ['1 Day Tour', '2-4 Day Tour', '5-7 Day Tour', '7+ Day Tour'];
  const keywords = [
    { title: 'Africa – Amazing African Safari'},
    { title: 'Dubai – All Stunning Places'},
  ];
  const [value, setValue] = useState<string | null>(Destination[0]);
  const [inputValue, setInputValue] = useState('');
  const [duration, setDuration] = useState<string | null>(Duration[0]);
  const [inputDuration, setInputDuration] = useState('');
  return (
    <Container sx={{paddingBottom: '10rem'}}>
  <Stack spacing={2} direction="row" sx={{ width: 'auto',
    padding: '2rem',
    borderRadius: '1rem',
    background: 'white',
    display: 'flex',
    direction: 'row',
    justifyContent: 'center'
  }}>
      <Autocomplete
        sx={{ width: 300 }}
        id="free-solo-demo"
        freeSolo
        options={keywords.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Keyword" />}
      />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={Destination}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Destination" />}
      />
            <Autocomplete
        value={duration}
        onChange={(event: any, newValue: string | null) => {
          setDuration(newValue);
        }}
        inputValue={inputDuration}
        onInputChange={(event, newInputValue) => {
          setInputDuration(newInputValue);
        }}
        id="controllable-states-demo"
        options={Duration}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Duration" />}
      />
    <Button variant="outlined">Submit</Button>
    </Stack>
    </Container>
  )
}

export default Search
