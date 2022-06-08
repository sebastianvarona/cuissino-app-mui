const axios = require('axios');

const getMenus = async (setMenus, setMenusList, setCategory, id) => {
  let uid = id || '';
  let businessId = 'DJ0qEKoclZtVdJB';
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/menus`, {
      responseType: 'json',
      params: {
        businessId: businessId,
        id: uid,
      },
    });
    let categories = [];
    let menuData = [];
    for (const menu of response.data) {
      categories.push(menu.name);
      const items = Object.values(menu.items);
      for (const menuItem of items) {
        menuItem.category = menu.name;
        menuData.push(menuItem);
      }
    }
    setCategory(categories[0]);
    setMenus(categories);
    setMenusList(menuData);
  } catch (error) {
    console.error(error);
  }
};

export { getMenus };
