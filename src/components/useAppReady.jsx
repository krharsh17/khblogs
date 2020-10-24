import {useEffect, useState} from "react";

export const useAppReady = () => {
    const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        setAppReady(true)
    })

    return appReady
}