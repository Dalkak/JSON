import {
    Pack, Block, Literal, Type, Dict
} from "dalkak";

export default new Pack({
    name: "JSON",
    blocks: {
        parse: new Block({
            name: "parse",
            template: "((json) 해석하기)",
            func: (param, project) => {
                var {
                    json = "",
                } = {...param};
                return JSON.parse(json);
            }
        }),
        get: new Block({
            name: "get",
            template: "((input)의 (propName)값 구하기)",
            func: (param, project) => {
                var {
                    input = "변수", 
                    propName = "prop",
                } = {...param};
                return input[propName];
            }
        }),
        set: new Block({
            name: "set",
            template: "변수 (val)의 (propName)값을 (data)로 정하기",
            func: (param, project) => {
                var {
                    val = "변수", 
                    propName = "prop", 
                    data = ""
                } = {...param};
                project.variables.value[val].value[propName] = data;
            }
        })
    }
});