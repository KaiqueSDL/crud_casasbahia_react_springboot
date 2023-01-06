import logocb from "./img/logocb.png";
import mascotecb from "./img/mascotecb.png";
function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>

            <img src={logocb} className="logocb"></img>
            <img src={mascotecb}className="mascotecb"></img>
            <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' autocomplete='off' placeholder='Nome'  className='form-control' />
            <input type='text' value={obj.marca} onChange={eventoTeclado} name='marca' placeholder='Marca' className='form-control' autocomplete='off'  />
          

            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary' />
                :
                <div className='btn_selecionado'>
                    <input type='button' value='Alterar'  onClick={alterar}   className='btn btn-warning' />
                    <input type='button' value='Remover'  onClick={remover}   className='btn btn-danger' />
                    <input type='button' value='Cancelar' onClick={cancelar}  className='btn btn-secondary' />
                </div>
            }
            
        </form>
    )
}

export default Formulario;