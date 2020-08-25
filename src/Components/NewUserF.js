import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewUserF extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            permission: ""
        }
    }

    inputchange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value });
    }

    sendData = () => {
        const item = {};
        item.id = uuidv4();;
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permission = this.state.permission;
        this.props.newUser(item)
    }
    hienThiFormThemMoiUser = () => {
        if (this.props.displayState === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header text-center">Thêm mới người dùng</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.inputchange(event)} name="name" className="form-control" aria-describedby="helpId" placeholder="Tên User" /></div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.inputchange(event)} name="phone" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" /></div>
                                <div className="form-group">
                                    <select className="custom-select" onChange={(event) => this.inputchange(event)} name="permission">
                                        <option value={4}>Chọn quyền </option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Cộng Tác Viên</option>
                                        <option value={3}>Dân thường</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-primary btn-block" onClick={() => this.sendData()} value="Thêm mới"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        return (
            <div >

                {this.hienThiFormThemMoiUser()}
            </div>

        );
    }
}

export default NewUserF;