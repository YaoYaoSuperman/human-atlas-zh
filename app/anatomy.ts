import {ZH_EXPLANATIONS} from './explanations-zh';
export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'骨骼系统',color:'#e2d9ba',description:'骨构成人体的支撑框架,保护脏器,并为肌肉提供附着点。骨组织还储存矿物质并产生血细胞。'},
 {id:'muscular',name:'肌肉系统',color:'#a85b50',description:'骨骼肌通过牵拉附着点产生运动。肌肉与肌腱共同活动关节、稳定姿势并产生热量。'},
 {id:'cardiac',name:'心脏',color:'#b96760',description:'心脏是拥有四个腔室的肌性泵。心脏瓣膜引导血液向前流经肺循环和体循环。'},
 {id:'sensory',name:'感觉器官',color:'#b0c8ce',description:'这些结构参与视觉、听觉与平衡等特殊感觉。其特化组织感受刺激,并与神经系统协同传递信息。'},
 {id:'arterial',name:'动脉',color:'#c05245',description:'心脏驱动血液在循环系统中流动。动脉将血液从心脏输送至全身组织,或在肺循环中把血液送至肺部。'},
 {id:'venous',name:'静脉',color:'#527c9f',description:'静脉将血液输送回心脏。浅静脉与深静脉网络收集来自组织的血液;肺静脉则把含氧血液从肺部送回心脏。'},
 {id:'nervous',name:'神经系统',color:'#d8b565',description:'脑、脊髓与周围神经传递并处理信号,支持感觉、运动、协调,以及对身体功能的自动调节。'},
 {id:'respiratory',name:'呼吸系统',color:'#b98991',description:'气道将空气导入肺部,氧气与二氧化碳在肺内的空气与血液之间交换。呼吸依靠呼吸肌产生的压力变化完成。'},
 {id:'digestive',name:'消化系统',color:'#b8916b',description:'消化道分解食物、吸收营养与水分,并把废物向前推送。消化腺等附属器官提供胆汁与消化酶。'},
 {id:'urinary',name:'泌尿系统',color:'#b47961',description:'肾脏过滤血液,调节体液、电解质与酸碱平衡。尿液经输尿管流入膀胱,再经尿道排出体外。'},
 {id:'lymphatic',name:'淋巴系统',color:'#879f7c',description:'淋巴管将多余的组织液送回血液循环。淋巴结及其他淋巴器官支持免疫监视与免疫应答。'},
 {id:'endocrine',name:'内分泌系统',color:'#c5a09a',description:'内分泌器官将激素释放入血液,协调代谢、生长、应激反应以及生殖等生理过程。'},
 {id:'reproductive',name:'生殖系统',color:'#bda098',description:'此处呈现的男性生殖结构参与精子的产生、成熟与运输,并分泌性激素。'},
 {id:'integumentary',name:'体表',color:'#ba9b7d',description:'体表提供外部解剖参照。皮肤系统构成保护屏障,并参与感觉与体温调节。'},
 {id:'connective',name:'结缔组织',color:'#aec3bb',description:'软骨、韧带及其他结缔组织起支撑、连接与分隔作用,包括稳定关节与分散机械负荷。'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
export const EXPLANATIONS:Record<string,string> = {
 'heart':'胸腔内的肌性泵。右侧将血液送入肺循环;左侧将血液泵入体循环。',
 'liver':'位于膈右下方的大器官,处理吸收后的营养物质、分泌胆汁,并合成多种随血液运输的蛋白质。',
 'brain':'神经系统的中枢器官。其相互联系的各区支持感知、运动、记忆、语言以及对身体功能的调节。',
 'stomach':'位于食管与小肠之间的肌性囊袋,储存食物并与胃酸和消化酶混合,随后排入十二指肠。',
 'spleen':'位于左上腹的淋巴器官,过滤血液、清除衰老血细胞,并参与免疫应答。',
 'pancreas':'兼具消化与内分泌功能的腹部器官,向小肠输送消化酶,并分泌胰岛素与胰高血糖素等激素。',
 'urinary bladder':'位于盆腔的肌性储尿囊,储存经输尿管来自肾脏的尿液。',
 'trachea':'连接喉与支气管的主要气道,其软骨支架在呼吸时保持气道开放。',
 'diaphragm':'分隔胸腔与腹腔的阔肌。收缩时扩大胸腔容积,帮助把空气吸入肺内。',
 ...ZH_EXPLANATIONS,
};
const explanationKey=(name:string)=>{const key=name.toLowerCase();return key in EXPLANATIONS?key:key.replace(/^(right|left) /,'');};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[explanationKey(name)]??SYSTEMS.find(s=>s.id===system)?.description??'';}
export function hasExplanation(name:string){return explanationKey(name) in EXPLANATIONS;}
