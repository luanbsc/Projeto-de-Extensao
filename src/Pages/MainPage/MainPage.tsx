import "./MainPage.css"
import type { Email } from "../../Types/Email";
import { IoReload } from "react-icons/io5";
import ListBoxEmails from "../../Components/ListBoxEmails/ListBoxEmails";
import { useNavigate } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";

function MainPage () {
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1)
  const [emails, setEmails] = useState<Email[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    async function fetchEmails() {
      try {
        const apiBase = import.meta.env.DEV ? '/api' : import.meta.env.VITE_API_URL;
        const url = `${apiBase}/v1/emails?order=desc&limit=7&offset=${(page-1)*7}`;
        console.log('Fetching:', url);
        const response = await fetch(url);
        console.log('Response status:', response.status, response.statusText);
        if (!response.ok) throw new Error(`API error: ${response.status} ${response.statusText}`);
        const data = await response.json();
        console.log('Data:', data);
        setEmails(data.items || []);
        setTotal(data.total || 0);
      } catch (error) {
        console.error('Fetch error:', error);
        setEmails([]);
        setTotal(0);
      }
    }
    fetchEmails();
  }, [page]);

  return (
    <div className="container" style={{marginBottom:'1rem'}}>
      <div className="pagesAndOptions">
        <div className="buttonChangePageSelected">
          <span className="optionPage">Início</span>
        </div>

        <div className="buttonChangePage" onClick={() => navigate('emailsbycategory')}>
          <span className="optionPage">E-mails por Categoria</span>
        </div>

        <MdOutlineDarkMode size={24} style={{marginLeft:'auto', marginRight:'20px'}}  />
      </div>
      <div style={{width:'100%', minHeight:'1px', backgroundColor:'rgba(0, 0, 0, 0.08)'}} />
      <div className="emailsField">
        <div style={{display:'flex', flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'space-around'}}>
          <span className="title">E-mails Recentes</span>
          <button className="reloadButton" onClick={() => navigate(0)}>
            <IoReload size={20} />
            Recarregar
          </button>
        </div>

        <ListBoxEmails emails={emails} page={page} setPage={setPage} total={total} />
      </div>
    </div>
  )
}

export default MainPage