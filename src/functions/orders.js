const axios = require('axios');

const getOrders = async (state, id) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/orders`,
      responseType: 'json',
      params: {
        businessId: 'DJ0qEKoclZtVdJB',
        id: id,
      },
    });
    state(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { getOrders };
