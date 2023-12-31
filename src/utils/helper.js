export const filterData= (searchText, restaurants)=>{
    const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.data?.name
      ?.toLowerCase()
      .includes(searchText?.toLowerCase())
  );

  return filteredData;

}


