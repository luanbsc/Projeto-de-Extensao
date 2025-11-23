import "./EmailsByCategory.css"
import type { Email } from "../../Types/Email";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import ListBoxEmails from "../../Components/ListBoxEmails/ListBoxEmails";

const categories = [
  "Todos",
  "Achados e Perdidos",
  "Prováveis Concluintes / Formandos",
  "Avisos da Coordenação / Secretaria",
  "Estágio / Trainee / Oportunidades",
  "TCC / Projeto Final",
  "Pesquisa / Iniciação Científica / Pós-Graduação",
  "Monitoria / Tutoria / Bolsas Acadêmicas",
  "Eventos / Palestras / Workshops",
  "Disciplinas / Professores / Aulas",
  "Matrícula / Ajuste de Disciplina / SEI",
  "Assistência Estudantil / Benefícios",
  "Outros"
];

function EmailsByCategory () {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [emails, setEmails] = useState<Email[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchEmails() {
      setLoading(true);
      try {
        const apiBase = import.meta.env.DEV ? '/api' : import.meta.env.VITE_API_URL;
        let url = `${apiBase}/v1/emails?order=desc&limit=7&offset=${(page-1)*7}`;
        if (selectedCategories.length > 0) {
          url += `&category=${selectedCategories.join(',')}`;
        }
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

      setLoading(false);
    }

    fetchEmails();
  }, [page, selectedCategories]);

  const handleCategoryClick = (category: string) => {
    if (category === "Todos") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(prev => {
        const newSelected = prev.includes(category)
          ? prev.filter(c => c !== category)
          : [...prev.filter(c => c !== "Todos"), category];
        return newSelected;
      });
    }
    setPage(1); // reset to first page when filter changes
  };

  const isCategoryActive = (category: string) => {
    if (category === "Todos") {
      return selectedCategories.length === 0; // active when no categories selected
    }
    return selectedCategories.includes(category);
  };

  return (
    <div className="container">
      <div className="pagesAndOptions">
        <div className="buttonChangePage" onClick={() => navigate('/')}>
          <span className="optionPage">Início</span>
        </div>

        <div className="buttonChangePageSelected">
          <span className="optionPage">E-mails por Categoria</span>
        </div>

        <MdOutlineDarkMode size={24} style={{marginLeft:'auto', marginRight:'20px'}}  />
      </div>
      <div style={{width:'100%', height:'1px', backgroundColor:'rgba(0, 0, 0, 0.08)'}} />
      <div className="emailsByCategoryField">
        <div style={{display:'flex', flexDirection:'row', width:'1200px', alignItems:'center',}}>
          <span className="title">E-mails por Categorias</span>
        </div>

        <div className="filters">
          <span style={{alignSelf:'flex-start', fontWeight:'500', fontSize:'small'}}>Categoria:</span>
          <div className="filtersCard">
            {categories.map(category => (
              <div 
                key={category}
                className={`filterCard ${isCategoryActive(category) ? "ativado" : ""}`} 
                onClick={() => handleCategoryClick(category)}
              >
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>

        <ListBoxEmails emails={emails} page={page} setPage={setPage} total={total} loading={loading} />
      </div>
    </div>
  )
}

export default EmailsByCategory