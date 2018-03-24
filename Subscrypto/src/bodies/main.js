
import React, { Component } from 'react';
import{ Panel, ButtonGroup, Button } from 'react-bootstrap';

import * as data from './../data';
import * as firebase from 'firebase';
import * as slots from 'slots';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      createAccount: false,
      loggingIn: false,
      login: {
        email: "",
        password: "",
        ethereumAccount: ""
      }
    };

    this.main = this.main.bind(this)
    this.panel = this.panel.bind(this)
    this.createID = this.createID.bind(this)
    this.login = this.login.bind(this)
  }

  resize = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        if (!firebase.auth().currentUser.displayName) {
          var name = "";
          firebase.auth().currentUser.updateProfile({displayName: name}).then(()=>{
          }).catch(function(error) {
            //error in changing displayname
          });
        }

        if (adminID === firebase.auth().currentUser.uid) {
          this.props.history.push('/admin/');
        } else if (firebase.auth().currentUser.uid) {
          this.props.history.push('/prof/');
        }
      } else {
        this.props.history.push('/main');
      }
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  handleButton(){
    if(this.state.createAccount === true){
      this.createID();
    }
    this.login(); 
  }

  main(){
    return(
      <div>
        <title>Subscrypto Extension</title>
        {/* Latest compiled and minified CSS */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        {/* jQuery library */}
        {/* Latest compiled JavaScript */}	
        <style dangerouslySetInnerHTML={{__html: "\n\t\tbody{\n   \t\t\twidth:300px;\n   \t\t\theight:320px;\n\t\t\tbackground-color: #f2f2f2;\n   \t\t\t}\n\t\t  #logo{\n\t\t\t  margin-top: 20px;\n\t\t\t  margin-bottom: 12px;\n\t\t  } \n\t\t  @font-face {\n    \t\tfont-family: truenoBold;\n    \t\tsrc: url(truenosbdit.otf);\n\t\t  \t}\n\t\t  @font-face {\n    \t\tfont-family: avenirLight;\n    \t\tsrc: url(AvenirLTStd-LightOblique.otf);\n\t\t  \t}\n\t\t  @font-face {\n    \t\tfont-family: avenirBold;\n    \t\tsrc: url(AvenirLTStd-Medium.otf);\n\t\t  \t}\n\t\t  #boton{\n\t\t\t  width:130px;\n\t\t\t  height: 40px;\n\t\t\t  background-color: #c61919 !important;\n\t\t\t  border-color: #c61919 !important;\n\t\t\t  font-family: TruenoBold;\n\t\t\t  margin-top: 3px;\n\t\t\t  margin-left: 5px;\n\t\t\t  \n\t\t  }\n\t\t  #textuno{\n\t\t\t  font-family:avenirLight;\n\t\t\t  text-decoration: underline;\n\t\t\t  padding-top: 8px;\n\t\t  }\n\t\t  #forminput{\n\t\t\t  width:270px;\n\t\t\t  height: 45px;\n\t\t\t  margin-top:0px;\n\t\t\t  margin-bottom:8px;\n\t\t\t\n\t\t  }\n\t\t  #inputlabels{\n\t\t\t  font-family:avenirBold;\n\t\t\t  font-weight: bold;\n\t\t  }\n\t" }} /> 
        <center>
          <img src="lineal.png" width={280} id="logo" />
        </center>	
        <center>	
          <table>
            <tbody><tr>
                <td> <p id="inputlabels"> Email </p> </td>
              </tr>
              <tr>
                <td><input type="email" id="forminput" className="form-control" aria-describedby= "emailHelp" placeholder= "Enter email addrss" onChange={(e)=> this.setState({login: {...this.state.login, email: e.target.value}})}/> </td>
              </tr>
              <tr>
                <td> <p id="inputlabels"> Password </p> </td>
              </tr>
              <tr>
                <td>
                  <input className="form-control" id="forminput" placeholder="Password" onChange={(e)=> this.setState({login: {...this.state.login, ethereumAccount: e.target.value}})}/>
                </td>
              </tr>              
            </tbody></table>	
          <table>
            <tbody><tr>
                <td> 
                  <a href="slots.html"> 
                    <button type="button" className="btn btn-primary btn-lg btn-block" id="loginButton" onClick={()=>{this.setState({loggingIn : true, createAccount : false}).then(this.handleButton())}}>LOGIN</button>
                  </a>	
                </td>
                <td> <button type="button" className="btn btn-primary btn-lg btn-block" id="SignUpButton" onClick={()=>{this.setState({loggingIn : false, createAccount : true}).then(this.handleButton())}}>SIGN UP</button></td>
              </tr>	
            </tbody></table>
          <p id="textuno"> I forgot my password</p>	
        </center>  	
      </div>
    
  )
  }

  createID(type) {
    firebase.auth().createUserWithEmailAndPassword(this.state.login.email, this.state.login.password).then((this.login())=>{
    }).catch(function(error) {
      alert(error);
    });
  }

  login(){
    if(this.state.login.email.length < 1) {
      alert("Please enter your account information or create an account");
      return;
    }

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(
    firebase.auth().signInWithEmailAndPassword(this.state.login.email,this.state.login.password).catch((error)=>alert(error +"... Try loggin in again!"))
    ).catch((error)=>alert(error +"... Try loggin in again!"));
  }

}

export default Main
