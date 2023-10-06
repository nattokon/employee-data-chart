import axios from "axios";

const client = axios.create({
    baseURL: "https://dummy.restapiexample.com/api/v1/employees"
})

export async function retrieveData() {
    const response = await client.get().catch((error)=>{
        console.log("Error : ",error.message);
    });
    const data = response.data;
    console.log(data);

    return data;
}