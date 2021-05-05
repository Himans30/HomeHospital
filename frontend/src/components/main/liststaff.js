import { Card, CardContent, List, ListItem } from "@material-ui/core";
import React from "react";
import { StaffContext } from "../../providers/staffContext";

const ListStaff = () => {

    const staffService = React.useContext(StaffContext);
    const [staffList, setStaffList] = React.useState([])

    React.useEffect(() => {

        staffService.getAll()
            .then(data => {
                setStaffList(data)
                console.log(data);
            });

    }, [])

    return (
        <div>
            <h1 className="text-center">List Staff</h1>

            <Card>
                <CardContent>
                    <List>
                        <ListItem>

                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}

export default ListStaff;