import "./ListBoxEmails.css"
import type { Email } from "../Types/Email";

interface EmailListProps {
  emails: Email[];
}

function ListBoxEmails ({ emails }: EmailListProps) {
  return (
    <div className="containerListBoxEmails">
      {emails.map((email, index) => (
        <div className={`item ${index === emails.length - 1 && emails.length >= 10 ? 'itemSemBorda' : ''}`} key={email.id}>
          <span className="emailTitle">{email.assunto}</span>
          <span className="emailSender">{email.remetente}</span>
        </div>
      ))}
    </div>
  )
}

export default ListBoxEmails