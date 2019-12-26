import React, {Component} from 'react';
import Item from './todo-item';

class List extends Component {
    generate_list(list, cb) {
        return list.map((k) => {
                // alert(v.name);
                return (
                    <div>
                        <Item
                            name={k.name}
                            num={k.num}
                            cb={cb}
                        />
                    </div>
                );
            }
        );
    }

    render() {
        return this.generate_list(this.props.list, this.props.remove_item_callback);
    }
}

export default List;
