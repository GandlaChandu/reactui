import React, { useState, useEffect } from "react";
import Select from 'react-select'
function SelectOption() {
    const [choose, setchoose] = useState([{name:'Shirisha'},{name:'Ramprasad'},{name:'Shreya'},{name:'Sarthak'},{name:'Abhishek'}])
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    // TODO: Move this logic to Reducers.
    // Handle error case.
    // useEffect(() => {
    //     fetch("http://localhost:3000/UserDetails")
    //         .then(response => response.json())
    //         .then(data => setchoose(data));
    // }, []);

    useEffect(() => {
        const DATA_LENGTH = choose.length;
        const apiOptions = [];
        choose.forEach((element) => {
            let obj = {}
            obj.label = element.name;
            obj.value = element.name;
            apiOptions.push(obj);
        });

        const firstOption = `All Members (${DATA_LENGTH})`;
        apiOptions.unshift({
            label: firstOption,
            value: firstOption,
        });

        setOptions(apiOptions);
        setSelectedValue(firstOption);
    }, [choose]);

    const customStyles = {
        singleValue: (provider) => ({
            ...provider,
            color: '#17045F',
        }),
        indicatorSeparator: () => ({ display: "none" }),
        option: (styles) => ({
            ...styles,
            color: '#666666',
            border: '1px solid #d7d7d7',
            borderRadius: '2px',
            margin: '3px 0px',
            textAlign: 'center',
            backgroundColor: '#F5F5F7',
            "&:hover": {
                ...styles,
                color: 'white',
                backgroundColor: '#0078FF',
            }
        }),
        control: (base) => ({
            ...base,
            fontWeight: '700',
            color: '#17045F',
        })
    };
    return (
        <>
            <Select
                options={options}
                id="select"
                value={options.find((eachOption) => eachOption.value === selectedValue)}
                onChange={(selectedOption) => {
                    setSelectedValue(selectedOption.value);
                }}
                styles={customStyles}
            />
        </>
    )
}
export default SelectOption;