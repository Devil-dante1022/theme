import {
  Stack,
  Typography
} from '@mui/material';

const Item = (props:any) => {
  const { img , title , content } = props;
  return(
    <>
      <Stack direction='column' spacing={2} alignItems='center'>
        <img src={img}></img>
        <Stack direction='column' spacing={3} alignItems='center'>
          <Typography variant='h5' sx={{color:'#26D6BB'}}>{title}</Typography>
          <Typography variant='h6'>{content}</Typography>
        </Stack>
      </Stack>
    </>
  );
}
export default Item;