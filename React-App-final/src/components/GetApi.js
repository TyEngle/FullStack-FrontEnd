import axios from "axios";

const instance = axios.create({
  baseURL: "https://mocki.io/v1/3363fcc3-ba18-4fdb-a5dc-9175f4ded02e",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "example.com",
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
  },
});

export default {
  getData: () =>
    instance({
      method: "GET",
      url: "/query",
      params: {
        search: "parameter",
      },
      transformResponse: [
        function (data) {
          // Do whatever you want to transform the data
          console.log("Transforming data...");

          const json = JSON.parse(data);

          // list of nested object keys
          const dates = Object.keys(json["nested object"]);

          data = {
            dates,
          };

          return data;
        },
      ],
    }),
};
