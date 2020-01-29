import {
    Pack, Block, Literal, Type, Dict
} from "dalkak";

export default new Pack(
    new Dict, 
    "JSON",
    {
        parse: new Block(
            new Dict, 
            "parse",
            "(json)해석하고 변수(val)에 담기",
            (param, info) => {
                var Entry = (info as {
                    data
                }).data.Entry;
                if (!Entry.variableContainer.getVariableByName(param.val)) {
                    Entry.variableContainer.appendVariables([{
                        name: param.val
                    }]);
                }
                Entry.variableContainer.getVariableByName(param.val).setValue(JSON.parse(param.json));
            }
        ),
        get: new Block(
            new Dict, 
            "get",
            "변수(input)의(propName)값 구하고 변수(val)에 담기",
            (param, info) => {
                var Entry = (info as {
                    data
                }).data.Entry;
                if (!Entry.variableContainer.getVariableByName(param.val)) {
                    Entry.variableContainer.appendVariables([{
                        name: param.val
                    }]);
                }
                Entry.variableContainer.getVariableByName(param.val).setValue(Entry.variableContainer.getVariableByName(param.input).getValue()[param.propName]);
            }
        ),
        set: new Block(
            new Dict, 
            "set",
            "변수(val)의(propName)값을(data)로 정하기",
            (param, info) => {
                var Entry = (info as {
                    data
                }).data.Entry;
                if (!Entry.variableContainer.getVariableByName(param.val)) {
                    Entry.variableContainer.appendVariables([{
                        name: param.val
                    }]);
                }
                Entry.variableContainer.getVariableByName(param.val).getValue()[param.propName] = param.data;
            }
        )
    }
);