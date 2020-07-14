import { post } from "../utils/http";

export function addDocument(data){
    return post("/document/addDoc",data)
}