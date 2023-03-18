// Acest fisier definesc un ecran de contact care utilizeaza un context ContactContext pentru a afisa informatii despre utilizatorii disponibili.
// ContactScreen utilizeaza useContext hook pentru a accesa contactInfo, o lista de obiecte ContactInfo din ContactContext.
// Lista este apoi afisata utilizand React Native Elements Card component pentru fiecare obiect ContactInfo.

import {Text, View} from "react-native";
import React, {useContext} from "react";
import {ContactContext, ContactInfo, ContactProvider} from "../context/ContactContext";
import { Card } from "react-native-elements";
const ContactScreen = () => {
    const {contactInfo} = useContext(ContactContext);
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: "#f2f2f2",
                    padding: 10,
                    marginBottom: 10,
                }}
            >
                <Text style={{ fontWeight: "bold" }}>
                    This is a contact page. The following users are available to help for
                    any questions:
                </Text>
            </View>
            {contactInfo.map((contact: ContactInfo, index: number) => (
                <Card key={index}>
                    <Card.Image source={{uri: 'https://thumbs.dreamstime.com/b/d-white-man-red-questionmark-computer-generated-image-isolated-68105896.jpg'}}></Card.Image>
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