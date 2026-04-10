import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader'

export default function WhatIsThis() {
  return (
    <>
    <List 
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      aria-labelledby='what-is-this-subheader'
      subheader={
        <ListSubheader component='div' id='what-is-this-subheader'>
          What is this?
        </ListSubheader>
      }
      >
        <ListItem>This is a small React app that contains a handful of components (Buttons, Cards, Lists).</ListItem>
        <ListItem>
          <span>
            This app uses <a href='https://vite.dev'>vite</a>, <a href="https://mui.com/">material UI</a>, and <a href="https://tailwindcss.com/">tailwindcss</a>
          </span>
        </ListItem>
        <ListItem>The app initially used React with .jsx files and was later migrated to TypeScript, with components now written in .tsx.</ListItem>
      </List>
    </>
  )
}