import { Button, Card, CardContent, CardMedia, FormControl, List, ListItem, makeStyles, MenuItem, Select, Slider, TextField, withStyles } from "@material-ui/core";
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
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
    const [val, setVal] = React.useState(1);

    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();
    const minimalSelectClasses = useMinimalSelectStyles();

    const [keyword, setKeyword] = React.useState("");

    const url = app_config.api_url + '/';

    React.useEffect(() => {

        equipmentService.getAll()
            .then(data => {
                setEquipmentList(data)
                console.log(data);
            });

    }, [])

    const getCategories = () => {
        const categories = new Set();
        for (let eq of equipmentList) {
            categories.add(eq.category);
        }

        console.log(categories);
        return categories;
    }

    const searchProduct = e => {
        equipmentService.getAll()
            .then(data => {
                setEquipmentList(data)
                let newList = data.filter(equipment => (equipment.name.toLowerCase().includes(keyword.toLowerCase())))
                console.log(newList);
                setEquipmentList(newList);
                console.log(data);
            });
    }

    const PriceSlider = withStyles({
        root: {
            color: '#3a8589',
            height: 3,
            padding: '13px 0',
        },
        thumb: {
            height: 27,
            width: 27,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            marginTop: -12,
            marginLeft: -13,
            boxShadow: '#ebebeb 0 2px 2px',
            '&:focus, &:hover, &$active': {
                boxShadow: '#ccc 0 2px 3px 1px',
            },
            '& .bar': {
                // display: inline-block !important;
                height: 9,
                width: 1,
                backgroundColor: 'currentColor',
                marginLeft: 1,
                marginRight: 1,
            },
        },
        active: {},
        track: {
            height: 3,
        },
        rail: {
            color: '#d8d8d8',
            opacity: 1,
            height: 3,
        },
    })(Slider);

    function SliderThumb(props) {
        return (
            <span {...props}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </span>
        );
    }

    const iconComponent = (props) => {
        return (
            <ExpandMoreIcon className={props.className + " " + minimalSelectClasses.icon} />
        )
    };

    const menuProps = {
        classes: {
            paper: minimalSelectClasses.paper,
            list: minimalSelectClasses.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };


    const renderOptions = () => {
        return (
            <Card>
                <CardContent>
                    <p>Category</p>
                    <hr />
                    <FormControl className="w-100">
                        <Select
                            disableUnderline
                            classes={{ root: minimalSelectClasses.select }}
                            MenuProps={menuProps}
                            IconComponent={iconComponent}
                            value={val}
                            onChange={e => { setVal(e.target.value) }}
                        >
                            <MenuItem value={0}>Principle</MenuItem>
                            <MenuItem value={1}>Sketch</MenuItem>
                            <MenuItem value={2}>Photoshop</MenuItem>
                            <MenuItem value={3}>Framer</MenuItem>
                        </Select>
                    </FormControl>

                    <p className="mt-4">Price</p>
                    <hr />
                    <PriceSlider
                        ThumbComponent={SliderThumb}
                        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                        defaultValue={[20, 40]}
                    />
                </CardContent>
            </Card>
        )
    }

    return (
        <div>
            <h1 className="text-center">List Equipments</h1>
            <div className="col-md-11 mx-auto">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        {renderOptions()}
                    </div>
                    <div className="col-md-8">
                        <Card className="mb-5">
                            <CardContent>
                                <div className="input-group w-100">
                                    <input className="form-control" value={keyword} onChange={e => { setKeyword(e.target.value) }} />
                                    <div className="input-group-append">
                                        <Button onClick={searchProduct}>Search</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
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
            </div>
        </div>
    )
}

export default ListEquipments;