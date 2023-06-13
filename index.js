const M = 5;
const N = 40;

for (let i = M; i <= N; i++) {
    let flag = 1
    for (let j = 2; j <= N; j++) {
        if ((i % j == 0) && (i != j))
            flag = 0
    }
    if (flag == 1) {
        console.log(i)
    }
}
 
  


