export const reducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const newPeople = [...state.people, action.payload];
        return{
            ...state,
            people: newPeople,
            isModelOpen: true,
            modelContent:"item Added",
        };
    }
    if(action.type === "NO_VALUE"){
        return{
            ...state, isModelOpen:true, modelContent: "Please Enter Value"
        };
    }
    if(action.type === "CLOSE_MODEL"){
        return{...state, isModelOpen:false};
    }
    if(action.type === "REMOVE_ITEM"){
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload
        );
        return{...state,people:newPeople};
    }
    throw new Error("no matching found");
}