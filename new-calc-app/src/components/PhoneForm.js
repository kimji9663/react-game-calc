import React, { Component } from 'react';

class PhoneForm extends Component {
    input = React.createRef();

    state = {
        name: '', // = value={this.state.name}
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            // onChange가 실행되는 e.target은 input이므로, 그 하위 값 value를 넣어 줌 
            // name: e.target.value,
            // phone: e.target.value,
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        // this.props.onCreate({
        //     name: this.state.name,
        //     phone: this.state.phone,
        // });
        this.setState({
            name: '',
            phone: '',
        })
        this.input.current.focus();
    }

    render() {
        return (
            //단일 태그로 감싸주어야 함. form이던 div던 상관없이.
            <form onSubmit={this.handleSubmit}>
                {/* input이 여러개 일 때에는 name값을 지정해서 handleChange 값을 변경한다. */}
                <input 
                    placeholder="이름" 
                    name="name" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                    ref={this.input}
                />
                <br />
                <input 
                    placeholder="전화번호" 
                    name="phone" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <br />
                <button type="submit">등록</button>
                <br />
                <br />
                <br />
                {this.state.name}
                <br />
                {this.state.phone}
            </form>
        );
    }
}

export default PhoneForm;