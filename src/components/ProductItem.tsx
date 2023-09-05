import { Card, Button } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function ProductItem({ id, name, price, imgUrl }: ProductItemProps) {
    const quantity  = 0;
  return (
    <Card className="h-100 shadow">
      <Card.Img variant="top" src={imgUrl} style={{ objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-around align-items-baseline mb-4">
          <span className="fs-2 fw-bold">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto text-center">
          <Button className="btn bg-success fs-6">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
