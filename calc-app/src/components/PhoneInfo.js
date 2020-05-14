import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    
    handleToggleEdit = () => {
        const { info, onUpdate } = this.props; //onUpdate = handleUpdate (App.js)
        if (this.state.editing) { //editing모드일 때 : 새 값으로 업데이트
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone //handleUpdate(id, data)
            }); 
        } else {
            this.setState({
                name: info.name, //아닐 때 : 기존 값 넣어주기
                phone: info.phone
            });
        }
        this.setState({
            editing: !this.state.editing, //현재 값을 반전시킨다. true <-> false
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, phone } = this.props.info; //info는 name과 phone
        const { editing } = this.state;
        
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        console.log(name);

        return (
            <div style={style}>
                {
                    editing ? ( //true 이면
                        <Fragment>
                            <div><input name="name" onChange={this.handleChange} value={this.state.name} /></div>
                            <div><input name="phone" onChange={this.handleChange} value={this.state.phone} /></div>
                        </Fragment>
                    ) : ( //false 이면
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;