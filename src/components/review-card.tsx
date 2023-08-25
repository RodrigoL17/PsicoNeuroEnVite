import { type Review } from "../types";
import { RatingStars } from "./rating-stars";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

interface Props {
  review: Review;
}

export const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <Card color="transparent" shadow={false} className="w-full px-20 h-full flex justify-center">
      <div className="bg-white rounded-md p-6">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="xl"
            variant="circular"
            src={review.profile_photo_url}
            alt={`Avatar of ${review.author_name}`}
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h4" color="blue-gray">
                {review.author_name}
              </Typography>
              <div className="5 flex items-center gap-0">
                <RatingStars rating={review.rating} />
              </div>
            </div>
            <Typography className="text-gray-500">
              {review.relative_time_description}
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography className=" text-lg">{review.text}</Typography>
        </CardBody>
      </div>
    </Card>
  );
};
