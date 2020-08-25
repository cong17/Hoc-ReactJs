import React from 'react';


import Header from './Header';
import SearchF from './SearchF';
import TableData from './TableData';
import NewUserF from './NewUserF';

import dataUser from "./db.json"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      displayFormEdit: false,
      dataUser: [],
    }
  }

  componentWillMount() {
    //kiem tra du lieu
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(dataUser))
    }
    else {
      const temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({ dataUser: temp })
    }
  }

  changeStateDisplay = () => {
    this.setState({ display: !this.state.display })
  }
  changeStateDisplayFormEdit = () => {
    this.setState({ displayFormEdit: !this.state.displayFormEdit })
  }
  seachUser = (userName) => {
    const arrFinded = [];
    const dataUserLocal = JSON.parse(localStorage.getItem("userData"))
    console.log();
    for (let i = 0; i < dataUserLocal.length; i++) {
      const ele = dataUserLocal[i];
      if (ele.name.indexOf(userName) !== -1) {
        arrFinded.push(ele)
      }
    }
    this.setState({ dataUser: arrFinded })
  }
  createnewUser = (data) => {
    const items = this.state.dataUser;
    items.push(data)
    this.setState({
      dataUser: items
    })
    localStorage.setItem("userData", JSON.stringify(items));
  }


  editUser = (user) => {
    this.changeStateDisplayFormEdit();
    this.setState({ dataUserUpdate: user })

  }

  updateUser = (user) => {
    this.state.dataUser.forEach(element => {
      if (element.id === user.id) {
        element.name = user.name;
        element.phone = user.phone;
        element.permission = user.permission;

      }
    });
    localStorage.setItem("userData", JSON.stringify(this.state.dataUser));
  }
  deleteUser = (id) => {
    const kq = this.state.dataUser.filter(user => user.id !== id)
    this.setState({ dataUser: kq });
    localStorage.setItem("userData", JSON.stringify(kq));
  }
  render() {

    return (
      <div className="">
        <Header></Header>
        <div className="form-tim-kiem">
          <div className="container">
            <div className="row">
              <SearchF update={(data) => this.updateUser(data)} dataUserUpdate={this.state.dataUserUpdate} changeStateDisplayFormEdit={() => this.changeStateDisplayFormEdit()} displayFormEditState={this.state.displayFormEdit} displayState={this.state.display} changeStateDisplay={() => this.changeStateDisplay()} seachUser={(value) => this.seachUser(value)}></SearchF>

              <TableData
                displayBtnEdit={this.state.displayFormEdit}
                dataUser={this.state.dataUser}
                editUser={(user) => this.editUser(user)}
                deleteUser={(id) => { this.deleteUser(id) }}
              ></TableData>

              <NewUserF displayState={this.state.display} newUser={(data) => this.createnewUser(data)}></NewUserF>
            </div>

          </div></div>
      </div>
    );
  }


}

export default App;
