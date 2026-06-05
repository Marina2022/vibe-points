export interface SelectedCity {
  value: string;        // "Москва"
  fias_id?: string;
  kladr_id?: string;
  region?: string;
  country?: string;
  data?: {
    city?: string;
  }
}


export interface SelectedAddress {
  value: string;
  fias_id?: string;
  kladr_id?: string;
  country?: string;
  region?: string;
  city?: string;
  street?: string;
  house?: string;
  postal_code?: string;
  geo_lat?: string;
  geo_lon?: string;
}

export type RegisterFormValues = {
  last_name: string;
  first_name: string;
  pat_name: string;
  email: string;
  phone: string;
  city: string;
  birthday: string;
  telegram?: string;
};