import React from 'react'

const App = () => {

    localStorage.setItem('user','Sarthak');
    localStorage.setItem('age',18);

    const user=localStorage.getItem('user');
    const age=localStorage.getItem('age');
    console.log(user,age);
    // localStorage.clear();

    const MJ={
        username:'Mrunal',
        age:21,
        ipltm:"MI",
    }

    localStorage.setItem('MJ',JSON.stringify(MJ));

    const MJobj=JSON.parse(localStorage.getItem('MJ'))

    console.log(MJobj.username,MJobj.age,MJobj.ipltm,);

    // localStorage.removeItem()


    return (
        <div>
            

        </div>
    )
}

export default App
