import { Botton,CardMedia,MakeStyles,Card, CardContent, List, ListItem, makeStyles, Button } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { StaffContext } from "../../providers/staffContext";
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


const ListStaff = () => {

    const staffService = React.useContext(StaffContext);
    const [staffList, setStaffList] = React.useState([])

    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();

    const url = app_config.api_url + '/';

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
                <div className="row">
                            {
                                staffList.map(staff => (

                                    <div className="col-md-4 mt-5" key={staff._id}>
                                        <Card className={clsx(styles.root, shadowStyles.root)}>
                                            <CardMedia
                                                classes={mediaStyles}
                                                image={
                                                    url + staff.avatar
                                                }
                                            />
                                            <CardContent className={styles.content}>
                                                <TextInfoContent
                                                    classes={textCardContentStyles}
                                                    overline={'March 20, 2019'}
                                                    heading={staff.name}
                                                    body={
                                                       staff.description
                                                    }
                                                />
                                                                                                 
                                                    <div className="col">
                                                        <Button color={'primary'} fullWidth className={styles.cta}>
                                                        <Link to={`/app/staffDetails/${staff._id}`}>Rent Now</Link> <ChevronRightRounded />
                                                        </Button>
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
    )
}

export default ListStaff;