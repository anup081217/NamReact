export default function filterData(searchinput,resturants) {
    const filterData =
    // resturants.filter((resturant) => resturant.card.card.info.name.includes(searchinput) 
    resturants.filter((resturant) => resturant.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.toLowerCase().includes(searchinput.toLowerCase())

    // resturants.filter((resturant) => resturant.info.resturants.includes(searchinput)
    )
    return filterData;
}