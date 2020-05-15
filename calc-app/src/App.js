import React, { Component } from 'react';
import ItemForm from './components/ItemForm/ItemForm';
import ItemInfoList from './components/ItemInfoList/ItemInfoList';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

class App extends Component {

  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        Item: '010-0000-0001'
      },
      {
        id: 1,
        name: '김00',
        Item: '010-0000-0002'
      },
      {
        id: 2,
        name: '이∆∆',
        Item: '010-0000-0003'
      }
    ], //name, Item
    keyword: '',
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
    //console.log(information); //name, Item 원래 값
    //console.log(data); //name, Item 새로운 값
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ...data, //name: data.name, Item: data.Item,
            }
          }
          return info;
        }
      )
    })
  }
  
  render() {
    return (
      <div className={cx('App')}>
        <div className={cx('box', 'red')}>
          <ItemForm onCreate={this.handleCreate}></ItemForm>
          <input onChange={this.handleChange} value={this.state.keyword} placeholder="검색..." />
          <ItemInfoList 
            data={this.state.information.filter(
              info => info.name.indexOf(this.state.keyword) > -1 //indexOf: 주어진 값과 일치하는 값의 인덱스를 반환
            )} //name, Item
            onRemove={this.handleRemove}
            onUpdate={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
