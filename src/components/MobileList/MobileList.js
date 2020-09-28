import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ThemeContext } from '../../Context/Context'
import Color from '../Color/Color'
import Status from '../Status/Status'

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
        background: "#282D30",
        color: "#fff",
        borderRadius: "20px",
        fontSize: "14px",
        padding: "5px 14px",
        marginLeft: "auto"
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

export default function App() {
    const classes = useStyles();
    const context = useContext(ThemeContext)

    return (
        <div className="container">
            {context.data.map(item => (
                <Card key={item.id} className="card" style={{ borderBottom: "1px solid grey" }}>
                    <CardContent style={{ width: "100%", backgroundColor: "#F5F6F6" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", paddingBottom: 10 }}>
                            <Typography component="p" variant="body1" style={{ width: "50%", fontSize: "15px" }}>
                                {item.title}
                            </Typography>
                            <Color color={item.color}></Color>
                            <Typography variant="subtitle1" style={{ whiteSpace: "nowrap" }} >
                                {`${item.price} руб`}
                            </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", paddingBottom: 10 }}>
                            <Typography variant="subtitle1" style={{ width: "100%", fontSize: "13px", color: "#8B8B8B" }} >
                                {item.description}
                            </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                            <Typography variant="subtitle1" style={{ whiteSpace: "nowrap" }}>
                                {item.year}
                            </Typography>
                            <Typography variant="subtitle1" style={{ whiteSpace: "nowrap", fontSize: "15px", paddingLeft: 10 }} >
                                <Status status={item.status}></Status>
                            </Typography>
                            <Button variant="text" color="inherit" className={classes.button} onClick={() => context.removeItem(item.id)}>
                                Удалить
                                </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

