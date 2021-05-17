import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import { createRef, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import app_config from "../../config";
import { EquipmentContext } from "../../providers/equipmentContext";
import cssClasses from "../cssClasses";
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    image: {
        margin: 'auto'
    }
}));

const EquipmentDetails = () => {

    const classes = useStyles();
    const [equipmentData, setEquipmentData] = useState({});
    const equipmentService = useContext(EquipmentContext);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const wrapper = createRef();
    const url = app_config.api_url + '/';

    useEffect(() => {

        equipmentService.getEquipmentById(id)
            .then(data => {
                console.log(data);
                setEquipmentData(data);
                setLoading(false);
            })
    }, [])

    const handleClose = () => {
        setLoading(false);
    };

    return (
        <div className="col-md-10 mx-auto" >
            <h2 className="text-center">Options</h2>
            <hr />

            <div className="row">
                <div className="col-md-6">
                    <img src={`${url}${equipmentData.avatar}`} className={clsx(cssClasses.image, "img-fluid")} />
                </div>
                <div className="col-md-6">
                    <h3>{equipmentData.name}</h3>
                    <p>{equipmentData.description}</p>
                    <p>{equipmentData.features}</p>
                    <h1>{equipmentData.price}</h1>
                </div>
            </div>

            <Backdrop ref={wrapper} className={classes.backdrop} open={loading} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}


export default EquipmentDetails;