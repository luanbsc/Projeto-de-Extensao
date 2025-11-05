export interface Email {
  id: string;
  remetente: string;
  destinatario: string;
  assunto: string;
  mensagem: string;
  data: string;
  lido: boolean;
  categoria?: string;
}