import {post, get} from '../utils/http'

export function addCodeExample(data){
    return post('code/addExample',data);
}

export function getCodeExample(id){
    return get('code/example/'+id);
}