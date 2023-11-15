import axios from "axios";

class PCInstance {
  constructor(host) {
    this.host = host;
  }

  async getAllPC() {
    try {
      const options = {
        method: "GET",
        url: `${this.host}/allPcs`,
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updatePC({ id, isAvailable, inputUserName }) {
    try {
      const options = {
        method: "PUT",
        url: `${this.host}/update/${id}`,
        data: { isAvailable, inputUserName },
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default PCInstance;
