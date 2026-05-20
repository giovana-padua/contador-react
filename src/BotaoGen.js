
export default function BotaoGen({img, Somar, Subtrair, genero, quantidade}) {

    return (
        <div class="pessoa">
            <img src={img}></img>
    
            <div>
                <button onClick={Somar} class="somar">+</button>
                <button onClick={Subtrair} class="subtrair">-</button>
            </div>
    
            <p class="genero">{genero}</p>
    
            <p class="qtd">{quantidade}</p>
        </div>
    )
}