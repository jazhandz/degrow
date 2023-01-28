import Connection from "./Connection";

const findAll = async () => {
  const response = await Connection.get(`project-tags`);
  return response;
};

const ApiProject = {
  findAll,
};

export default ApiProject;
