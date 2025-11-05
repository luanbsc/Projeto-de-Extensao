import "./MainPage.css"
import { IoReload } from "react-icons/io5";

function MainPage () {

    return (
        <div className="container">
            <div className="pagesAndOptions">
                <div className="buttonChangePageSelected">
                    <span className="optionPage">Início</span>
                </div>

                <div className="buttonChangePage">
                    <span className="optionPage">E-mails por Categoria</span>
                </div>

                {/* Botão de trocar tema */}
            </div>
            <div style={{width:'100%', height:'1px', backgroundColor:'#ccc'}} />
            <div className="emailsField">
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <span className="title">E-mails Recentes</span>
                    <button className="reloadButton"><IoReload size={16} />Recarregar</button>
                </div>

                <div className="listBoxEmails">

                </div>
            </div>
        </div>
    )
}

export default MainPage