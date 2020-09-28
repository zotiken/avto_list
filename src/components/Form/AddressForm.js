import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioControl from '../../components/RadioControl/RadioControl';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ThemeContext } from '../../Context/Context'
import { v4 as uuidv4 } from 'uuid';
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "14px",
    "& .MuiFormLabel-root": {
      left: "10px",
      paddingTop: "5px"
    },
    "& :hover:not($disabled).MuiInput-underline:before": {
      borderBottomColor: "#C3002F"
    }
  },
  select: {
    "& .MuiInputBase-root": {
      backgroundColor: "red"
    },
  },

  input: {
    border: "1px solid #DADADA",
  },
  formControl: {
    width: "100%",
    left: "10px",
    "& .MuiInputBase-root": {
      left: "-10px",
      border: "1px solid #DADADA",
    }
  },
  button: {
    backgroundColor: "#C3002F",
    color: "#fff",
    width: "100%",
    marginTop: theme.spacing(2),
  },
  radioControl: {
    marginTop: "25px"
  }
}));


export default function AddressForm() {
  const [title, settitle] = useState("")
  const [year, setyear] = useState("")
  const [price, setprice] = useState("")
  const [description, setdescription] = useState("")
  const [color, setcolor] = useState("white")
  const [status, setstatus] = useState("")
  const context = useContext(ThemeContext)
  const classes = useStyles();

  const handleNext = () => {
    context.addItem({ id: uuidv4(), title, year, price, description, color, status })
    settitle("")
    setyear("")
    setprice("")
    setdescription("")
    setcolor("")
    setstatus("")
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            type="text"
            size="small"
            id="Название"
            className={classes.root}
            InputProps={{
              className: classes.input
            }}
            name="title"
            label="Название"
            fullWidth
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={4} sm={4} >
          <TextField
            className={classes.root}
            size="small"
            id="Год"
            type="number"
            name="year"
            InputProps={{
              className: classes.input
            }}
            label="Год"
            fullWidth
            value={year}
            onChange={(e) => setyear(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <TextField
            type="number"
            size="small"
            className={classes.root}
            id="Цена"
            name="price"
            InputProps={{
              className: classes.input
            }}
            label="Цена"
            fullWidth
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TextField
            size="small"
            className={classes.root}
            id="Описание"
            name="description"
            InputProps={{
              className: classes.input
            }}
            label="Описание"
            fullWidth
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.radioControl}>
          <RadioControl value={color} onChange={(e) => setcolor(e)} />
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControl className={classes.formControl} variant="standart">
            <InputLabel id="demo-simple-select-label">Статус</InputLabel>
            <NativeSelect
              size="small"
              variant="standart"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={(e) => setstatus(e.target.value)}
            >
              <option aria-label="None" value="" />
              <option value={"В наличии"}>В наличии</option>
              <option value={"Ожидается"}>Ожидается</option>
              <option value={"Нет в наличии"}>Нет в наличии</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Button
            variant="contained"
            color="inherit"
            endIcon={<ArrowForwardIosIcon />}
            onClick={handleNext}
            className={classes.button}
          >
            Отправить
        </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
