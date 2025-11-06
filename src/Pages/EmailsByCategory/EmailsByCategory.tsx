import "./EmailsByCategory.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

function EmailsByCategory () {
  const navigate = useNavigate();
  const [todosIsActive, setTodosIsActive] = useState<boolean>(false)
  const [iniciacaoCientificaIsActive, setIniciacaoCientificaIsActive] = useState<boolean>(false)
  const [assuntosGeraisIsActive, setAssuntosGeraisIsActive] = useState<boolean>(false);
  const [projetosIsActive, setProjetosIsActive] = useState<boolean>(false);

  const handleClickFilterTodos = () => {
    if (!todosIsActive) {
      setIniciacaoCientificaIsActive(false)
      setAssuntosGeraisIsActive(false)
      setProjetosIsActive(false)
      setTodosIsActive(true)
    } else {
      setTodosIsActive(false)
    }
  }

  const handleClickFilterIniciacaoCientifica = () => {
    if (todosIsActive) {
      setTodosIsActive(false)
    }
    setIniciacaoCientificaIsActive(!iniciacaoCientificaIsActive)
  }

  const handleClickFilterAssuntosGerais = () => {
    if (todosIsActive) {
      setTodosIsActive(false)
    }
    setAssuntosGeraisIsActive(!assuntosGeraisIsActive)
  }

  const handleClickFilterProjetos = () => {
    if (todosIsActive) {
      setTodosIsActive(false)
    }
    setProjetosIsActive(!projetosIsActive)
  }

  return (
    <div className="container">
      <div className="pagesAndOptions">
        <div className="buttonChangePage" onClick={() => navigate('/')}>
          <span className="optionPage">Início</span>
        </div>

        <div className="buttonChangePageSelected">
          <span className="optionPage">E-mails por Categoria</span>
        </div>

        <MdOutlineDarkMode size={24} style={{marginLeft:'auto', marginRight:'20px'}}  />
      </div>
      <div style={{width:'100%', height:'1px', backgroundColor:'rgba(0, 0, 0, 0.08)'}} />
      <div className="emailsField">
        <div style={{display:'flex', flexDirection:'row', width:'100%', alignItems:'center'}}>
          <span className="title">E-mails por Categorias</span>
        </div>

        <div className="filters">
          <div className="searchBar">
            <IoSearch className="searchIcon" size={20} />
            <input
              type="text"
              placeholder="Pesquisar e-mails..."
              className="searchInput"
            />
          </div>

          <div className="filtersCard">
            <span style={{marginTop:'0.2rem'}}>Categoria:</span>

            <div className={`filterCard ${todosIsActive ? "ativado" : ""}`} onClick={() => handleClickFilterTodos()}>
              <span>Todos</span>
            </div>

            <div className={`filterCard ${iniciacaoCientificaIsActive ? "ativado" : ""}`} onClick={() => handleClickFilterIniciacaoCientifica()}>
              <span>Iniciação Científica</span>
            </div>

            <div className={`filterCard ${assuntosGeraisIsActive ? "ativado" : ""}`} onClick={() => handleClickFilterAssuntosGerais()}>
              <span>Assuntos Gerais</span>
            </div>

            <div className={`filterCard ${projetosIsActive ? "ativado" : ""}`} onClick={() => handleClickFilterProjetos()}>
              <span>Projetos</span>
            </div>
          </div>
        </div>

        {/* ListBox */}
      </div>
    </div>
  )
}

export default EmailsByCategory