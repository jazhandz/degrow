import Connection from "./Connection";

const findOne = async (slug: string) => {
  const response = await Connection.get(
    `slugify/slugs/page/${slug}?populate[blocks][populate]=*`
  );
  return response;
};

const ApiPages = {
  findOne,
};

export default ApiPages;
