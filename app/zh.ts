import {ZH_NAMES} from './zh-names';
/** 返回解剖结构的标准中文名;词典未收录时回退显示原名。 */
export function zh(name:string|undefined|null):string{
 if(!name)return '';
 return ZH_NAMES[name.toLowerCase()]??name;
}
