import React,{Component} from "react";
import ReactDOM from 'react-dom';

class App extends Component{
  render(){
    return(
      <section style={styles.wrapperStyle}>
        <h1 style={styles.hdrStyle}>neighberboards</h1>
        <article style={styles.smallGap}>neighberboards is the bulletin board for you and your neighbours.</article>
        <article style={styles.smallGap}>just enable location services in order for us to get your location (this is done only once and should be done from home)</article>
        <article style={styles.smallGap}>you can, if you like, give us your phone number, in order to receive and send sms to and from your neighbours.</article>
        <article style={styles.smallGap}>that's all. from here on, you have access to the digital neighbourhood bulletin board. you can post messages and respond to your neighbours messages.</article>
        <article style={styles.smallGap}>enjoy neighberboards is for you</article>
        <article style={styles.largeGap}>to install neighberboards on your android device press <a href="./resources/neighberboards.apk">here</a></article>
      </section>
    )
  }
}
var styles={
  hdrStyle:{fontWeight:"bold",fontFamily:"arial",textAlign:"center"},
  wrapperStyle:{width:"fit-content",maxWidth:"900px",padding:"1em",fontFamily:"arial",fontSize:"1.5em",lineHeight:"1.5em",margin:"auto"},
  largeGap:{margin:"2em 0"}
}

ReactDOM.render(<App/>,document.getElementById("root"));
