import Connection from "./Connection";

const getAll = async () => {
  const response = await Connection.get(`projects?populate=*`);
  return response;
};

const findOne = async (slug: string) => {
  const response = await Connection.get(
    `slugify/slugs/project/${slug}?populate[blocks][populate]=*`
  );
  return response;
};

const ApiProject = {
  getAll,
  findOne,
};

export default ApiProject;
