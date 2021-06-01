import { Button, Card, CardContent, List, ListItem, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { StaffContext } from "../../providers/staffContext";


const useStyles = makeStyles(() => ({
    root: {
        margin: 'auto',
        boxShadow: 'none',
        borderRadius: 0,
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
    cardImg: {
        height: '10rem'
    },
    card: {
        marginTop: '5rem'
    },
    cardBody: {
        height: '15rem'
    }
}));

const ListStaff = () => {

    const staffService = React.useContext(StaffContext);
    const [staffList, setStaffList] = React.useState([])

    const styles = useStyles();

    React.useEffect(() => {

        staffService.getAll()
            .then(data => {
                setStaffList(data)
                console.log(data);
            });

    }, [])

    return (
        <div className="col-md-11 mx-auto">
            <h1 className="text-center">List Staff</h1>

            <Card className={clsx(styles.card)}>
                <CardContent className={styles.cardBody}>
                    <h1>Newborn Baby and Mother Care</h1>
                    <Link to="/app/liststaff"> Hire Now</Link>
                </CardContent>
            </Card>

            <Card className={clsx(styles.card)}>
                <CardContent className={styles.cardBody}>
                    <h1>Nursing</h1>
                    <Link to="/app/serviceform"> Hire Now</Link>

                </CardContent>
            </Card>

            <Card className={clsx(styles.card)}>
                <CardContent className={styles.cardBody}>
                    <h1>Critical Care</h1>
                    <Button>Hire Now</Button>
                </CardContent>
            </Card>

        </div>
    )
}

export default ListStaff;