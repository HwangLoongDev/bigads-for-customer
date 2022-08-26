import { Component, useState } from "react";
import { View, Button, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TextInput, StyleSheet } from 'react-native';
import * as Style from './../../styles';
import { SimpleAnimation } from 'react-native-simple-animations';

export class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayPhoneInput: 'block',
            displayPassInput: 'none'
        };
    }

    getOTP() {
        this.setState({
            displayPhoneInput: 'none',
            displayPassInput: 'block'
        })
    }

    navigateToDashboard() {
        const { navigation } = this.props;
        navigation.navigate('Dashboard', { name: 'Jane' })
    }

    render() {

        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={loginStyle.loginContainer}>
                        <SimpleAnimation animate={true} delay={300} duration={1000} movementType="spring" staticType="bounce">
                            <Image
                                style={loginStyle.logo}
                                source={require('../../assets/logo-login.png')}
                            />
                        </SimpleAnimation>

                        <SimpleAnimation style={{ display: this.state.displayPhoneInput }} animate={true} delay={300} duration={1000} movementType="slide" direction="right" distance={1000}>
                            <TextInput placeholder="Số điện thoại" keyboardType="numeric" clearButtonMode="while-editing" style={loginStyle.input} />
                        </SimpleAnimation>

                        <SimpleAnimation style={{ display: this.state.displayPassInput }} animate={true} delay={300} duration={1000} movementType="slide" direction="left" distance={1000}>
                            <TextInput placeholder="OTP" keyboardType="numeric" clearButtonMode="while-editing" style={loginStyle.input} />
                        </SimpleAnimation>
                        {/* <TextInput placeholder="Password" caretHidden={true} style={loginStyle.input} /> */}
                        <Button
                            //style={{ display: this.state.displayPhoneInput }}
                            title="Lấy mã OTP"
                            onPress={() =>
                                this.getOTP()
                            }
                        />
                        {/* <Button style={{ display: this.state.displayPassInput }}
                            title="Đăng nhập"
                            onPress={() =>
                                this.getOTP()
                            }
                        /> */}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const loginStyle = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10%',
        ...Style.color.backgroundBlue50,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 32,
    },
    input: {
        height: 60,
        fontSize: 24,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#9E9E9E',
        borderRadius: '50%',
        padding: 10,
        width: '100%',
        textAlign: 'center',
        minWidth: 300,
        maxWidth: 400,
        marginBottom: 16,
    }
});