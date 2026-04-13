import './App.css'
import { Grid } from '@mui/material';
import Card from './components/Card';
import WhatIsThis from './components/WhatIsThis'

export default function App() {
  <Grid container>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Card>
            <WhatIsThis />
          </Card>
        </Grid>
  </Grid>
}
