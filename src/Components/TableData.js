import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    renderTableDataUser = () => this.props.dataUser.map((value, index) => (
        <TableDataRow displayBtnEdit={this.props.displayBtnEdit}
            editUser={() => this.props.editUser(value)}
            name={value.name}
            phone={value.phone}
            key={index}
            stt={index}
            permission={value.permission}
            id={value.id}
            deleteUser={(id) => this.props.deleteUser(id)}
        ></TableDataRow>
    ))




    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-default">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableDataUser()}


                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;