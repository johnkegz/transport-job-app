
export type DateDataType = {
  start: string;
  end: string;
}

export type AdressDataType = {
  administrative_area: string;
  country_code: string;
  locality: string;
  line_1: string;
  postal_code: string;
}

export type RewardDataType = {
  amount: number;
  currency: string;
}

export type JobsDataType = {
  id: number;
  max_volume_m3: number;
  pickup: DateDataType;
  pickup_address: AdressDataType;
  delivery: DateDataType;
  delivery_address: AdressDataType;
  reward: RewardDataType;
}

export type JobDetailsDataType = {
  item: JobsDataType;
  handleBack: () => void;
}

export type CardDataType = {
  item: JobsDataType;
  handleDetails: (item: JobsDataType) => void;
}

export type DetailsType = {
  key: string;
  parameter: string | number;
}

export type CreateDetailsType = {
  key: string;
  parameter: string | number;
}

export type DetailsSectionType = {
  data: DetailsType[];
  title: string;
}
