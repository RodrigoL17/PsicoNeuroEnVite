import { IconStarFilled } from "@tabler/icons-react";

interface Props {
  rating: number;
}

export const RatingStars: React.FC<Props> = ({ rating }) => {
  const Stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      Stars.push(<IconStarFilled className="text-yellow-300 h-4 w-4" key={i}/>);
    } else {
      Stars.push(<IconStarFilled className="text-gray-300 h-4 w-4" key={i}/>);
    }
  }

  return <div className="flex">{Stars.map((star) => star)}</div>;
};
