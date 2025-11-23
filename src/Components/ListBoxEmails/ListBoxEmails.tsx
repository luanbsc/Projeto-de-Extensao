import "./ListBoxEmails.css"
import type { Email } from "../../Types/Email"
import { useNavigate } from "react-router-dom"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import { useState } from "react"

interface EmailListProps {
  emails: Email[]
  page: number
  setPage: (page: number) => void
  total: number
  loading : boolean
}

function ListBoxEmails({ emails, page, setPage, total, loading }: EmailListProps) {
  const navigate = useNavigate()
  const [pageText1, setPageText1] = useState<number>(1)
  const [pageText2, setPageText2] = useState<number>(2)
  const [pageText3, setPageText3] = useState<number>(3)
  const [pageText4, setPageText4] = useState<number>(4)
  const [pageText5, setPageText5] = useState<number>(5)
  const totalPages = Math.ceil(total / 7)

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
    navigate(`/email/${emailId}`)
  }

  return (
    <>
      <div className="containerListBoxEmails">
        {!loading ? (
          emails.map((email, index) => (
            <div
              className={`item ${index === emails.length - 1 && emails.length >= 7 ? "itemSemBorda" : ""}`}
              key={email.id}
              onClick={() => handleEmailClick(email.id)}
            >
              <div className="emailInfo">
                {/* Ícone estilizado */}
                <div className="emailIcon">✉</div>

                {/* Título */}
                <span className="emailTitle">{email.subject}</span>
              </div>

              {/* Data formatada */}
              <span className="emailDate">
                {new Date(email.date).toLocaleString("pt-BR", {
                  timeZone: "America/Sao_Paulo",
                  hour12: false,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          ))
        ) : (
          Array.from({ length: 7 }).map((_, i) => (
            <div className="item skeleton-item" key={i}>
              <div className="emailInfo">
                <div className="emailIcon skeleton-box"></div>
                <span className="emailTitle skeleton-text"></span>
              </div>
        
              <span className="emailDate skeleton-text small"></span>
            </div>
          ))
        )}
      </div>

      <div className="buttonsPage">
        <div className="buttonsPage">
        <button className="previousPage" disabled={page === 1} onClick={() => handleClickPrevPage()}><MdNavigateBefore size={20} /></button>
        <button className={`buttonPage1 ${page === pageText1 ? "selected" : ""}`} disabled={pageText1 > totalPages} onClick={() => setPage(pageText1)}>{pageText1}</button>
        <button className={`buttonPage2 ${page === pageText2 ? "selected" : ""}`} disabled={pageText2 > totalPages} onClick={() => setPage(pageText2)}>{pageText2}</button>
        <button className={`buttonPage3 ${page === pageText3 ? "selected" : ""}`} disabled={pageText3 > totalPages} onClick={() => setPage(pageText3)}>{pageText3}</button>
        <button className={`buttonPage4 ${page === pageText4 ? "selected" : ""}`} disabled={pageText4 > totalPages} onClick={() => setPage(pageText4)}>{pageText4}</button>
        <button className={`buttonPage5 ${page === pageText5 ? "selected" : ""}`} disabled={pageText5 > totalPages} onClick={() => setPage(pageText5)}>{pageText5}</button>
        <button className="nextPage" disabled={page + 1 > totalPages} onClick={() => handleClickNextPage()}><MdNavigateNext size={20} /></button>
      </div>
      </div>
    </>
  )
}

export default ListBoxEmails
