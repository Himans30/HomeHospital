import { Button, Card, CardContent, CardMedia, List, ListItem, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { EquipmentContext } from "../../providers/equipmentContext";
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { Link } from "react-router-dom";
import app_config from "../../config";


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
    }
}));

const ListEquipments = () => {

    const equipmentService = React.useContext(EquipmentContext);
    const [equipmentList, setEquipmentList] = React.useState([])

    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();

    const url = app_config.api_url + '/';

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
            <div className="col-md-10 mx-auto">
                <Card>
                    <CardContent>
                        <div className="row">
                            {
                                equipmentList.map(equipment => (

                                    <div className="col-md-3 mt-5" key={equipment._id}>
                                        <Card className={clsx(styles.root, shadowStyles.root)}>
                                            <CardMedia
                                                classes={mediaStyles}
                                                image={
                                                    url + equipment.avatar
                                                }
                                            />
                                            <CardContent className={styles.content}>
                                                <TextInfoContent
                                                    classes={textCardContentStyles}
                                                    overline={'March 20, 2019'}
                                                    heading={equipment.name}
                                                    body={
                                                        equipment.description
                                                    }
                                                />
                                                <div className="row">
                                                    <div className="col">
                                                        <Button color={'primary'} fullWidth className={styles.cta}>
                                                            <Link to={`/app/equipmentdetails/${equipment._id}`}>Buy Now</Link> <ChevronRightRounded />
                                                        </Button>
                                                    </div>
                                                    <div className="col">
                                                        <Button color={'primary'} fullWidth className={styles.cta}>
                                                            Rent Now <ChevronRightRounded />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default ListEquipments;