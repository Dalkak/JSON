import {
    Extension, Block,
} from "dalkak";

export default new Extension({
    name: "JSON",
    color: 0x525252,
    blocks: {
        parse: new Block({
            name: "parse",
            template: "((json) 해석하기)",
            func: ({json}) => {
                return JSON.parse(json);
            }
        }),
        get: new Block({
            name: "get",
            template: "((input)의 (propName)값 구하기)",
            func: ({input, propName}) => {
                return input[propName];
            }
        }),
        set: new Block({
            name: "set",
            template: "변수 (val)의 (propName)값을 (data)로 정하기",
            func: ({val, propName, data}, project, local) => {
                local.getVariable(val).value[propName] = data;
            }
        })
    }
});