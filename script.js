function Compra() {
    const prods = [];
    let total = 0;
    let p1 = document.getElementById("p1").checked;
    let p2 = document.getElementById("p2").checked;
    let p3 = document.getElementById("p3").checked;
    let p4 = document.getElementById("p4").checked;
    let p5 = document.getElementById("p5").checked;
    let p6 = document.getElementById("p6").checked;
    let p7 = document.getElementById("p7").checked;
    let p8 = document.getElementById("p8").checked;
    let p9 = document.getElementById("p9").checked;
    let p10 = document.getElementById("p10").checked;
    let p11 = document.getElementById("p11").checked;
    let p12 = document.getElementById("p12").checked;
    let p13 = document.getElementById("p13").checked;
    let p14 = document.getElementById("p14").checked;
    let p15 = document.getElementById("p15").checked;
    let p16 = document.getElementById("p16").checked;
    let p17 = document.getElementById("p17").checked;
    let p18 = document.getElementById("p18").checked;
    let p19 = document.getElementById("p19").checked;
    let p20 = document.getElementById("p20").checked;
    let p21 = document.getElementById("p21").checked;
    let p22 = document.getElementById("p22").checked;
    let p23 = document.getElementById("p23").checked;
    let p24 = document.getElementById("p24").checked;
    let p25 = document.getElementById("p25").checked;
    let p26 = document.getElementById("p26").checked;
    let p27 = document.getElementById("p27").checked;
    let p28 = document.getElementById("p28").checked;

    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let q4 = document.getElementById("q4").value;
    let q5 = document.getElementById("q5").value;
    let q6 = document.getElementById("q6").value;
    let q7 = document.getElementById("q7").value;
    let q8 = document.getElementById("q8").value;
    let q9 = document.getElementById("q9").value;
    let q10 = document.getElementById("q10").value;
    let q11 = document.getElementById("q11").value;
    let q12 = document.getElementById("q12").value;
    let q13 = document.getElementById("q13").value;
    let q14 = document.getElementById("q14").value;
    let q15 = document.getElementById("q15").value;
    let q16 = document.getElementById("q16").value;
    let q17 = document.getElementById("q17").value;
    let q18 = document.getElementById("q18").value;
    let q19 = document.getElementById("q19").value;
    let q20 = document.getElementById("q20").value;
    let q21 = document.getElementById("q21").value;
    let q22 = document.getElementById("q22").value;
    let q23 = document.getElementById("q23").value;
    let q24 = document.getElementById("q24").value;
    let q25 = document.getElementById("q25").value;
    let q26 = document.getElementById("q26").value;
    let q27 = document.getElementById("q27").value;
    let q28 = document.getElementById("q28").value;
    for (let i = 1; i <= 28; i++) {
        let quantity = document.getElementById(`q${i}`);
        if (Number(quantity.value) === 0) {
            quantity.value = 1;
        }
    }
    const prices = [5.00, 25.00, 10.00, 9.00, 16.00, 4.00, 8.00, 45.00, 50.00, 80.00, 35.00, 110.00, 12.00, 18.00, 7.00, 6.50, 6.50, 6.00, 6.50, 20.00, 22.00, 14.00, 18.00, 12.00, 3.00, 17.00, 17.00, 6.00];
    const names = ["Farinha de Trigo", "Arroz Branco", "Pão integral", "Feijão Preto", "Café Pilão", "Biscoito Cream Cracker", "lorgurte", "Queijo Prato", "Queijo Mussarela", "Queijo Parmesão", "Queijo Ricota", "Picanha", "Frango", "Bolo", "Coca-cola 1L", "Guaraná Antarctica 1L", "Fanta Laranja 1L", "Sukita 1L", "Pepsi 1L", "Pizza", "Lasanha", "Sabão em pó", "Sabão líquido", "Amaciante de Roupas", "Sabonete", "Shampoo", "Condicionador", "Creme Dental"];
    
    for (let i = 1; i <= 28; i++) {
        if (document.getElementById(`p${i}`).checked) {
            prods.push(names[i - 1]);
            total += prices[i - 1] * document.getElementById(`q${i}`).value;
        }
    }
    let totalr = total.toFixed(2);
    document.getElementById("produtos").innerHTML = prods;
    document.getElementById("total").innerHTML = "R$" + totalr;
}