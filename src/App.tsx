import './App.css'
import { Grid } from '@mui/material';
import Card from './components/Card';
import WhatIsThis from './components/WhatIsThis'

export default function App() {
  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Card>
          <WhatIsThis />
        </Card>
      </Grid>
    </Grid>
  )
}
