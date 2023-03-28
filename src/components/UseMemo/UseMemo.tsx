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

//let Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {

    const [counter, setCounter] = useState<number>(0);
    const [books, setBooks] = useState <Array<string>>(['Yulia','Valera','Sveta','Tanya']);

   const newArray :any= useMemo(()=>{
       books.filter(books=>books.toLowerCase().indexOf('a')> -1)
       return newArray
   },[])

const addBook = ()=>{
       const newBooks = [...books,'Oleg' + new Date().getTime()];
       setBooks(newBooks)
}


    return (
        <>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={()=>{addBook()}}>add user</button>
            {counter}
            <Book books={newArray} addBook={addBook} />

        </>
    )
}

const BooksSecret =(props:{books:Array<string>;addBook:()=>void})=>{
    return <div>
        <button onClick={()=>{props.addBook()}}>addBook</button>
        {
        props.books.map((book,i)=><div key={i}>{book}</div>)
    }</div>
}

let Book = React.memo(BooksSecret)
