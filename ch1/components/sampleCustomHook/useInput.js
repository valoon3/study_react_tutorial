import {useCallback, useState} from "react";

// custom Hook
export default (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return [value, handler];
}