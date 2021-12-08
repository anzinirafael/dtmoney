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
    return(
        <Container type={type}>
            <strong className="title">{title}</strong>
            <strong className="price">{price}</strong>
            <strong className="category">{category}</strong>
            <strong className="date">{date}</strong>
        </Container>
    )
}