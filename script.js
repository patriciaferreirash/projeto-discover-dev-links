function toggleModel() {
    const html = document.documentElement

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')

    // } else {
    //     html.classList.add('light')
    // }  // este código faz a mesma coisa do de baixo, só um ideia de como também poderia ser feito

    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")
    const alt = document.querySelector("#profile img")

    //substituir a imagem
      if(html.classList.contains('light')) {
        //se tiver light mod, adicionar a imagem light
        img.setAttribute('src', './assets/Avatar-light.png')
        alt.setAttribute('alt', "Foto de Patrícia Ester sorrindo, usando óculos escuros e blusa preta, fundo degradê massala e azul")

    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
        
    }

}