let juros = 1
let tempo = 0
let aporte =300
let valorfinal=1000000
let valortotal = 0

while (valortotal < valorfinal){
    valortotal=valortotal+(juros*valortotal/100)+aporte;
    tempo++
}
console.log(`levou ${tempo} meses para acumular 1 milhão `)