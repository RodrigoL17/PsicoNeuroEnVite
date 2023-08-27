export interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export interface Servicio {
  title: string;
  img_src?: string;
  description: string;
  duration: number;
  max_duration?: number;
  mode: string;
}

export type Servicios = Array<Servicio>;
