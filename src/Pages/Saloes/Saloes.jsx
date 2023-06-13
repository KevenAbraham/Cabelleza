import style from './Saloes.module.css';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sessao1Saloes from '../../Components/Saloes/Sessao1Saloes/Sessao1Saloes'
import SessaoSaloes from '../../Components/Saloes/SessaoSaloes/SessaoSaloes'

function Saloes() {
    return(
        <div className={style.Saloes}>
            <Header/>
            <Sessao1Saloes/>
            <SessaoSaloes/>
                     
            <Footer/>
        </div>
    )
}

export default Saloes;