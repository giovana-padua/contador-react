import { useState } from "react"

// Imagens
import redefinir from './assets/img/redefinir.png'
import man from './assets/img/freepik_man.png'
import woman from './assets/img/freepik_woman.png'

// Componentes
import BotaoGen from "./BotaoGen"
import estilo from './assets/style/Contador.css'

export default function Contador() {
    const [qtdHomens, setQtdHomens] = useState(0)
    const [qtdMulheres, setQtdMulheres] = useState(0)

    const [total, setQtd] = useState(0)


    function Somar(gen) {
        if (gen === 'homens')
            setQtdHomens(qtdHomens + 1)
        else if (gen === 'mulheres')
            setQtdMulheres(qtdMulheres + 1)

        setQtd(total + 1)
    }
    
    function Subtrair(gen) {
        if (gen === 'homens')
            setQtdHomens(qtdHomens - 1)
        else if (gen === 'mulheres')
            setQtdMulheres(qtdMulheres - 1)
        setQtd(total - 1)
    }

    function Zerar() {
        setQtd(0)
        setQtdHomens(0)
        setQtdMulheres(0)
    }


    return (
        <div class="container">
            <div class="top">
                <h1 class="title">
                Total
                <button class="redefinir" id="redefinir" onClick={Zerar}>
                    <img src={redefinir} title="https://www.flaticon.com/br/icones-gratis/redefinir"></img>
                </button>
                </h1>
                <p id="total" class="qtd">{total}</p>
            </div>

            <div id="contadores">
                <BotaoGen img={man} Somar={() => Somar('homens')} Subtrair={() => Subtrair('homens')} genero={'homens'} quantidade={qtdHomens}></BotaoGen>
                <BotaoGen img={woman} Somar={() => Somar('mulheres')} Subtrair={() => Subtrair('mulheres')} genero={'mulheres'} quantidade={qtdMulheres}></BotaoGen>
            </div>
        </div>
    )
}
