import axios from "axios";


axios.defaults.baseURL = 'http://localhost:4000/'
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("access_token")}`}

export type CommentAddForm = {
    comment: string;
    rate: number;
    id: number;
    email: string;
};
export type CoffeeId = {
    data: number;
};

export const addComment = (values: CommentAddForm, coffeeId: CoffeeId) => {
    axios.post('http://localhost:4000/comments/', {
        comment: values.comment,
        rate: values.rate,
        coffeeId: coffeeId.data,
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};

export const getComments = async (coffeeId: any) => {
    return await axios.get('http://localhost:4000/comments/' + coffeeId.data );
};
