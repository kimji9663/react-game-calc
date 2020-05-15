import React, { Component } from 'react';
import ItemInfo from '../ItemInfo/ItemInfo';
import classNames from 'classnames/bind';
import styles from './ItemInfoList.module.scss';

const cx = classNames.bind(styles);

class ItemInfoList extends Component {
    static defaultProps = {
        data: []
    } //data의 초기값을 정해준다.

    render() {
        const { data, onRemove, onUpdate } = this.props; //data를 props로 받는다. 비구조화 할당을 통해 레퍼런스를 만들어 줌

        //if (!data) return null; //만약 data 값이 없으면 중단

        console.log('rendering list');
        
        const list = data.map(
            info => (<ItemInfo onRemove={onRemove} onUpdate={onUpdate} info={info} key={info.id} />)
        );
        return (
            <div className={cx('box')}>
                {list}
            </div>
        );
    }
}

export default ItemInfoList;