import {Text, View} from "react-native";
import React, {useContext} from "react";
import {ContactContext, ContactProvider} from "../context/ContactContext";
import { Card } from "react-native-elements";
const ContactScreen = () => {
    const {contactInfo, setContactInfo} = useContext(ContactContext);
    return (
        <View style={{ flex: 1 }}>
            {contactInfo.map((contact, index: number) => (
                <Card key={index}>
                    <Card.Title>{`${contact.firstName} ${contact.lastName}`}</Card.Title>
                    <Card.Divider />
                    <Text>Email: {contact.email}</Text>
                    <Text>Phone: {contact.phone}</Text>
                </Card>
            ))}
        </View>
    );
};

export default ContactScreen;