import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './ItemForm.module.scss';

const cx = classNames.bind(styles);

class ItemForm extends Component {
    input = React.createRef();

    state = {
        name: '', // = value={this.state.name}
        Item: '',
    }

    handleChange = (e) => {
        this.setState({
            // onChange가 실행되는 e.target은 input이므로, 그 하위 값 value를 넣어 줌 
            // name: e.target.value,
            // Item: e.target.value,
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        // this.props.onCreate({
        //     name: this.state.name,
        //     Item: this.state.Item,
        // });
        this.setState({
            name: '',
            Item: '',
        })
        this.input.current.focus();
    }

    render() {
        return (
            //단일 태그로 감싸주어야 함. form이던 div던 상관없이.
            <form onSubmit={this.handleSubmit} className={cx('form')}>
                {/* input이 여러개 일 때에는 name값을 지정해서 handleChange 값을 변경한다. */}
                <input 
                    placeholder="이름" 
                    name="name" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                    ref={this.input}
                    className={cx('input')}
                />
                <br />
                <input 
                    placeholder="전화번호" 
                    name="Item" 
                    onChange={this.handleChange}
                    value={this.state.Item}
                    className={cx('input')}
                />
                <br />
                <button type="submit" className={cx('button')}>등록</button>
                <br />
                <br />
                <br />
                {this.state.name}
                <br />
                {this.state.Item}
            </form>
        );
    }
}

export default ItemForm;