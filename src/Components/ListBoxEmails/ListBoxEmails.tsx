import "./ListBoxEmails.css"
import type { Email } from "../../Types/Email";
import { useNavigate } from "react-router-dom";

interface EmailListProps {
  emails: Email[];
}

function ListBoxEmails ({ emails }: EmailListProps) {
  const navigate = useNavigate();

  const handleEmailClick = (emailId: string) => {
    navigate(`/email/${emailId}`);
  };

  return (
    <div className="containerListBoxEmails">
      {emails.map((email, index) => (
        <div 
          className={`item ${index === emails.length - 1 && emails.length >= 10 ? 'itemSemBorda' : ''}`} 
          key={email.id}
          onClick={() => handleEmailClick(email.id)}
          style={{ cursor: 'pointer' }}
        >
          <span className="emailTitle">{email.assunto}</span>
          <span className="emailDate">{new Date(email.data).toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
            })}
          </span>
        </div>
      ))}
    </div>
  )
}

export default ListBoxEmails