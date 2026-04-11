import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

type ListProps = {
  listItems: string[];
};

function List({ listItems = [] }: ListProps) {
  if (listItems.length === 0) {
    return <div>No quotes yet?</div>;
  }
  return (
    <>
      <Grid size={{ xs: 12, md: 12, lg: 12 }} container sx={{alignItems: "stretch"}}>
        {listItems.map((item,index) =>
          <Grid sx={{display: 'flex'}} size={{ xs: 12, md: 6, lg: 3 }} key={index}>
            <Item sx={{height: '100%', width: '100%'}}>{item}</Item>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default List
