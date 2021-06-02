import { createContext } from "react";
import app_config from "../config";

export const OrderContext = createContext();

export const OrderProvider = props => {

    const url = app_config.api_url + '/order';


    const addOrder = data => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        return fetch(url + '/add', requestOptions)
            .then(response => response.json());
    }

    const updateOrder = (id, data) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        return fetch(url + '/update/' + id, requestOptions)
            .then(response => response.json());
    }

    const getOrderByUser = id => {

        return fetch(url + '/getbyuser/' + id)
            .then(response => response.json());
    }


    const toProvide = {
        addOrder,
        updateOrder,
        getOrderByUser
    }

    return (
        <OrderContext.Provider value={toProvide}>
            {props.children}
        </OrderContext.Provider>
    )

}