import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchF extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: ""
        }
    }
    chekcDisplayFormEdit = () => {
        if (this.props.displayFormEditState === true) {
            return <EditUser data={this.props.dataUserUpdate} update={(data) => this.props.update(data)} changeState={() => this.props.changeStateDisplayFormEdit()}></EditUser>
        }
    }
    checkDislay = () => {
        if (this.props.displayState === false) {
            return (<div className="btn btn-info ml-4" onClick={() => this.props.changeStateDisplay()}>Thêm mới</div>)
        }
        else return (<div className="btn btn-info ml-4" onClick={() => this.props.changeStateDisplay()}>Đóng lại</div>)

    }
    isChange = (event) => {
        const value = event.target.value
        this.setState({
            temp: value
        })
        this.props.seachUser(this.state.temp)
    }
    render() {
        return (

            <div className="col-12">

                <div className="form-group pl-3">
                    <div className="btn-group">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="fsearch" id="fsearch" aria-describedby="helpId" placeholder="Nhập tên tài khoản" style={{ width: '500px' }} />
                    </div>
                    <div className="btn btn-info" onClick={() => this.props.seachUser(this.state.temp)}>Tìm kiếm</div>
                    {this.checkDislay()}
                </div>
                <div className="row">
                    {this.chekcDisplayFormEdit()}
                </div>
            </div>


        );
    }
}

export default SearchF;