import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const [text, setText] = React.useState('');
  const maxRows = 99;
  const marginBottom = 10;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const alternateCase = (str) => {
    let result = '';
    let lowerCase = true;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (/[a-zA-Z]/.test(char)) {
        result += lowerCase ? char.toLowerCase() : char.toUpperCase();
        lowerCase = !lowerCase;
      } else {
        result += char;
      }
    }

    return result;
  };

  const handleCopyClick = () => {
    const outputText = alternateCase(text);
    navigator.clipboard.writeText(outputText).then(
      () => {
        console.log('Text copied to clipboard');
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  };

  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: 'SF Pro Display, sans-serif',
            fontWeight: 'bold',
            letterSpacing: '0.02em',
            color: '#1d1d1f',
            textTransform: 'lowercase',
            '& span': {
              textTransform: 'uppercase',
            },
          }}
        >
          s<span>T</span>u<span>P</span>i<span>D</span> t<span>E</span>x<span>T</span> c<span>O</span>n<span>V</span>e<span>R</span>t<span>E</span>r
        </Typography>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={maxRows}
          value={text}
          onChange={handleChange}
          fullWidth
          sx={{ mb: marginBottom }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          value={alternateCase(text)}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          sx={{ mb: marginBottom }}
        />
        <Button variant="contained" onClick={handleCopyClick}>
          Copy Text
        </Button>
      </Box>
    </div>
  );
}

export default App;