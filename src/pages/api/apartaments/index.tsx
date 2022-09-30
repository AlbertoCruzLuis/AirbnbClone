import type { NextApiRequest, NextApiResponse } from "next";

import { minifyRecords, table } from "@/utils/airtable";

const getApartaments = async (res: NextApiResponse): Promise<void> => {
  const apartamentsRaw = await table.apartaments
    .select({
      view: "Grid view",
      filterByFormula: "AND(NOT({status} = ''), SEARCH({status}, 'Active'))",
    })
    .all();

  const apartaments = minifyRecords(apartamentsRaw);

  res.status(200).json(apartaments);
};

const createApartament = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    title,
    imageUrl,
    price,
    accommodationType,
    bedrooms,
    beds,
    bathrooms,
    zipCode,
    country,
    province,
  } = req.body;

  const apartament = await table.apartaments.create([
    {
      fields: {
        title,
        imageUrl,
        price,
        accommodationType,
        bedrooms,
        beds,
        bathrooms,
        zipCode,
        country,
        province,
      },
    },
  ]);

  res.status(200).json(apartament);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const requestType = req.method;

  switch (requestType) {
    case "GET": {
      getApartaments(res);
      break;
    }

    case "POST": {
      createApartament(req, res);
      break;
    }

    default:
      res.send({ message: "error" });
      break;
  }
}
