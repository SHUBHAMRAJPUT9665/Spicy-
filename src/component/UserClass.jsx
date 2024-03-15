import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo:{
          name:'not found',
        },
    }
  }
  async componentDidMount(){
    const data = await fetch('https://api.github.com/users/SHUBHAMRAJPUT9665');
    const jsonData = await data.json();
    console.log(jsonData)
    this.setState({
      userInfo: jsonData,
    })
  }
  
  render() {
    const {name} = this.state.userInfo 
    const {bio} = this.state.userInfo
    const {avatar_url} = this.state.userInfo

    return (
      <div className="mt-10 w- full h-60 bg-orange-500 text-xl font-medium  flex justify- items-center flex-col">
        <h2>Name:{name}</h2>
        <h3>{this.props.location}</h3>
        <h4>Contact: 9665768968</h4>
        <h4>{bio}</h4>
        <img  className="h-20 rounded-full" src={avatar_url} alt="" />
      </div>
    );
  }
}
export default UserClass ;
