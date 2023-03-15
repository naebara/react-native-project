import React, {useEffect, useState} from "react";

const ContactContext = React.createContext( );

const ContactProvider = (props: any) => {
    const [contactInfo, setContactInfo] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then(res => res.users)
            .then((data) => {
                    data = data.slice(0,2);

                    setContactInfo(data)
                }
            )
            .catch((error) => console.error(error));
    }, []);
    return (
        <ContactContext.Provider value={{contactInfo, setContactInfo}}>
            {props.children}
            </ContactContext.Provider>
    )
}

export {ContactContext, ContactProvider}