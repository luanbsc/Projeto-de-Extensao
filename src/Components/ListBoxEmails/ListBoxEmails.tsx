import "./ListBoxEmails.css"
import type { Email } from "../../Types/Email";
import { useNavigate } from "react-router-dom";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState } from "react";

interface EmailListProps {
  emails: Email[];
  page: number;
  setPage: (page: number) => void
}

function ListBoxEmails ({ emails, page, setPage }: EmailListProps) {
  const navigate = useNavigate();
  const [pageText1, setPageText1] = useState<number>(1)
  const [pageText2, setPageText2] = useState<number>(2)
  const [pageText3, setPageText3] = useState<number>(3)
  const [pageText4, setPageText4] = useState<number>(4)
  const [pageText5, setPageText5] = useState<number>(5)

  const handleClickPrevPage = () => {
    if (page === pageText1) {
      setPageText1(pageText1 - 5)
      setPageText2(pageText2 - 5)
      setPageText3(pageText3 - 5)
      setPageText4(pageText4 - 5)
      setPageText5(pageText5 - 5)
    }
    setPage(page - 1)
  }

  const handleClickNextPage = () => {
    if (page === pageText5) {
      setPageText1(pageText1 + 5)
      setPageText2(pageText2 + 5)
      setPageText3(pageText3 + 5)
      setPageText4(pageText4 + 5)
      setPageText5(pageText5 + 5)
    }
    setPage(page + 1)
  }

  const handleEmailClick = (emailId: string) => {
    navigate(`/email/${emailId}`);
  };

  return (
    <>
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

      <div className="buttonsPage">
        <button className="previousPage" disabled={page === 1} onClick={() => handleClickPrevPage()}><MdNavigateBefore size={20} /></button>
        <button className={`buttonPage1 ${page === pageText1 ? "selected" : ""}`} onClick={() => setPage(pageText1)}>{pageText1}</button>
        <button className={`buttonPage2 ${page === pageText2 ? "selected" : ""}`} onClick={() => setPage(pageText2)}>{pageText2}</button>
        <button className={`buttonPage3 ${page === pageText3 ? "selected" : ""}`} onClick={() => setPage(pageText3)}>{pageText3}</button>
        <button className={`buttonPage4 ${page === pageText4 ? "selected" : ""}`} onClick={() => setPage(pageText4)}>{pageText4}</button>
        <button className={`buttonPage5 ${page === pageText5 ? "selected" : ""}`} onClick={() => setPage(pageText5)}>{pageText5}</button>
        <button className="nextPage" onClick={() => handleClickNextPage()}><MdNavigateNext size={20} /></button>
      </div>
    </>
  )
}

export default ListBoxEmails