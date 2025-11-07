import "./EmailDetail.css"
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { emailsMock } from "../MainPage/MainPage";

function EmailDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  
  const email = emailsMock.find(e => e.id === id);
  
  if (!email) {
    return (
      <div className="container">
        <div className="emailDetailField">
          <p>Email não encontrado</p>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </div>
    );
  }

  const currentIndex = emailsMock.findIndex(e => e.id === id);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < emailsMock.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      navigate(`/email/${emailsMock[currentIndex - 1].id}`, { state: location.state });
    }
  };

  const handleNext = () => {
    if (hasNext) {
      navigate(`/email/${emailsMock[currentIndex + 1].id}`, { state: location.state });
    }
  };

  const getInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container">
      <div className="pagesAndOptions">
        <div className="buttonChangePage" onClick={() => navigate('/')}>
          <span className="optionPage">Início</span>
        </div>

        <div className="buttonChangePage" onClick={() => navigate('/emailsbycategory')}>
          <span className="optionPage">E-mails por Categoria</span>
        </div>

        <MdOutlineDarkMode size={24} style={{marginLeft:'auto', marginRight:'20px'}}  />
      </div>
      
      <div style={{width:'100%', height:'1px', backgroundColor:'rgba(0, 0, 0, 0.08)'}} />
      
      <div className="emailDetailHeader">
        <div className="headerLeft">
          <button className="iconButton" onClick={() => navigate('/')}>
            <span style={{fontSize: '20px'}}>←</span>
          </button>
          <span className="logo">📧</span>
          <h1 className="appTitle">ColegiadoMail</h1>
        </div>
        <div className="headerRight">
          <button className="iconButton">
            <span style={{fontSize: '20px'}}>↻</span>
          </button>
        </div>
      </div>

      <div className="emailDetailField">
        <div className="emailCard">
          <div className="emailHeader">
            <h1 className="emailSubject">{email.assunto}</h1>
            <div className="senderInfo">
              <div className="senderLeft">
                <div className="avatar">
                  {getInitials(email.remetente)}
                </div>
                <div className="senderDetails">
                  <p className="senderName">{email.remetente.split('@')[0]}</p>
                  <p className="senderEmail">&lt;{email.remetente}&gt;</p>
                </div>
              </div>
              <div className="emailDate">
                <p>{formatDate(email.data)}</p>
              </div>
            </div>
          </div>
          
          <div className="emailBody">
            <p>{email.mensagem}</p>
          </div>
        </div>

        <div className="navigationButtons">
          <button 
            className="navButton" 
            onClick={handlePrevious}
            disabled={!hasPrevious}
          >
            ← Anterior
          </button>
          <button 
            className="navButton" 
            onClick={handleNext}
            disabled={!hasNext}
          >
            Próximo →
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailDetail;
