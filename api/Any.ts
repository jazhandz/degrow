import Connection from "./Connection";

const getRequest = async (path: string) => {
  const response = await Connection.getAny(path);
  return response;
};

const exports = {
  getRequest,
};

export default exports;
