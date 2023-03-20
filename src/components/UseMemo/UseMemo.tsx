import React, {useMemo, useState} from "react";


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            resultA = resultA * i
        }
        return tempResultA;
    }, [a]);
    // resultB = useMemo(() => {
    //     let tempResultB = 1;
    //
    //     for (let i = 1; i <= b; i++) {
    //         resultB = resultB * i
    //     }
    //     return tempResultB;
    // }, [b]);


    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

            <hr/>
            <div>Result for a:{resultA}</div>
            <div>Result for b:{resultB}</div>

        </>
    )
}



const UsersSecret =(props:{users:Array<string>})=>{
    return <div>{
        props.users.map((u,i)=><div key={i}>{u}</div>)
    }</div>
}

let Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {

    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState <Array<string>>(['Yulia','Valera','Sveta','Tanya']);

   const newArray :any= useMemo(()=>{
       users.filter(u=>u.toLowerCase().indexOf('a')> -1)
       return newArray
   },[])

const addUser = ()=>{
       const newUsers = [...users,'Oleg' + new Date().getTime()];
       setUsers(newUsers)
}


    return (
        <>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={()=>{addUser()}}>add user</button>

        </>
    )
}