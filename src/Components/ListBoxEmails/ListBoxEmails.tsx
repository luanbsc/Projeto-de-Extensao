import "./ListBoxEmails.css"
import type { Email } from "../../Types/Email"
import { useNavigate } from "react-router-dom"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"

interface EmailListProps {
  emails: Email[]
  page: number
  setPage: (page: number) => void
  total: number
  loading : boolean
}

function ListBoxEmails({ emails, page, setPage, total, loading }: EmailListProps) {
  const navigate = useNavigate()

  const totalPages = Math.ceil(total / 7)
  const startPage = Math.max(1, page - 2)
  const endPage = Math.min(totalPages, page + 2)
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

  const handleClickPrevPage = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleClickNextPage = () => {
    if (page < totalPages) setPage(page + 1)
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
        <button
          className="previousPage"
          disabled={page === 1}
          onClick={handleClickPrevPage}
        >
          <MdNavigateBefore size={20} />
        </button>

        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            className={`buttonPage ${page === pageNum ? "selected" : ""}`}
            onClick={() => setPage(pageNum)}
          >
            {pageNum}
          </button>
        ))}

        <button
          className="nextPage"
          disabled={page >= totalPages}
          onClick={handleClickNextPage}
        >
          <MdNavigateNext size={20} />
        </button>
      </div>
    </>
  )
}

export default ListBoxEmails
