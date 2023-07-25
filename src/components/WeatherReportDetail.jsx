import React from "react";
import { useParams } from "react-router-dom";

const WeatherReportDetail = () => {

    const {id} = useParams()
    console.log(id)

    return (
        <div>
            
        </div>
    )
}

export default WeatherReportDetail;