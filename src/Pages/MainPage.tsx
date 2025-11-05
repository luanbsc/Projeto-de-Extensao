import "./MainPage.css"
import type { Email } from "../Types/Email";
import { IoReload } from "react-icons/io5";
import ListBoxEmails from "../Components/ListBoxEmails";

export const emailsMock: Email[] = [
  {
    id: "1",
    remetente: "financeiro@empresa.com",
    destinatario: "voce@email.com",
    assunto: "Comprovante de pagamento",
    mensagem: "Prezado, segue o comprovante referente ao pagamento deste mês.",
    data: "2025-02-01T09:12:00Z",
    lido: false,
    categoria: "Financeiro"
  },
  {
    id: "2",
    remetente: "rh@empresa.com",
    destinatario: "voce@email.com",
    assunto: "Atualização de benefícios",
    mensagem: "Olá! Houve uma atualização no plano de saúde. Confira os detalhes.",
    data: "2025-02-02T11:45:00Z",
    lido: true,
    categoria: "RH"
  },
  {
    id: "3",
    remetente: "noreply@github.com",
    destinatario: "voce@email.com",
    assunto: "Novo pull request",
    mensagem: "Um novo pull request foi aberto no repositório.",
    data: "2025-02-03T14:30:00Z",
    lido: false,
    categoria: "Código"
  },
  {
    id: "4",
    remetente: "marketing@store.com",
    destinatario: "voce@email.com",
    assunto: "Promoção imperdível",
    mensagem: "Descontos de até 80%! Não perca!",
    data: "2025-02-03T16:20:00Z",
    lido: true,
    categoria: "Promoções"
  },
  {
    id: "5",
    remetente: "contato@universidade.com",
    destinatario: "voce@email.com",
    assunto: "Certificado disponível",
    mensagem: "Seu certificado já está disponível para download.",
    data: "2025-02-04T10:05:00Z",
    lido: false,
    categoria: "Educação"
  },
  {
    id: "6",
    remetente: "suporte@provedor.com",
    destinatario: "voce@email.com",
    assunto: "Resposta ao ticket #2025",
    mensagem: "Olá! Atualizamos o status do seu ticket.",
    data: "2025-02-04T12:50:00Z",
    lido: true,
    categoria: "Suporte"
  },
  {
    id: "7",
    remetente: "eventos@network.com",
    destinatario: "voce@email.com",
    assunto: "Convite para webinar",
    mensagem: "Participe do nosso webinar exclusivo sobre tecnologia.",
    data: "2025-02-05T08:00:00Z",
    lido: false,
    categoria: "Eventos"
  },
  {
    id: "8",
    remetente: "cobrança@banco.com",
    destinatario: "voce@email.com",
    assunto: "Aviso de fatura",
    mensagem: "Sua fatura está disponível para pagamento.",
    data: "2025-02-05T14:30:00Z",
    lido: true,
    categoria: "Financeiro"
  },
  {
    id: "9",
    remetente: "newsletter@technews.com",
    destinatario: "voce@email.com",
    assunto: "Novidades da semana",
    mensagem: "Confira as últimas novidades do mundo da tecnologia!",
    data: "2025-02-06T09:10:00Z",
    lido: false,
    categoria: "Notícias"
  },
  {
    id: "10",
    remetente: "alertas@servico.com",
    destinatario: "voce@email.com",
    assunto: "Ação necessária",
    mensagem: "Sua senha expira em 5 dias. Atualize para evitar bloqueio.",
    data: "2025-02-06T11:22:00Z",
    lido: false,
    categoria: "Segurança"
  }
];

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
      <div style={{width:'100%', height:'1px', backgroundColor:'rgba(0, 0, 0, 0.08)'}} />
      <div className="emailsField">
        <div style={{display:'flex', flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'space-around'}}>
          <span className="title">E-mails Recentes</span>
          <button className="reloadButton">
            <IoReload size={20} />
            Recarregar
          </button>
        </div>

        <ListBoxEmails emails={emailsMock} />
      </div>
    </div>
  )
}

export default MainPage