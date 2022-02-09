import { Rating as RatingProtocols } from "../../protocols/rating";

type RatingProps = {
  rating: RatingProtocols
}

export function Rating({ rating: { rate, count } }: RatingProps) {
  return <div></div>;
}
