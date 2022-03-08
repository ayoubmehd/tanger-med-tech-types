interface GlobalSetting {
  _id: string;
  maxPeriod: Date;
  pricePerHour: number;
}

type GlobalSettingInput = Omit<GlobalSetting, "_id">;
