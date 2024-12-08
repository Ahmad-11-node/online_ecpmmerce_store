

const FilterReducer  = (state, action) => {

    switch(action.type) {

        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }

        case "SET_GRID_VIEW":
                return {
                  ...state,
                  grid_view: true,
                };

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };  
            
        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
              ...state,
              sorting_value: action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            let tempSortProduct = [...action.payload]

            if(state.sorting_value === "a-z") {
                newSortData = tempSortProduct.sort((a, b) => a.name.localeCompare(b.name))
            }
            return {
                ...state,
                filter_products: newSortData,
            }
        
        default:
            return state;
    }

}

export default FilterReducer 