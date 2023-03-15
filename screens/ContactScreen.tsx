import {Text, View} from "react-native";
import React, {useContext} from "react";
import {ContactContext, ContactProvider} from "../context/ContactContext";
import { Card } from "react-native-elements";
const ContactScreen = () => {
    const {contactInfo, setContactInfo} = useContext(ContactContext);
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
                    <Card.Image source={{uri: 'https://st.depositphotos.com/2010047/2144/i/600/depositphotos_21443135-stock-photo-3d-small-with-a-question.jpg'}}></Card.Image>
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