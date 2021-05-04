import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import app_config from "../config";

export const EquipmentContext = createContext();

export const EquipmentProvider = props => {

    const url = app_config.api_url + '/equipment';


    useEffect(() => {



    }, [])

    const addEquipment = data => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        return fetch(url + '/add', requestOptions)
            .then(response => response.json());
    }

    const getEquipmentById = id => {

        return fetch(url + '/getbyid/' + id)
            .then(response => response.json());
    }

    const getAll = () => {

        return fetch(url + '/getall')
            .then(response => response.json());
    }


    const toProvide = {

        addEquipment,
        getEquipmentById,
        getAll
    }

    return (
        <EquipmentContext.Provider value={toProvide}>
            {props.children}
        </EquipmentContext.Provider>
    )

}