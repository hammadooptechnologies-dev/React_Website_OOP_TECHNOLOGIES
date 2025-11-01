// src/utils/api.js

let cachedMegaMenu = null;

export const fetchMegaMenuData = async () => {
  if (cachedMegaMenu) {
    console.log("🔁 Using cached Mega Menu data");
    return cachedMegaMenu;
  }

  const url =
    "https://my-json-server.typicode.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES/db";

  try {
    console.log("🌐 Fetching Mega Menu data...");
    const response = await fetch(url);
    const data = await response.json();
    cachedMegaMenu = data;
    return data;
  } catch (error) {
    console.error("❌ Error fetching Mega Menu data:", error);
    throw error;
  }
};
