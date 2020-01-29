import {
    Pack, Block, Literal, Type, Dict
} from "dalkak";

export default new Pack(
    new Dict, 
    "Sample",
    {
        log: new Block(
            new Dict, 
            "log",
            "(text) 찍기",
            param => console.log(param.text),
            {
                text: Literal.from("안녕")
            }
        )
    }
);