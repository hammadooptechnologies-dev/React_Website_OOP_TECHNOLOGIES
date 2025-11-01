import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchMegaMenuData } from "../utils/api";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const getMenuData = async () => {
      try {
        const data = await fetchMegaMenuData();
        setMenuData(data);
      } catch (error) {
        console.error("Error loading Mega Menu:", error);
      }
    };

    getMenuData();
  }, []);

  // Helper: find readable name from slug
  const getServiceName = (slug) => {
    if (!menuData || !menuData.categories) return slug;

    for (const category in menuData.categories) {
      const foundService = menuData.categories[category].find(
        (s) => s.slug === slug
      );
      if (foundService) return foundService.name;
    }

    // If not found in services, format slug
    return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <div className="bg-white px-10 w-auto h-[62px] absolute bottom-0 right-80 rounded-t-xl z-10 flex items-center justify-center text-black">
      <p className="text-[15px] font-bold flex items-center space-x-1">
        <Link to="/" className="hover:underline">
          Home
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const displayName = getServiceName(name);

          return (
            <span key={name} className="flex items-center space-x-1">
              <span className="text-gray-300 font-extrabold"> / </span>
              {isLast ? (
                <span className="text-[#1b75bb]">{displayName}</span>
              ) : (
                <Link to={routeTo} className="hover:underline">
                  {displayName}
                </Link>
              )}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Breadcrumb;


// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { fetchMegaMenuData } from "../utils/api";

// const Breadcrumb = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);
//   const [menuData, setMenuData] = useState(null);

//   useEffect(() => {
//     const getMenuData = async () => {
//       try {
//         const data = await fetchMegaMenuData();
//         setMenuData(data);
//       } catch (error) {
//         console.error("Error loading Mega Menu:", error);
//       }
//     };
//     getMenuData();
//   }, []);

//   // ✅ Helper: find readable name from slug & add "Development" when needed
//   const getServiceName = (slug) => {
//     if (!menuData || !menuData.categories) return slug;

//     for (const category in menuData.categories) {
//       const foundService = menuData.categories[category].find(
//         (s) => s.slug === slug
//       );
//       if (foundService) {
//         let name = foundService.name.trim();
//         // If name does not already end with "Development" (case insensitive)
//         if (!/development$/i.test(name)) {
//           name += " Development";
//         }
//         return name;
//       }
//     }

//     // Fallback (if not found)
//     let formatted = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
//     if (!/development$/i.test(formatted)) {
//       formatted += " Development";
//     }
//     return formatted;
//   };

//   return (
//     <div className="bg-white px-10 w-auto h-[62px] absolute bottom-0 right-80 rounded-t-xl z-10 flex items-center justify-center text-black">
//       <p className="text-[15px] font-bold flex items-center space-x-1">
//         <Link to="/" className="hover:underline">
//           Home
//         </Link>

//         {pathnames.map((name, index) => {
//           const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;
//           const displayName = getServiceName(name);

//           return (
//             <span key={name} className="flex items-center space-x-1">
//               <span className="text-gray-300 font-extrabold"> / </span>
//               {isLast ? (
//                 <span className="text-[#1b75bb]">{displayName}</span>
//               ) : (
//                 <Link to={routeTo} className="hover:underline">
//                   {displayName}
//                 </Link>
//               )}
//             </span>
//           );
//         })}
//       </p>
//     </div>
//   );
// };

// export default Breadcrumb;
