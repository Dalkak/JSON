import {
    Pack, Block, Literal, Type, Dict
} from "dalkak";

export default new Pack({
    name: "JSON",
    blocks: {
        parse: new Block({
            name: "parse",
            template: "(json) 해석하고 변수 (val)에 담기",
            func: (param, project) => {
                var {
                    json = "", 
                    val = "변수"
                } = {...param};
                project.variables.value[val].value = JSON.parse(json);
            }
        }),
        get: new Block({
            name: "get",
            template: "변수 (input)의 (propName)값 구하고 변수 (val)에 담기",
            func: (param, project) => {
                var {
                    input = "변수", 
                    propName = "prop", 
                    val = "변수"
                } = {...param};
                project.variables.value[val].value = project.variables.value[input].value[propName]
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