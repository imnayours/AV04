function mostrar_cadastro() {
    alert("slide cadastrado com sucesso!")
    let descrição = document.querySelector('#descrição').value;
    let imagem = document.querySelector('#imagem').value;
    let slide = {
        descrição: descrição,
        imagem: imagem,
    };
    return slide

} 

function ver_lista(slides) {
    let mensagem = '';
    let id = 0;
    let tbody = document.querySelector('#tbody');
    for (let slide of slides) {
        let linha = document.createElement('tr')
        let coluna = document.createElement('td')
        let coluna2 = document.createElement('td')
        let coluna3 = document.createElement('td')
        let botao1 = document.createElement("button"); let botao2 = document.createElement("button");
        coluna.innerText = id
        coluna2.innerText = slide.descrição
        coluna3.innerText = slide.imagem
        botao1.innerHTML = ("Editar"); botao2.innerHTML = ("Apagar");
        linha.appendChild(coluna)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(botao1); linha.appendChild(botao2)
        tbody.appendChild(linha)
        id++ ;
    }
}