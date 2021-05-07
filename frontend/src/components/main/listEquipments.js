import { Card, CardContent, List, ListItem } from "@material-ui/core";
import React from "react";
import { EquipmentContext } from "../../providers/equipmentContext";

const ListEquipments = () => {

    const equipmentService = React.useContext(EquipmentContext);
    const [equipmentList, setEquipmentList] = React.useState([])

    React.useEffect(() => {

        equipmentService.getAll()
            .then(data => {
                setEquipmentList(data)
                console.log(data);
            });

    }, [])

    return (
        <div>
            <h1 className="text-center">List Equipments</h1>

            <Card>
                <CardContent>
                    <List>
                        <ListItem>
                            <div>
                                
                            </div>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}

export default ListEquipments;