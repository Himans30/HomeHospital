import { Button, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { EquipmentContext } from "../../providers/equipmentContext";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import cssClasses from "../cssClasses";
import { Link } from "react-router-dom";

const ManageEquipment = props => {

    const equipmentService = useContext(EquipmentContext);
    const [equipmentList, setEquipmentList] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseClasses = cssClasses();

    const fetchUsers = () => {
        equipmentService.getAll()
            .then(data => {
                console.log(data);
                setEquipmentList(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const deleteUser = (id) => {
        equipmentService.deleteEquipment(id)
            .then(res => {
                console.log(res);
                fetchUsers();
            })
    }

    return (
        <div className="col-md-10 mx-auto">
            <Card className={baseClasses.card}>
                <CardContent>
                    <h1>Manage Equipments</h1>
                    {
                        equipmentList.map((equipment, index) => {
                            if (!loading) {
                                return (
                                    <Accordion key={index}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>{equipment.name}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <h5>{equipment.description}</h5><br />
                                            <h5>{equipment.features}</h5><br />
                                            <h5>{equipment.price}</h5><br />

                                            <Button varaint="outline">Update</Button>
                                            <Button varaint="outline" color="secondary" onClick={e => deleteUser(equipment._id)}>Delete</Button>

                                        </AccordionDetails>
                                    </Accordion>
                                )
                            } else {
                                return;
                            }

                        })
                    }

                    <Button>
                        <Link to="/app/listequipments">View on Page</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>

    )
}

export default ManageEquipment;