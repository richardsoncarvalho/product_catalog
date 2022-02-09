import { AiFillStar } from "react-icons/ai";
import { Rating as RatingProtocols } from "../../protocols/rating";
import { Container, WrapperContent } from './styles';
import { totalRating } from '../../utils/totalRating';

type RatingProps = {
  rating: RatingProtocols
}

export function Rating({ rating: { rate, count } }: RatingProps) {
  return (
    <Container>
      {totalRating().map(item => (
        item.value <= rate ?
          (<AiFillStar key={item.id} size={20} color="#F8AB03" />) :
          (<AiFillStar key={item.id} size={20} color="rgb(204, 204, 204)" />)
      ))} <WrapperContent>({count})</WrapperContent>
    </Container>
  );
}
