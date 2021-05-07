import { Button, Card, CardContent, CardMedia, List, ListItem, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { EquipmentContext } from "../../providers/equipmentContext";
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 304,
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
}));

const ListEquipments = () => {

    const equipmentService = React.useContext(EquipmentContext);
    const [equipmentList, setEquipmentList] = React.useState([])

    const styles = useStyles();
    const mediaStyles = useWideCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();

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

                                    <div className="col-md-3" key={equipment._id}>
                                        <Card className={clsx(styles.root, shadowStyles.root)}>
                                            <CardMedia
                                                classes={mediaStyles}
                                                image={
                                                    'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
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
                                                            Buy Now <ChevronRightRounded />
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