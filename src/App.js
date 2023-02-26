import './App.css'
import Header from './components/Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
import Fields from './components/Fields';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState([])

  function addData() {
    setData([...data, { name, email }])
    setEmail("")
    setName("")
  }
  const removeItem = (index) => {
    let arr=data
    arr.splice(index, 1)
    setData([...arr])
  }
  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction='row' spacing={2}>
          <TextField value={name} onChange={(e) => { setName(e.target.value) }} id="outlined-basic" label="name" variant="outlined" />
          <TextField value={email} onChange={(e) => { setEmail(e.target.value) }} id="outlined-basic" label="email" variant="outlined" />
          <Button variant="contained" color="error" onClick={addData}><AddIcon /></Button>
        </Stack>
      </div>
      <data className='data_val'>
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Remove</h4>
      </data>
      {
        data.map((element, index) => {
          return (
            <data className='data_val'>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button variant="outlined" color="error" onClick={()=> removeItem(index)}>
                  <DeleteIcon />
                </Button>
              </Stack>
            </data>
          )
        })
      }
    </div>
  )
}

export default App
