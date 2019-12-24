import React, {Component} from 'react';
import Item from './todo-item';

class List extends Component {
    generate_list(list) {
        return list.map((k) => {
                // alert(v.name);
                return (
                    <div>
                        <Item
                            name={k.name}
                            num={k.num}
                        />
                    </div>
                );
            }
        );
    }

    render() {
        return this.generate_list(this.props.list);
    }
}

export default List;
