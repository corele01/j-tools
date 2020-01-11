import { get} from '../utils/http'
export function format(json){
    return get('json/format?json='+json)
}