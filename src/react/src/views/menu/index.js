import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMealTypes } from 'actions/products/mealTypes';
import { getProducts, getCombos, setFoundCombo, setNotFoundCombo } from 'actions/products/products';

import Product from './product';
import Combo from './combo';

import './styles.scss';

const Menu = () => {
    const [filter, setFilter] = useState({mealTypeId: 0});
    const mealTypes = useSelector((state) => state.mealTypes);
    const products = useSelector((state) => state.products);
    const combos = useSelector((state) => state.combos);
    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMealTypes());
        dispatch(getCombos());
    },[dispatch])

    useEffect(() => {
        if(mealTypes.length > 0) {
            setFilter({mealTypeId: mealTypes[0].id})
        }
    },[mealTypes])

    useEffect(() => {
        dispatch(getProducts(filter));
    },[dispatch, filter])

    useEffect(() => {
        combos.forEach((combo) => {
            let found = true;
            combo.child.forEach((child) => {
                if (typeof(order.products_bill[child.id]) !== 'undefined') {
                    if(order.products_bill[child.id].count < child.combo.count) {
                        found = false;
                    }
                } else {
                    found = false;
                }
            })
            if(found) {
                dispatch(setFoundCombo(combo.id));
            } else {
                if (typeof(combo.found) !== 'undefined' && combo.found) {
                    dispatch(setNotFoundCombo(combo.id));
                }
            }
        });
    },[order])

    return(
        <section id='menu'>
            <div className='combos-list'>
                { combos.map((item) => {
                    return <Combo key={item.id} item={item} />
                })}
            </div>
            <nav className='sections'>
                <ul>
                    { mealTypes.map((item) => {
                        let count = 0;
                        if(typeof(order.byType[item.id]) !== 'undefined') {
                            count = order.byType[item.id];
                        }
                        if(item.id === filter.mealTypeId) {
                            return <li key={item.id} className='active'>{item.name} {count > 0 && <span>({count})</span>}</li>
                        } else {
                            return <li key={item.id} onClick={ () => {setFilter({mealTypeId: item.id})} } >{item.name} {count > 0 && <span>({count})</span>}</li>
                        }

                    })}
                </ul>
            </nav>
            <div className='product-list'>
                { products.map((item) => {
                    return <Product key={item.id} item={item} />
                })}
            </div>
            <div className='images-credits'>
                All products images extracted from <a href="http://www.freepik.com">freepik</a>
            </div>
        </section>
    );

}

export default Menu;
