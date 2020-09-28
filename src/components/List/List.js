import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import MobileList from '../MobileList/MobileList'
import { ThemeContext } from '../../Context/Context'
import Color from '../Color/Color';
import Status from '../Status/Status';
import Loading from "../MobileList/Loading"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: " #C3002F",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
  },
  body: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "15px",
    lineHeight: "20px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.action.hover,
    // '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.action.hover,
    // },
  },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 320,
  },
  table_head: {
    width: "50%"
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "23px",
    paddingLeft: "19px",
    borderLeft: "3px solid #8B8B8B ",
    marginBottom: "30px",
    color: "#282D30",
    [theme.breakpoints.down(360)]: {
      marginLeft: 10,
    }

  },
  button: {
    padding: "5px 14px",
    // minWidth: 700,
    "&:hover": {
      background: "#282D30",
      color: "#fff",
      borderRadius: "20px",
      padding: "5px 14px"
    }
  },
  color: {
    width: "19px",
    height: "19px",
    background: "#FFFFFF",
    border: "1px solid #8B8B8B",
    borderRadius: "50%",
    marginLeft: "auto"
  }
}));

function CustomizedTables(props) {
  const classes = useStyles();
  const context = useContext(ThemeContext)
  
  function load() {
    if (context.loading) {
      return (<div style={{display:"flex", alignItems: "center", justifyContent: "center", padding: "40px"}}><Loading /></div>)
    } else {
      return (
        <>
        {'xs' !== props.width && !context.loading  ?
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.table_head} >Название</StyledTableCell>
                <StyledTableCell align="right">Год</StyledTableCell>
                <StyledTableCell align="right">Цвет</StyledTableCell>
                <StyledTableCell align="right">Статус</StyledTableCell>
                <StyledTableCell align="right">Цена</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {context.data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row" >
                    {row.title}
                    <div>{row.description}</div>
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.year}</StyledTableCell>
                  <StyledTableCell align="justify"><Color color={row.color}></Color></StyledTableCell>
                  <StyledTableCell align="right"><Status status={row.status}></Status></StyledTableCell>
                  <StyledTableCell align="right" style={{width:120, whiteSpace:"nowrap"}}>{`${row.price} руб`}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="text" color="inherit" className={classes.button} onClick={() => context.removeItem(row.id)}>
                      Удалить
                  </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        : <MobileList />}
        </>
      )
    }

  }


  return (
    <>
      <Typography variant="h6" gutterBottom className={classes.title}>
        АВТОМОБИЛИ В НАЛИЧИИ
  </Typography>
  {load() }
    </>
  );
}
export default withWidth()(CustomizedTables);
