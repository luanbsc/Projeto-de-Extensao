import "./EmailDetail.css"
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import type { Email } from "../../Types/Email";

function EmailDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [email, setEmail] = useState<Email | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEmail() {
      try {
        const response = await fetch(`/api/v1/emails/${id}`);
        if (!response.ok) {
          throw new Error('Email não encontrado');
        }
        const data = await response.json();
        setEmail(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar email');
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchEmail();
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="container">
        <div className="emailDetailField">
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (error || !email) {
    return (
      <div className="container">
        <div className="emailDetailField">
          <p>{error || 'Email não encontrado'}</p>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </div>
    );
  }

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
            <h1 className="emailSubject">{email.subject}</h1>
            <div className="senderInfo">
              {/* <div className="senderLeft">
                <div className="avatar">
                  {getInitials(email.remetente)}
                </div>
                <div className="senderDetails">
                  <p className="senderName">{email.remetente.split('@')[0]}</p>
                  <p className="senderEmail">&lt;{email.remetente}&gt;</p>
                </div>
              </div> */}
              <div className="emailDate">
                <p>{formatDate(email.date)}</p>
              </div>
            </div>
          </div>
          
          <div className="emailBody">
            <p>{email.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailDetail;