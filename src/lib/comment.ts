import axios from "axios";


axios.defaults.baseURL = 'http://localhost:4000/'
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("access_token")}`}

export type CommentAddForm = {
    comment: string;
    rate: number;
    id: number;
    email: string;
};

export const addComment = (values: CommentAddForm, coffeeId: any) => {
    axios.post('http://localhost:4000/660/coffees/' + coffeeId.data + '/comments', {
        comment: values.comment,
        rate: values.rate,
        coffeeId: coffeeId.data,
        email: localStorage.getItem("email")
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};

export const getComments = async (coffeeId: any) => {
    return await axios.get('http://localhost:4000/660/coffees/' + coffeeId.data + '/comments');
};
