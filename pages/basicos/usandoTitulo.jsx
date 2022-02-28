import Titulo from '../../components/Titulo'

export default function usandoTitulo(){
    return (
        <div>
            <Titulo 
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir!"
            />

            <Titulo
                principal="Página de Login"
                secundario="Informe seu login e senha"
            />
        </div>
    )
}