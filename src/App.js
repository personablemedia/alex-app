import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state={users:[{}]};
    this.getUsers=this.getUsers.bind(this);
    this.saveUser=this.saveUser.bind(this);
    this.savePasswd=this.savePasswd.bind(this);
    this.saveBiz=this.saveBiz.bind(this);
  }

  saveUser(e) {
    console.log('saveuser called');
    e.preventDefault();
  }

  savePasswd() {
  }

  saveBiz() {
  }



  getUsers() {
    fetch("/api/users")
    .then((data) => data.json())
    .then((users) => {
        console.log(JSON.stringify(users));
        this.setState({users:users});
        console.log(users[0].first_name);

        //$("#userdump").text(JSON.stringify(users));
        //return fetch("/api/emails_by_user");
      })
      //.then(..)
    }


  render() {
    return (

      <div className="formwrapper">
        <form>

          <fieldset className="passwdReset">
            <h2>Password</h2>
            <label>Previous:<input name="prevPasswd" /></label><br/>
            <label>New:<input name="newPasswd" /></label><br/>
            <label>New Again:<input name="newPasswd2" /></label><br/>
            <button onClick={this.savePasswd}>Save</button>
          </fieldset>


          <fieldset className="userInfo">
            <h2>User Info For 'biz.name'</h2>
            <label>Name:<input name="userName" /></label><br/>
            <label>Email:<input name="userEmail" /></label><br/>
            <label>Phone:<input name="userPhone" /></label><br/>
            <button onClick={this.saveUser}>Save</button>
          </fieldset>

          <fieldset className="bizInfo">
            <h2>Business Info For 'biz.name'</h2>
            <label>Logo:<input name="logo" /></label><br/>
            <label>Address:<input name="address1" /></label><br/>
            <label>Line 2:<input name="address2" /></label><br/>
            <label>City:<input name="city" /></label><br/>
            <label>State:<input name="state" /></label><br/>
            <label>Zip:<input name="zip" /></label><br/>
            <button onClick={this.saveBiz}>Save</button>
          </fieldset>


        </form>
      </div>
      // <div>
      //     <header>
      //       <h1>Welcome to Email Management v1</h1>
      //     </header>
      //     <p>Select an email list you want to edit.</p>
      //
      //       <section id="client-list">
      //         <div id="userdump"></div>
      //
      //
      //         <h2>Client One: {this.state.users[0].first_name} {this.state.users[0].last_name}</h2>
      //         <p>Client email contact: {this.state.users[0].email}</p>
      //         <ul>
      //           <li><strong>List One</strong> <a href="">Newsletter</a></li>
      //           <li><strong>List Two</strong> <a href="">Blog Subscribers</a></li>
      //         </ul>
      //         <h2>Client Two</h2>
      //           <p>Write a short paragraph or two about the client</p>
      //           <ul>
      //             <li><strong>List One</strong> <a href="">Newsletter</a></li>
      //             <li><strong>List Two</strong> <a href="">Blog Subscribers</a></li>
      //           </ul>
      //       </section>
      //       <button onClick={this.getUsers}> Users! </button>
      //     </div>

    );
  }
}

export default App;
