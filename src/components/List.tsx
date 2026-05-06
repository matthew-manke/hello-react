import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

type ListProps = {
  listItems: string[];
};

export default function List({ listItems = [] }: ListProps) {
  if (listItems.length === 0) {
    return <div className="mt-4 text-center">No quotes yet?</div>;
  }

  return (
    <Grid container spacing={2}>
      {listItems.map((item, index) => (
        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
          <Paper
            sx={{
              p: 2,
              height: '100%',
              textAlign: 'center',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            {item}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}