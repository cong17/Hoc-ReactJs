(this.webpackJsonpth2=this.webpackJsonpth2||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),c=(a(14),a(1)),o=a(2),l=a(4),m=a(3),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{className:"display-4"},"Font-end With ReactJs")))}}]),a}(n.Component),p=a(5),d=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).updateUser=function(){n.props.changeState(),n.props.update(n.state)},n.isChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(p.a)({},t,a))},n.state={id:n.props.data.id,name:n.props.data.name,phone:n.props.data.phone,permission:n.props.data.permission},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-12"},r.a.createElement("form",null,r.a.createElement("div",{className:"card border-primary mb-3"},r.a.createElement("div",{className:"card-header text-center "},"S\u1eeda th\xf4ng tin ng\u01b0\u1eddi d\xf9ng"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",onChange:function(t){return e.isChange(t)},name:"name",className:"form-control",defaultValue:this.props.data.name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",onChange:function(t){return e.isChange(t)},name:"phone",className:"form-control",defaultValue:this.props.data.phone})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{defaultValue:this.props.data.permission,onChange:function(t){return e.isChange(t)},className:"custom-select",name:"permission"},r.a.createElement("option",{value:4},"Ch\u1ecdn quy\u1ec1n "),r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"C\u1ed9ng T\xe1c Vi\xean"),r.a.createElement("option",{value:3},"D\xe2n th\u01b0\u1eddng"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"reset",className:"btn btn-warning btn-block",onClick:function(){return e.updateUser()},value:"C\u1eadp nh\u1eadt"}))))))}}]),a}(n.Component),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).chekcDisplayFormEdit=function(){if(!0===n.props.displayFormEditState)return r.a.createElement(d,{data:n.props.dataUserUpdate,update:function(e){return n.props.update(e)},changeState:function(){return n.props.changeStateDisplayFormEdit()}})},n.checkDislay=function(){return!1===n.props.displayState?r.a.createElement("div",{className:"btn btn-info ml-4",onClick:function(){return n.props.changeStateDisplay()}},"Th\xeam m\u1edbi"):r.a.createElement("div",{className:"btn btn-info ml-4",onClick:function(){return n.props.changeStateDisplay()}},"\u0110\xf3ng l\u1ea1i")},n.isChange=function(e){var t=e.target.value;n.setState({temp:t}),n.props.seachUser(n.state.temp)},n.state={temp:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group pl-3"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("input",{onChange:function(t){return e.isChange(t)},type:"text",className:"form-control",name:"fsearch",id:"fsearch","aria-describedby":"helpId",placeholder:"Nh\u1eadp t\xean t\xe0i kho\u1ea3n",style:{width:"500px"}})),r.a.createElement("div",{className:"btn btn-info",onClick:function(){return e.props.seachUser(e.state.temp)}},"T\xecm ki\u1ebfm"),this.checkDislay()),r.a.createElement("div",{className:"row"},this.chekcDisplayFormEdit()))}}]),a}(n.Component),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).checkPermission=function(e){return 1===+e?"Admin":2===+e?"C\u1ed9ng t\xe1c vi\xean":"D\xe2n th\u01b0\u1eddng"},e.editUser=function(){e.props.editUser()},e.deleteBntClick=function(t){e.props.deleteUser(t)},e.checkIsEdit=function(){return!1===e.props.displayBtnEdit?r.a.createElement("div",{className:"btn-group"},r.a.createElement("div",{onClick:function(){return e.editUser()},className:"btn btn-warning"},r.a.createElement("i",{className:"fa fa-edit"},"S\u1eeda")),r.a.createElement("div",{className:"btn btn-danger",onClick:function(){return e.deleteBntClick(e.props.id)}},r.a.createElement("i",{className:"fa fa-trash"},"X\xf3a"))):r.a.createElement("div",{className:"btn-group"},r.a.createElement("div",{className:"btn btn-danger disabledbutton "},r.a.createElement("i",{className:"fa fa-trash"},"X\xf3a")))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.stt+1),r.a.createElement("td",null,this.props.name),r.a.createElement("td",null,this.props.phone),r.a.createElement("td",null,this.checkPermission(this.props.permission)),r.a.createElement("td",null,this.checkIsEdit()))}}]),a}(n.Component),E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).renderTableDataUser=function(){return e.props.dataUser.map((function(t,a){return r.a.createElement(f,{displayBtnEdit:e.props.displayBtnEdit,editUser:function(){return e.props.editUser(t)},name:t.name,phone:t.phone,key:a,stt:a,permission:t.permission,id:t.id,deleteUser:function(t){return e.props.deleteUser(t)}})}))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col"},r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",{className:"thead-default"},r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"T\xean"),r.a.createElement("th",null,"\u0110i\u1ec7n tho\u1ea1i"),r.a.createElement("th",null,"Quy\u1ec1n"),r.a.createElement("th",null,"H\xe0nh \u0110\u1ed9ng"))),r.a.createElement("tbody",null,this.renderTableDataUser())))}}]),a}(n.Component),v=a(17),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).inputchange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(p.a)({},t,a))},n.sendData=function(){var e={};e.id=Object(v.a)(),e.name=n.state.name,e.phone=n.state.phone,e.permission=n.state.permission,n.props.newUser(e)},n.hienThiFormThemMoiUser=function(){if(!0===n.props.displayState)return r.a.createElement("div",{className:"col"},r.a.createElement("form",null,r.a.createElement("div",{className:"card border-primary mb-3",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-header text-center"},"Th\xeam m\u1edbi ng\u01b0\u1eddi d\xf9ng"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",onChange:function(e){return n.inputchange(e)},name:"name",className:"form-control","aria-describedby":"helpId",placeholder:"T\xean User"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",onChange:function(e){return n.inputchange(e)},name:"phone",className:"form-control","aria-describedby":"helpId",placeholder:"\u0110i\u1ec7n tho\u1ea1i"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"custom-select",onChange:function(e){return n.inputchange(e)},name:"permission"},r.a.createElement("option",{value:4},"Ch\u1ecdn quy\u1ec1n "),r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"C\u1ed9ng T\xe1c Vi\xean"),r.a.createElement("option",{value:3},"D\xe2n th\u01b0\u1eddng"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"reset",className:"btn btn-primary btn-block",onClick:function(){return n.sendData()},value:"Th\xeam m\u1edbi"}))))))},n.state={id:"",name:"",phone:"",permission:""},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.hienThiFormThemMoiUser())}}]),a}(n.Component),b=a(8),y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeStateDisplay=function(){n.setState({display:!n.state.display})},n.changeStateDisplayFormEdit=function(){n.setState({displayFormEdit:!n.state.displayFormEdit})},n.seachUser=function(e){var t=[],a=JSON.parse(localStorage.getItem("userData"));console.log();for(var r=0;r<a.length;r++){var s=a[r];-1!==s.name.indexOf(e)&&t.push(s)}n.setState({dataUser:t})},n.createnewUser=function(e){var t=n.state.dataUser;t.push(e),n.setState({dataUser:t}),localStorage.setItem("userData",JSON.stringify(t))},n.editUser=function(e){n.changeStateDisplayFormEdit(),n.setState({dataUserUpdate:e})},n.updateUser=function(e){n.state.dataUser.forEach((function(t){t.id===e.id&&(t.name=e.name,t.phone=e.phone,t.permission=e.permission)})),localStorage.setItem("userData",JSON.stringify(n.state.dataUser))},n.deleteUser=function(e){var t=n.state.dataUser.filter((function(t){return t.id!==e}));n.setState({dataUser:t}),localStorage.setItem("userData",JSON.stringify(t))},n.state={display:!1,displayFormEdit:!1,dataUser:[]},n}return Object(o.a)(a,[{key:"componentWillMount",value:function(){if(null===localStorage.getItem("userData"))localStorage.setItem("userData",JSON.stringify(b));else{var e=JSON.parse(localStorage.getItem("userData"));this.setState({dataUser:e})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:""},r.a.createElement(u,null),r.a.createElement("div",{className:"form-tim-kiem"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h,{update:function(t){return e.updateUser(t)},dataUserUpdate:this.state.dataUserUpdate,changeStateDisplayFormEdit:function(){return e.changeStateDisplayFormEdit()},displayFormEditState:this.state.displayFormEdit,displayState:this.state.display,changeStateDisplay:function(){return e.changeStateDisplay()},seachUser:function(t){return e.seachUser(t)}}),r.a.createElement(E,{displayBtnEdit:this.state.displayFormEdit,dataUser:this.state.dataUser,editUser:function(t){return e.editUser(t)},deleteUser:function(t){e.deleteUser(t)}}),r.a.createElement(g,{displayState:this.state.display,newUser:function(t){return e.createnewUser(t)}})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('[{"id":1,"name":"V\u0169 M\u1ea1nh C\xf4ng","phone":"098765432","permission":1},{"id":2,"name":"Iron man","phone":"098765432","permission":2},{"id":5,"name":"QuickSliver","phone":"12314232566","permission":3},{"id":4,"name":"The chosen One","phone":"113","permission":2},{"id":3,"name":"Wonder Woman","phone":"098765432","permission":2}]')},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.b8404034.chunk.js.map