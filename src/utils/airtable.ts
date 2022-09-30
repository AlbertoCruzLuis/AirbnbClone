import Airtable from "airtable";

import { envConfig } from "@/config/EnvConfig";

Airtable.configure({ apiKey: envConfig.airtableConfig.apiKey });

const base = Airtable.base(envConfig.airtableConfig.baseId as string);

const getMinifiedRecord = (record: any) => {
  return {
    ...record.fields,
  };
};

export const minifyRecords = (records: any) => {
  return records.map((record: any) => getMinifiedRecord(record));
};

export const table = {
  apartaments: base("apartaments"),
};
