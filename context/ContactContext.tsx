/*
* Acest cod definește un context pentru informațiile de contact ale utilizatorilor, împreună cu un furnizor care returnează aceste informații și le face disponibile în întreaga aplicație.
Furnizorul efectuează o cerere către un API pentru a obține informațiile de contact ale utilizatorilor și le stochează într-un state.
Contextul ContactProvider este încărcat la nivelul părintelui din ierarhia componentelor React și poate fi accesat de copii acestuia, folosind hook-ul useContext.*/

import React, {useEffect, useState} from "react";

const ContactContext = React.createContext();

export interface ContactInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

const ContactProvider = (props: any) => {
    const [contactInfo, setContactInfo] = useState<ContactInfo[]>([])

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then(res => res.users)
            .then((data: ContactInfo[]) => {
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