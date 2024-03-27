import { useEffect } from "react";
import { useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resData, setResData] = useState([]);
    useEffect(() => {
      const fetchMenu = async () => {
        try {
          const response = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.997454&lng=73.789803&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setResData(data);
        } catch (error) {
          console.error("Error fetching restaurant data:", error);
        }
      };
      fetchMenu();
    }, [resId]);
  
    return resData;
  };

  export default useRestaurantMenu;