import { useState } from "react";

const useDataPicker =(initialState) => {
    const [data, setData] = useState(initialState);

    const dataHandler = (prop, value)=>{
        setData(data=>({
            ...data,
            [prop]: value
        }))
    }

    const reset =()=> setData(initialState);

    return [data, dataHandler, reset];
}
export default useDataPicker;


