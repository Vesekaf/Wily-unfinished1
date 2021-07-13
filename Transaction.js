import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

import firebase from "../Config.js"


export default class Transaction extends React.Component{


    constructor(){

        super();

        this.state = {

            hasCameraPermisions: null, 
            scanned: false, 
            scanData: '',  
            buttonState: 'normal',

        }

    }

    getCameraPermissions = async () => {

        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({

            // status === grantedIsTrue status === grantedIsFalse
            hasCameraPermisions: status = 'granted', 
            buttonState: 'clicked',

        })

    }

    handleBarCodeScan = async ({type, data}) => {


        this.setState({

            scanned: true, 
            scanData: data, 
            buttonState: 'normal'

        })


    }

    handleTransaction = () =>{



    }


    



    render(){

        const hasCameraPermisions = this.state.hasCameraPermisions;

        const scanned = this.state.scanned; 
        const buttonState = this.state.buttonState;

        if(buttonState === 'clicked' && hasCameraPermisions){

            return(

                <BarCodeScanner style = {StyleSheet.absoluteFillObject} onBarCodeScanned = {scanned ? undefined: this.handleBarCodeScan} />

            )
            

        }

        else if(buttonState ==='normal'){

            return(
                
                <View style = {styles.container} >
                
                    <View>
                        
                        <Image source = {require("../assets/booklogo.jpg")} /> 
                        <Text>Wily</Text>
                    </View>
                    <View>
                        <TextInput style = {styles.inputBox} 
                                    placeholder = "bookId"
                                    value = {this.state.scannnedBookId} />  
    
                    <View>
                        <TouceableOpacity
                            style = {styles.scanButton}
                            onPress = {this.getCameraPermissions("BookId")}
                            >
                                <Text
                                     style ={styles.buttonText}>
                                Scan</Text>
                        </TouceableOpacity>
                    </View>

                    <View>

                        <TextInput style = {styles.inputBox} 
                                        placeholder = "studentId"
                                        value = {this.state.scannedStudentId} />  

                    </View>

                    <View>

                        <TouceableOpacity
                                style = {styles.scanButton}
                                onPress = {this.getCameraPermissions("StudentId")}
                                >
                                    <Text
                                        style ={styles.buttonText}>
                                    Scan</Text>
                        </TouceableOpacity>

                    </View>
                    <View>

                        <TouchableOpacity 
                            style = {styles.submitButton}
                        ><Text style = {styles.submitText} >Submit</Text></TouchableOpacity>

                    </View>

                    </View>
                </View>
            );

        }      
    }
}



    
const styles = StyleSheet.create({




    container: {
 
 
      flex: 1,
 
 
      justifyContent: 'center',
 
 
      alignItems: 'center'
 
 
    },
 
 
    displayText:{
 
 
      fontSize: 15,
 
 
      textDecorationLine: 'underline'
 
 
    },
 
 
    scanButton:{
 
 
      backgroundColor: '#2196F3',
 
 
      padding: 10,
 
 
      margin: 10
 
 
    },
 
 
    buttonText:{
 
 
      fontSize: 15,
 
 
      textAlign: 'center',
 
 
      marginTop: 10
 
 
    },
 
 
    inputView:{
 
 
      flexDirection: 'row',
 
 
      margin: 20
 
 
    },
 
 
    inputBox:{
 
 
      width: 200,
 
 
      height: 40,
 
 
      borderWidth: 1.5,
 
 
      borderRightWidth: 0,
 
 
      fontSize: 20
 
 
    },
 
 
    scanButton:{
 
 
      backgroundColor: '#66BB6A',
 
 
      width: 50,
 
 
      borderWidth: 1.5,
 
 
      borderLeftWidth: 0
 
 
    }, 
    submitButton: {

        backgroundColor: 'red', 
        justifyContent: 'center', 
        alignItems: 'center', 


    }, 
    submitButton: {

        textAlign: 'center',
        fontSize: 15, 

    }
 
 
  });
 
 