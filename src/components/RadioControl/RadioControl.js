import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

const GreenRadio = withStyles({
  root: {
    "& .MuiIconButton-label": {
        backgroundColor:"#77CF61",
        borderRadius:"50%"
    },
    // "& .PrivateRadioButtonIcon-layer-31": {
    //   transform: "scale(2)"
    // },
    color: "#77CF61",
    '&$checked': {
      color: "#8B8B8B",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const WhiteRadio = withStyles({
  root: {
    "& .MuiIconButton-label": {
      backgroundColor:"#fff",
      borderRadius:"50%"
  },
    color: "#C4C4C4",
    '&$checked': {
      color: "#8B8B8B",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const RedRadio = withStyles({
  root: {
    "& .MuiIconButton-label": {
      backgroundColor:"#DD1C10",
      borderRadius:"50%"
  },
    color: "#DD1C10",
    '&$checked': {
      color: "#8B8B8B",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const GreyRadio = withStyles({
  root: {
    "& .MuiIconButton-label": {
      backgroundColor:"#C4C4C4",
      borderRadius:"50%"
  },
    color: "#C4C4C4",
    '&$checked': {
      color: "#8B8B8B",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const BlackRadio = withStyles({
  root: {
    "& .MuiIconButton-label": {
      backgroundColor:"#000",
      borderRadius:"50%"
  },
    color: "#000000",
    '&$checked': {
      color: "#8B8B8B",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


export default function RadioButtons(props) {

  return (
    <div>
      <FormLabel component="legend">Цвет</FormLabel>
      <WhiteRadio
        checked={props.value === 'white'}
        onChange={(e) => props.onChange(e.target.value)}
        value="white"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <BlackRadio
        checked={props.value === 'black'}
        onChange={(e) => props.onChange(e.target.value)}
        value="black"
        color="#C4C4C4"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      <GreyRadio
        checked={props.value === 'grey'}
        onChange={(e) => props.onChange(e.target.value)}
        value="grey"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
      <RedRadio
        checked={props.value === 'red'}
        onChange={(e) => props.onChange(e.target.value)}
        value="red"
        color="#DD1C10"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'D' }}
      />
      <GreenRadio
        checked={props.value === 'green'}
        onChange={(e) => props.onChange(e.target.value)}
        value="green"
        color="#77CF61"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'E' }}
      />
    </div>
  );
}
