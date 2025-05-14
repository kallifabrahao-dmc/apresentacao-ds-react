import { useState } from "react";
import { homeLine, layersThree } from "@comercti/icons-hmg";

export const useComponents = () => {
  const itemsPerPage = 7;

  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);

  const headers = [
    { text: "Nome", value: "name", sortable: true },
    { text: "Status", value: "status", sortable: true },
    { text: "Cargo", value: "role", sortable: true },
    { text: "E-mail", value: "email", sortable: true },
    { text: "Teams", value: "teams" },
    { text: "Ações", value: "actionsBtn", sortable: false },
  ];

  const itemsDataTable = [
    {
      id: "1",
      name: "João Silva",
      status: "Ativo",
      role: "Product Manager",
      email: "joao@email.com",
      teams: ["Design", "Produto", "Marketing"],
    },
    {
      id: "2",
      name: "Maria Souza",
      status: "Ativo",
      role: "Frontend Developer",
      email: "maria@email.com",
      teams: ["Produto", "Marketing"],
    },
    {
      id: "3",
      name: "Carlos Lima",
      status: "Ativo",
      role: "UX Designer",
      email: "carlos@email.com",
      teams: ["Design", "Marketing"],
    },
    {
      id: "4",
      name: "Fernanda Souza",
      status: "Inativo",
      role: "Gerente de Projetos",
      email: "fernanda@email.com",
      teams: ["PMO", "TI"],
    },
    {
      id: "5",
      name: "Marcos Oliveira",
      status: "Ativo",
      role: "Desenvolvedor Frontend",
      email: "marcos@email.com",
      teams: ["Desenvolvimento", "Design"],
    },
    {
      id: "6",
      name: "Juliana Mendes",
      status: "Ativo",
      role: "Analista de Marketing",
      email: "juliana@email.com",
      teams: ["Marketing"],
    },
    {
      id: "7",
      name: "Roberto Nunes",
      status: "Ativo",
      role: "Engenheiro de Software",
      email: "roberto@email.com",
      teams: ["Desenvolvimento", "Infraestrutura"],
    },
    {
      id: "8",
      name: "Camila Ferreira",
      status: "Inativo",
      role: "Desenvolvedora Backend",
      email: "camila@email.com",
      teams: ["Desenvolvimento"],
    },
    {
      id: "9",
      name: "Eduardo Santos",
      status: "Ativo",
      role: "Analista de Dados",
      email: "eduardo@email.com",
      teams: ["Data Science", "BI"],
    },
    {
      id: "10",
      name: "Patrícia Almeida",
      status: "Ativo",
      role: "Especialista em SEO",
      email: "patricia@email.com",
      teams: ["Marketing", "Conteúdo"],
    },
    {
      id: "21",
      name: "Sérgio Pereira",
      status: "Ativo",
      role: "IT Support",
      email: "sergio@email.com",
      teams: ["Suporte"],
    },
    {
      id: "22",
      name: "Luciana Silva",
      status: "Inativo",
      role: "Research Analyst",
      email: "luciana@email.com",
      teams: ["Pesquisa", "Conteúdo"],
    },
    {
      id: "23",
      name: "Paulo Andrade",
      status: "Ativo",
      role: "Network Engineer",
      email: "paulo@email.com",
      teams: ["Infraestrutura", "TI"],
    },
    {
      id: "24",
      name: "Larissa Gomes",
      status: "Ativo",
      role: "Graphic Designer",
      email: "larissa@email.com",
      teams: ["Design", "Marketing"],
    },
    {
      id: "25",
      name: "Felipe Ramos",
      status: "Inativo",
      role: "Backend Developer",
      email: "felipe@email.com",
      teams: ["Desenvolvimento"],
    },
    {
      id: "26",
      name: "Bianca Castro",
      status: "Ativo",
      role: "Product Owner",
      email: "bianca@email.com",
      teams: ["Produto", "TI"],
    },
    {
      id: "27",
      name: "Diego Mendes",
      status: "Ativo",
      role: "Database Administrator",
      email: "diego@email.com",
      teams: ["Infraestrutura", "Data Science"],
    },
    {
      id: "28",
      name: "Raquel Moreira",
      status: "Inativo",
      role: "Content Strategist",
      email: "raquel@email.com",
      teams: ["Conteúdo", "Marketing"],
    },
    {
      id: "29",
      name: "Vitor Sousa",
      status: "Ativo",
      role: "Cloud Engineer",
      email: "vitor@email.com",
      teams: ["Infraestrutura", "TI"],
    },
    {
      id: "30",
      name: "Daniela Lima",
      status: "Ativo",
      role: "HR Manager",
      email: "daniela@email.com",
      teams: ["Recursos Humanos"],
    },
  ];

  const itemsMenuMyService = [
    {
      text: "Hub de dados",
      icon: homeLine,
      path: "",
    },
    {
      text: "App Assinatura Solar",
      icon: layersThree,
      path: "",
    },
  ];

  const items = [
    {
      text: "Inicio",
      path: "/home",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8 17H16M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n',
      subMenu: [],
    },
    {
      text: "Dashboard",
      path: "/about",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n',
      subMenu: [],
    },
    {
      text: "Projetos",
      path: "/projetos",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001M2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n',
      subMenu: [
        {
          text: "Dmc View",
          path: "/dmc-view",
        },
        {
          text: "Hub de dados",
          path: "/hub",
          options: [
            {
              canAccess: true,
              looker: "html",
            },
          ],
        },
        {
          text: "App Assinatura Solar",
          path: "/app",
        },
      ],
    },
  ];

  const totalPages = Math.ceil(itemsDataTable.length / itemsPerPage);

  const paginatedItems = itemsDataTable.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleMenu = (clicado: boolean) => {
    setOpenMenu(clicado);
  };

  const actions = (item) => {
    console.log("Actions:", item);
  };

  const handleModelValueChange = (newValue: any) => {
    console.log("New value:", newValue);
  };

  return {
    items,
    itemsDataTable,
    itemsMenuMyService,
    paginatedItems,
    totalPages,
    currentPage,
    headers,
    handlePageChange,
    handleModelValueChange,
    actions,
    handleMenu,
    openMenu,
  };
};
