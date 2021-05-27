import { Button, Card, CardContent, List, ListItem, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { StaffContext } from "../../providers/staffContext";

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: '5rem'
    },
    cardBody: {
        height: '15rem'
    }
}))

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
                    <h1>Category 1</h1>
                    <Button>Hire Now</Button>
                </CardContent>
            </Card>

            <Card className={clsx(styles.card)}>
                <CardContent className={styles.cardBody}>
                    <h1>Category 1</h1>
                </CardContent>
            </Card>

            <Card className={clsx(styles.card)}>
                <CardContent className={styles.cardBody}>
                    <h1>Category 1</h1>
                </CardContent>
            </Card>
        </div>
    )
}

export default ListStaff;