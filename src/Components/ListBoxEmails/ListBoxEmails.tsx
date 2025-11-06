import "./ListBoxEmails.css"
import type { Email } from "../../Types/Email";

interface EmailListProps {
  emails: Email[];
}

function ListBoxEmails ({ emails }: EmailListProps) {
  return (
    <div className="containerListBoxEmails">
      {emails.map((email, index) => (
        <div className={`item ${index === emails.length - 1 && emails.length >= 10 ? 'itemSemBorda' : ''}`} key={email.id}>
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