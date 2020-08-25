import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            name: this.props.data.name,
            phone: this.props.data.phone,
            permission: this.props.data.permission
        }
    }

    updateUser = () => {
        this.props.changeState();
        this.props.update(this.state)
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="col-12">
                <form>
                    <div className="card border-primary mb-3">
                        <div className="card-header text-center ">Sửa thông tin người dùng</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" defaultValue={this.props.data.name} /></div>
                            <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} name="phone" className="form-control" defaultValue={this.props.data.phone} /></div>
                            <div className="form-group">
                                <select defaultValue={this.props.data.permission} onChange={(event) => this.isChange(event)} className="custom-select" name="permission">
                                    <option value={4}>Chọn quyền </option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Cộng Tác Viên</option>
                                    <option value={3}>Dân thường</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-warning btn-block" onClick={() => this.updateUser()} value="Cập nhật"></input>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditUser;