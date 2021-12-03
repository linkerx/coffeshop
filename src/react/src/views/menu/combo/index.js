import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct, changeCombo } from 'actions/order/order';
import './styles.scss';

const Combo = (props) => {

    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();

    let item = Object.assign(props.item);
    const showMinus = typeof(order.products[item.id]) !== 'undefined';
    let count = 0;
    if(showMinus) {
        count = order.products[item.id].count;
    }

    let original_price = 0;
    let discount_price = 0;
    let images = [];
    var found_message = "You can change (";
    item.child.forEach((child) => {
        original_price = parseFloat(original_price) + (parseFloat(child.price)*child.combo.count);
        discount_price = parseFloat(discount_price) + ((parseFloat(child.price) - (parseFloat(child.price)*(item.discount/100)))*child.combo.count);
        images.push({image: child.image, count: child.combo.count})
        found_message += child.combo.count + " X " + child.name + " ";
    })
    found_message += ") for a (" + item.name + ") combo and save " + item.discount + "%.";

    let found = false;
    if(typeof(item.found) !== 'undefined') {
        found = item.found;
    }

    item.price = discount_price;

    return (
        <div className='combo'>
            {found && 
                <div className='found' title={found_message}>
                    <i className="fas fa-exclamation-triangle" onClick={() => {
                        if(window.confirm(found_message + "\n\nDo you want to make the change?")) {
                            dispatch(changeCombo(item));
                        }
                    }}></i>
                </div>
            }
            <div className='image'>
                <ul>
                    { images && images.map((img,index) => {
                        let liStyle={width: (100/images.length)+'%'};
                        return (
                        <li key={index} style={liStyle}>
                            <ul>
                            {
                                Array.from(Array(img.count), (e, i) => {
                                    let imgStyle= {height: (100/img.count)+'%'}
                                    return <li key={i} style={imgStyle}><img src={img.image} /></li>
                                })
                            }
                            </ul>
                        </li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className='name'>{item.name}</div>
            <div className='price'>
                <div className='original_price'>{'$' + parseFloat(original_price).toFixed(2)}</div>
                <div className='discount_price'>{'$' + parseFloat(discount_price).toFixed(2)}</div>
            </div>
            <i onClick={() => dispatch(addProduct(item))} className="add-product fas fa-plus"></i>
            {showMinus && <i onClick={() => dispatch(removeProduct(item))} className="remove-product fas fa-minus"></i>}
            <div className='count'>{count}</div>
            { item.discount > 0 &&
              <div className='discount'>{item.discount}% discount!</div>  
            }
        </div>
    )
}

export default Combo;
