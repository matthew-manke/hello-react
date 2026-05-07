import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

export default function WhatIsThis() {
  return (
    <List
      className="max-w-[700px] mx-auto p-4"
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
      }}
      aria-labelledby="what-is-this-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="what-is-this-subheader"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          What is this?
        </ListSubheader>
      }
    >
      <ListItem className="py-3">
        <ListItemText primary="This is a small React app that contains a handful of components (Buttons, Cards, Lists)." />
      </ListItem>

      <ListItem className="py-3">
        <ListItemText
          primary={
            <>
              This app uses{' '}
              <Link href="https://vite.dev" target="_blank" rel="noopener">
                Vite
              </Link>
              ,{' '}
              <Link href="https://mui.com/" target="_blank" rel="noopener">
                Material UI
              </Link>
              , and{' '}
              <Link href="https://tailwindcss.com/" target="_blank" rel="noopener">
                TailwindCSS
              </Link>
              .
            </>
          }
        />
      </ListItem>

      <ListItem className="py-3">
        <ListItemText primary="The app initially used React with .jsx files and was later migrated to TypeScript, with components now written in .tsx." />
      </ListItem>

      <ListItem className="py-3">
        <ListItemText primary="This app uses React Router to present multiple pages." />
      </ListItem>
    </List>
  );
}