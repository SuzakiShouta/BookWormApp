import { create } from "axios";

const KajiLibraryApi = () => {
  const axios = create({
    baseURL: "https://server.bigbell.dev/api",
    // baseURL: "http://localhost:5000",
    withCredentials: false,
  });

  const books = {}
  const borroweds = {}
  const users = {}

  borroweds.getWhereHasReturned = async (hasReturned) => {
    try {
      const result = await axios({
        method: "get",
        url: "/borroweds",
        params: {
          'filter[where][hasReturned]': hasReturned,
        }
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  borroweds.getBorrowedsList = async () => {
    try {
      const result = await axios({
        method: "get",
        url: "/borroweds",
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  books.getById = async (id) => {
    try {
      const result = await axios({
        method: "get",
        url: "/books/" + id,
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  books.getBooksList = async (id) => {
    try {
      const result = await axios({
        method: "get",
        url: "/books",
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  books.getBooksLimitList = async (offset, limit) => {
    try {
      const result = await axios({
        method: "get",
        url: "/books",
        params: {
          'filter[skip]': offset,
          'filter[limit]': limit,
        }
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  books.getBooksLimitListByFilter = async (offset, limit, filter) => {
    try {
      const result = await axios({
        method: "get",
        url: "/books",
        params: {
          'filter[skip]': offset,
          'filter[limit]': limit,
          filter: JSON.stringify(filter)
        }
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  books.findByFilter = async (filter) => {
    try {
      const result = await axios({
        method: "get",
        url: "/books",
        params: {
          filter: JSON.stringify(filter)
        }
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  users.getById = async (id) => {
    try {
      const result = await axios({
        method: "get",
        url: "/users/" + id,
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  books.hasReturnedById = async (id) => {
    try {
      const result = await axios({
        method: "get",
        url: "/books/" + id + "/borroweds",
        params: {
          'filter[where][hasReturned]': 'false',
        }
      });
      return result.data.length > 0 ? false : true;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  borroweds.getById = async (id) => {
    try {
      const result = await axios({
        method: "get",
        url: "/books/" + id + "/borroweds/",
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  return {
    books,
    borroweds,
    users,
  };
}

export default KajiLibraryApi;