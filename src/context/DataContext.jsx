import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({ serviceSection: null, imageTextSection: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local cache first
    const cached = localStorage.getItem("sectionsData");
    if (cached) {
      setData(JSON.parse(cached));
      setLoading(false);
      return;
    }

    // Otherwise, fetch from GitHub
    const urls = {
      serviceSection: "https://raw.githubusercontent.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES_1/main/db.json",
      imageTextSection: "https://raw.githubusercontent.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES/main/imagetextSection.json"
    };

    async function fetchData() {
      try {
        const [serviceRes, imageRes] = await Promise.all([
          fetch(urls.serviceSection),
          fetch(urls.imageTextSection)
        ]);
        const [serviceSection, imageTextSection] = await Promise.all([
          serviceRes.json(),
          imageRes.json()
        ]);
        const newData = { serviceSection, imageTextSection };
        setData(newData);
        localStorage.setItem("sectionsData", JSON.stringify(newData)); // cache for next loads
      } catch (err) {
        console.error("Error fetching section data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useSectionData = () => useContext(DataContext);
