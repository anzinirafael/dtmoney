import { useEffect } from 'react';
import { api } from '../../services/api';
import {
    Container
} from './style';

interface Props {
    title: string;
    price: string;
    category: string;
    date: string;
    type: 'up' | 'down';
}

export function TransactionsTable({title, price, category, date, type} : Props){
    useEffect(() => {
        api.get('/transactions').then(response => console.log(response.data))
    }, []);
    return(
        <Container type={type}>
            <td className="title">{title}</td>
            <td className="price">{price}</td>
            <td className="category">{category}</td>
            <td className="date">{date}</td>
        </Container>
    )
}