import {
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import {Link} from "react-router-dom"

import { type Servicio } from "../types";

export const ServiceCard: React.FC<Servicio> = ({
  title,
  img_src,
  description,
  url_path,
}) => {
 
  return (
    <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-2xl min-w-full">
      <CardBody>
        <img
          src={img_src}
          alt={`Representation of ${title}`}
          className="mb-4 w-20 h-20"
        />
        <Typography
          color="blue-gray"
          className="mb-2 font-primary font-extrabold text-2xl min-h-[64px]"
        >
          {title}
        </Typography>
        <p className="line-clamp-3">{description}</p>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/${url_path}`} className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Más Información
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardFooter>

    </div>
  );
};
