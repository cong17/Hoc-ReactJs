import React, { Component } from 'react';

class TableDataRow extends Component {
    checkPermission = (id) => {
        if (+id === 1) {
            return "Admin"
        }
        else if (+id === 2) {
            return "Cộng tác viên"
        }
        else
            return "Dân thường"
    }
    editUser = () => {
        this.props.editUser()
    }
    deleteBntClick = (id) => {
        this.props.deleteUser(id);
    }
    checkIsEdit = () => {
        if (this.props.displayBtnEdit === false)
            return (
                <div className="btn-group">
                    <div onClick={() => this.editUser()} className="btn btn-warning">
                        <i className="fa fa-edit">Sửa</i>
                    </div>
                    <div className="btn btn-danger" onClick={() => this.deleteBntClick(this.props.id)} >
                        <i className="fa fa-trash">Xóa</i>
                    </div>
                </div>
            )
        else
            return (
                <div className="btn-group">
                    <div className="btn btn-danger disabledbutton " >
                        <i className="fa fa-trash">Xóa</i>
                    </div>
                </div>
            )
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.checkPermission(this.props.permission)}</td>
                <td>
                    {this.checkIsEdit()}
                </td>
            </tr>
        )
    }
}

export default TableDataRow;