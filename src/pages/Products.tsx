import { ProductItem } from '../components/ProductItem';
import productItems from '../data/items.json';
import { Row, Col } from 'react-bootstrap';

export function Products() {
  return (
    <>
      <h1 className='text-center'>Products Page</h1>;
      <Row md={2} xs={1} lg={3} className='g-3'>
        {productItems.map((item) => (
          <Col key={item.id}>
            <ProductItem {...item}/>
          </Col>
        ))}
      </Row>
    </>
  );
}
