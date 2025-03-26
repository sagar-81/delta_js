

const data = ["vi","mi","si","di","pi"]

const [winner,runner,secondR,...others] =data;

console.log(`The winner is: ${winner}`);

console.log(`The runner-up is: ${runner}`);

console.log(`The second-place is: ${secondR}`);

console.log(`The remaining players are: ${others.join(", ")}`);


const data1={
    username:"Sagar@12",
    password:"Sagar6777"
}

const {username,password} =data1;

console.log(`Username : ${username} password : ${password} ${data1.u}`)