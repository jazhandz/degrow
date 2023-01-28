const Constants = {
  api: "https://david-portfolio-strapi.herokuapp.com/api/",
};

const API_KEY =
  "fd97b8c6c06d05ba1da71db16e3866c581a1cefdcc35cb386a07709809de81273b128bce64342b29cd407e6fcbb8ae33b04a70573434cc5a6902ac80fdd0e5bdf81335fa5ed560e911764acb3630a950c70bcf09b49fd5182db2a1328387b1ffbabc6bb27a370f76a1b07086df44e217d2db632173ca489c9dd676c474a824e3";

const Connection = {
  getAny: async (path: string, settings?: object) => {
    const response = await fetch(path, {
      method: "GET",
      ...(settings ? settings : {}),
    });
    await checkError(response);
    return response.json();
  },
  get: async (path: string, settings?: object) => {
    const response = await fetch(`${Constants.api}${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      ...(settings ? settings : {}),
    });
    console.log("ftch: ", `${Constants.api}${path}`, settings);
    await checkError(response);
    return response.json();
  },
  post: async (path: string, body?: object, settings?: object) => {
    const response = await fetch(`${Constants.api}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
      ...(settings ? settings : {}),
    });
    console.log("pst: ", `${Constants.api}${path}`, body);
    await checkError(response);
    return response.json();
  },
  delete: async (path: string, body?: object, settings?: object) => {
    const response = await fetch(`${Constants.api}${path}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
      ...(settings ? settings : {}),
    });
    await checkError(response);
    return response.json();
  },
  patch: async (path: string, body?: object, settings?: object) => {
    const response = await fetch(`${Constants.api}${path}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
      ...(settings ? settings : {}),
    });
    await checkError(response);
    return response.json();
  },
};

export default Connection;

const checkError = async (response: any) => {
  if (response.status !== 200) {
    const er: any = new Error();
    er.status = response.status;
    const responseJson = await response.json();
    console.log("error: ", responseJson, response.status);
    if (responseJson?.message) {
      er.message = responseJson.message;
      throw er;
    } else if (responseJson?.error) {
      er.message = responseJson.error;
      throw er;
    } else {
      er.message = "Error with request";
      throw er;
    }
  }
};
