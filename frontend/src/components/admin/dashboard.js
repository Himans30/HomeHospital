import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import cssClasses from '../cssClasses';
import { Bar } from 'react-chartjs-2';
import { EquipmentContext } from "../../providers/equipmentContext";
import { useContext, useEffect, useState } from "react";

const customStyles = makeStyles(theme => ({
    card: {
        marginTop: '2rem',
        height: '20rem',
    }
}))

const AdminDashboard = props => {

    const baseClasses = cssClasses();
    const customClasses = customStyles();

    const equipmentService = useContext(EquipmentContext);
    const [equipmentList, setEquipmentList] = useState([]);
    const [staffList, setStaffList] = useState([]);
    const [usersList, setusersList] = useState([]);

    const fetchStaff = () => {

    }

    const fetchEquipments = () => {
        equipmentService.getAll()
            .then(data => {
                console.log(data);
                setEquipmentList(data);
            })
    }


    useEffect(() => {
        fetchEquipments();

    }, [])

    const prepareRegData = () => {

    }

    const drawBar = (labels, data, legend) => {

        let options = {
            maintainAspectRatio: false,
        }

        return (
            <Bar data={{
                labels: labels,
                datasets: [{ label: legend, data: data }]
            }}
                options={options} />
        )
    }


    return (
        <div className="col-md-11 mx-auto">
            <div className="row">
                <div className="col-md-6">
                    <Card className={clsx(baseClasses.card, customClasses.card)}>
                        <CardContent>

                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card className={clsx(baseClasses.card, customClasses.card)}>
                        <CardContent>
                            <Typography className={baseClasses.title} color="textSecondary" gutterBottom>
                                Word of the Day
                  </Typography>
                            <Typography className={baseClasses.pos} color="textSecondary">
                                adjective
                  </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                    <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <Card className={clsx(baseClasses.card, customClasses.card)}>
                        <CardContent>
                            <Typography className={baseClasses.title} color="textSecondary" gutterBottom>
                                Word of the Day
                  </Typography>
                            <Typography className={baseClasses.pos} color="textSecondary">
                                adjective
                  </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                    <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-md-7">
                    <Card className={clsx(baseClasses.card, customClasses.card)}>
                        <CardContent>
                            <Typography className={baseClasses.title} color="textSecondary" gutterBottom>
                                Word of the Day
                  </Typography>
                            <Typography className={baseClasses.pos} color="textSecondary">
                                adjective
                  </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                    <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>

            <Card className={clsx(baseClasses.card, customClasses.card)}>
                <CardContent className={baseClasses.card.backgroundColor}>
                    <Typography className={baseClasses.title} color="textSecondary" gutterBottom>
                        Word of the Day
                  </Typography>
                    <Typography className={baseClasses.pos} color="textSecondary">
                        adjective
                  </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                    <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>


        </div>
    )
}

export default AdminDashboard;