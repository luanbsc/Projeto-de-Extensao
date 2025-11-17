export interface Email {
  id: string;
  body: string;
  subject: string;
  date: string;
  category?: string;
  inserted_at?: string;
  updated_at?: string;
  deleted_at?: string;
}