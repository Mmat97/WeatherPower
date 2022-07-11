import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


interface Props {
  icon: unknown;
  labelName: string;
  value: string;
}

const WeatherItem: React.FC<Props> = ({ icon, labelName, value }) => {
  return (
    <Grid item xs={6} md={6} key={labelName}>
      <Grid container direction="row">
        {icon}
        <Typography color="black" sx={{ marginLeft: 1 }}>
          {labelName}
        </Typography>
      </Grid>
      <Typography



      >
        {value}
      </Typography>
    </Grid>
  );
};

export default WeatherItem;
