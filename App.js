import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image,Alert, TouchableOpacity,} from 'react-native';

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <View style={styles.container}>
         <Image source={require("./assets/favicon.png")} />
         <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
          </View>
          <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.forgot_button}>Signup</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    
    backgroundColor: "#465881",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
      color:"white",
      fontSize:15,
    
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    fontSize:30,
    height:50,
    fontWeight:'bold',
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
},
});
