import {Text, View} from "react-native";
import React, {useContext} from "react";
import {ContactContext, ContactProvider} from "../context/ContactContext";
const ContactScreen = () => {
    const {contactInfo, setContactInfo} = useContext(ContactContext);
    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{contactInfo.toString()}</Text>
            </View>

    );
};

export default ContactScreen;