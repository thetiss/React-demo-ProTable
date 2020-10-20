/*
 * @Author: hiyan 
 * @Date: 2020-10-20 14:49:43 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-10-20 15:41:07
 */
import React from "react";

export default function PureFunctionDemo() {
    let obj={a:0}
    const pure=(pureInput)=>{
        let input=pureInput.a+1;
        return input
    }
    
    const impure=(input)=>{
        input.a+=1
        return input.a
    }
    let c=pure(obj)
    console.log("pure obj",obj);
    console.log("pure b",c);
    let b=impure(obj)
    console.log("impure obj",obj);
    console.log("impure b",b);
    return(
        <div>
            <div>Pure function Vs Impure function</div>
            <div>Impure function</div>
            <div>{obj.a}</div>
            <div>{b}</div>
            <div>Pure function</div>
            <div>{obj.a}</div>
            <div>{b}</div>
        </div>
    );
}
