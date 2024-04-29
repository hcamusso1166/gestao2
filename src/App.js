import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Iniciação from "./components/Iniciação";
import Instituições from "./components/Instituições";
import Instituiçõe from "./components/Instituiçõe";
import Inovações from "./components/Inovações";
import Inovaçõe from "./components/Inovaçõe";
import Item from "./components/Item";
import PaísItem from "./components/PaísItem";
import País from "./components/País";
import Países from "./components/Países";
import Especialistas from "./components/Especialistas";
import Especialista from "./components/Especialista";

import Contato from "./components/Contato";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./helpers/theme";

function App() {
  
  const [inovações, setInovações] = useState([
    {
      id: 1,
      nombre: 'Gestão e orçamento por resultados, incluindo sistemas de avaliação',
      img: '/images/Agencias/Chile/1Dipres.png',
      titulo: '',
      linkTo: '',
      contenido:[
        {
        id: 1,
        nombre: 'Direção de Orçamentos (DIPRES), Ministério das Finanças',
        img:'/images/Agencias/Chile/1DIPRES.png',
        contenido:[
          "Sua missão é assegurar o eficiente uso dos recursos públicos no âmbito da política fiscal, através da aplicação de sistemas e instrumentos de gestão financeira, programação e controle de gestão.",
          "Isso envolve a formulação da Lei do Orçamento, realizar modificações no orçamento atual através de decretos, criação de programas e registro de despesa mensal e de competência por instituição. Como parte de sua missão, o Orçamento define um conjunto de objetivos estratégicos."
        ],
        web: 'http://www.dipres.gob.cl',
        palestrante:[
          {id:'I',nombre:"Rossana Costa, Diretor do Direção de orçamento"},
          {id:'II',nombre:"Paula Darville, Chefe da Divisão de Controle de Gestão Pública"}
        ],
        inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=43',
        aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=44',
        apresentacao:[
          {id:1,titulo:'Orçamento para Resultados: A experiência chilena Avanços e Desafios',link:'http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/DIPRES.pdf&embedded=true'}
        ],
          morada:'Teatinos 120, Santiago de Chile',
        contato:'Rossana Costa',
        telefone: '00 56 2 28262500',
        email:['rmessina@dipres.cl'],
        images:[
          { id:1,img:'/images/galery/70/008.001-58768ab0a7.jpg'},
          { id:2,img:'/images/galery/70/011.001-f8a7a0fdf6.jpg'},
          { id:3,img:'/images/galery/70/012.001-ff66830f6d.jpg'},
          { id:4,img:'/images/galery/70/013.001-160f6abb76.jpg'},
          { id:5,img:'/images/galery/70/014.001-1ad10c0ff6.jpg'},
          { id:6,img:'/images/galery/70/016.001-ceaff52dfd.jpg'},
          { id:7,img:'/images/galery/70/017.001-cf6146bf64.jpg'},
          { id:8,img:'/images/galery/70/018.001-347f868a13.jpg'},
          { id:9,img:'/images/galery/70/018.001-347f868a13.jpg'},
          { id:10,img:'/images/galery/70/020.001-9cd5df5573.jpg'},
          { id:11,img:'/images/galery/70/021.001-19548ade63.jpg'},
          { id:12,img:'/images/galery/70/022.001-ac8598cf87.jpg'},
          { id:13,img:'/images/galery/70/023.001-e6d2adc84c.jpg'},
          { id:14,img:'/images/galery/70/024.001-3d0affced3.jpg'},
          { id:15,img:'/images/galery/70/025.001-f8ed65e324.jpg'},
          { id:15,img:'/images/galery/70/026.001-9349cf5761.jpg'},
          { id:16,img:'/images/galery/70/028.001-2a2734cab7.jpg'},
          { id:17,img:'/images/galery/70/029.001-fe6d86e1b2.jpg'},
          { id:18,img:'/images/galery/70/152.001-53e85670a1.jpg'},
          { id:19,img:'/images/galery/70/153.001-c473ffe85a.jpg'}
        ]
        },
        {
          id: 2,
          nombre: 'Instituto Latino-americano e do Caribe de Planejamento Econômico e Social (ILPES), CEPAL',
          img:'/images/Agencias/Chile/2ILPESCEPAL.png',
          contenido:[
            "O ILPES é a entidade do sistema CEPAL líder na investigação, cooperação técnica e formação em planejamento, economia e Gestão do setor público para o desenvolvimento dos países de América Latina e do Caribe. Ele tem como um dos focos apoiar a discussão e reflexão sobre os desafios que o Estado enfrenta e também de suas estratégias de desenvolvimento.",
            "O perfil do ILPES incide na gestão pública e reconhece três prioridades. A primeira é contribuir para a construção de visões estratégicas para reforçar o quadro institucional para o planejamento como instrumento do governo, com base em experiências sistêmicas acordes com a política de desenvolvimento e de cooperação público‐privada, e que pode levar ou não a planos formais de desenvolvimento. A segunda prioridade é o planejamento e avaliação das atividades do setor público, incluindo as regras macrofiscais, programação multi‐anual, gerenciamento de projetos e bancos de investimento, cooperação pública e internacional de monitoramento e avaliação da gestão pública. A terceira prioridade são os processos de descentralização e de planejamento e gestão do desenvolvimento local e regional, com ênfase nas questões da descentralização fiscal e competitividade territorial. Além de produtos parciais, enfatiza o desenvolvimento de um documento institucional periódico (flag‐ship) denominado Panorama da Gestão Pública, aprovado no Conselho de CRP XXI, que foi realizado em maio de 2002 em Brasília, Brasil."
          ],
          web: 'http://www.eclac.org/ilpes',
          palestrante:[
            {id:'I',nombre:"Eduardo Aldunate, pesquisador do IILPES-CEPAL."},
            {id:'II',nombre:"Ricardo Sánchez, Chefe da divisão de recursos naturais e infra-estruturas da CEPAL"},
            {id:'III',nombre:"Patricia Rozas, funcionário da Divisão de Recursos Naturais e infra-estrutura da CEPAL."},
            {id:'IV',nombre:"Marcela Guzmán, consultor nacional e internacional."}
          ],
          inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=46',
          aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=47',
          apresentacao: [
            {id:1,titulo:"A gap de infra-estrutura na América Latina",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/CEPAL.pdf&embedded=true"},
            {id:2,titulo:"Avaliação de Programas Públicos na América Latina, no contexto da Gestão Pública por Resultados",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/CEPAL2.pdf&embedded=true"},
            {id:3,titulo:"Programa de intercâmbio para secretários estaduais brasileiros no Chile - BID",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/Public%20Private%20Partnerships%20CEPAL.pdf&embedded=true"}
          ],
          morada:'Av. Dag Hammarskjöld 3477, Vitacura, Casilla 179-D, Santiago de Chile',
          contato:'Eduardo Aldunate Riedemann',
          telefone: '00 56 2 2102615',
          email:[
            "eduardo.aldunate@cepal.org",
            "ilpes@cepal.org"
          ],
          images:[
            {img:'/images/galery/76/000.001-173fd37f39.jpg'},
            {img:'/images/galery/76/071.001-c482c280b3.jpg'},
            {img:'/images/galery/76/075.001-bdc19747fd.jpg'},
            {img:'/images/galery/76/080.001-37b5de081c.jpg'},
            {img:'/images/galery/76/081.001-1cf4570770.jpg'},
            {img:'/images/galery/76/084.001-c4b3ba5565.jpg'},
            {img:'/images/galery/76/140.001-df7a4f4dce.jpg'},
            {img:'/images/galery/76/Cepal.001-ba9cd985ec.jpg'},
          ]
        },
        {
          id: 3,
          nombre: 'Centro de Sistemas Públicos, Universidade do Chile',
          img:'/images/Agencias/Chile/9CSP.png',
          contenido:[
            "Depois de sua longa e vasta tradição de Políticas Públicas e Gestão (www.mgpp.cl), o Departamento de Engenharia Industrial da Universidade do Chile criou o Centro de Sistemas Públicos com a missão de integrar projetos de implementação de políticas, a fim de contribuir significadamente na reforma e modernização do Estado do Chile e na América Latina.",
            "O Diretor Acadêmico desta iniciativa é o professor Mario Waissbluth, Ph. D. en Engenharia, especialista e pesquisador em processos de modernização do setor público, com uma ampla experiência em instituições latino‐americanas e autor de numerosas publicações especializadas."
          ],
          web: 'http://www.sistemaspublicos.cl/',
          palestrante:[
            {id:'I',nombre:"Mario Waissbluth"},
            {id:'II',nombre:"Alejandro Barros"}
          ],
          inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=48',
          aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=49',
          apresentacao: [
            {id:1,titulo:"Apresentao Centro de Sistemas Públicos, Universidade do Chile",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/Centro%20de%20Servicios%20Pblicos.pdf&embedded=true"}
          ],
          morada:'Domeyko 2369, Departamento de Ingeniería Industrial de la Universidad de Chile, Santiago de Chile',
          contato:'Mario Waissbluth',
          telefone: '00 56 2 9780726',
          email:[
            "mariow@dii.uchile.cl"
          ],
          images:[
            {img:'/images/galery/77/100.001-c59b82c843.jpg'},
            {img:'/images/galery/77/101.001-a6a970769c.jpg'},
            {img:'/images/galery/77/102.001-cc179744fd.jpg'},
            {img:'/images/galery/77/103.001-8545f8561b.jpg'},
            {img:'/images/galery/77/107.001-8e5510d2c2.jpg'},
            {img:'/images/galery/77/108.001-8cbf9de60f.jpg'},
            {img:'/images/galery/77/143.001-52f7b999a5.jpg'},
            {img:'/images/galery/77/144.001-07cb036cc8.jpg'},
            {img:'/images/galery/77/145.001-6f58b0502b.jpg'},
            {img:'/images/galery/77/160.001-f756d4da1d.jpg'},
            {img:'/images/galery/77/161.001-4a334e4015.jpg'}
          ]
        },
        {
          id: 4,
          nombre: 'Office of Management and Budget (OMB), Executive Office of the President',
          img:'/images/Agencias/USA/1omb-logo.png',
          contenido:[
            "A OMB auxilia o Presidente dos Estados Unidos da América na preparação do orçamento federal e avalia a eficiência dos programas, políticas e procedimentos das agências. Ao mesmo tempo, trabalha para que os relatórios, regras, testemunhos e legislações das agências governamentais sejam coerentes com o orçamento federal e os objetivos previstos para a Administração Pública."
          ],
          web: 'http://www.whitehouse.gov/omb',
          palestrante:[
            {id:'I',nombre:"Mark Bussow"}
          ],
          inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=50',
          aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=51',
          apresentacao: [
          ],
          morada:'726 Jackson Place NW, Washington, DC 20503',
          contato:'Debbie Williams',
          telefone: '00 1 202 3955017',
          email:[
            "Debra_L._Williams@omb.eop.gov"
          ],
          images:[
            {img:'/images/galery/78/005.001-ac015b84bc.jpg'},
            {img:'/images/galery/78/006.001-2554a166d6.jpg'},
            {img:'/images/galery/78/007.001-a839f3bc49.jpg'},
            {img:'/images/galery/78/008.001-2cbcf12c01.jpg'},
            {img:'/images/galery/78/011.001-8e8529061f.jpg'},
            {img:'/images/galery/78/012.001-6472f40dbf.jpg'},
            {img:'/images/galery/78/014.001-b7301aad67.jpg'},
            {img:'/images/galery/78/015.001-3103c6bbae.jpg'},
            {img:'/images/galery/78/016.001-1fc3074d16.jpg'},
            {img:'/images/galery/78/178.001-05b26e04ed.jpg'}

          ]
        },
        {
          id: 5,
          nombre: 'Centre of Excellence for Evaluation',
          img:'',
          contenido:[
            "The Centre of Excellence for Evaluation (CEE) desempenha uma liderança funcional para a implementação dos procedimentos de avaliação em todo o governo federal. Para isso, assessora, orienta e conduz o uso e a promoção de práticas de avaliação. O CEE cumpre a função, essencialmente, de participar e assessorar diretamente com as unidades de avaliação dos diferentes departamentos.",
            "Por sua vez, utiliza os resultados da avaliação para dar feedback do trabalho desenvolvido pelos diferentes órgãos. Em seu papel de líder para a avaliação institucional, o centro está vinculado a um número importante de sócios internos e externos."
          ],
          web: 'http://www.tbs-sct.gc.ca/cee/index-eng.asp',
          palestrante:[
            {id:'I',nombre:"Ms. Anne Routhier, Diretora Geral, Centro de Excelência em Avaliação"}
          ],
          inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=117',
          aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=118',
          apresentacao: [
            {id:1,titulo:"Centre of Excellence",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Centre%20of%20Excellence.pdf&embedded=true"}
          ],
          morada:'LEsplanade Laurier, 9th Floor, East Tower 140 OConnor Street OCawa, Canada K1A 0R5',
          contato:'Dennis Orbay',
          telefone: '00 1 613 9574202',
          email:[
            "Dennis.Orbay@tbs‐sct.gc.ca"
          ],
          images:[
            
          ]
        },
      ]
      
    },
    {
      id: 2,
      nombre: 'Sistemas de apoio a decisão em governos',
      img: '',
      titulo: '',
      linkTo: '',
      contenido:[
        {
        id: 1,
        nombre: 'Unidade de Modernização e Governo Digital, Ministério da Secretaria Geral da Presidência',
        img:'/images/Agencias/Chile/2ModernizaciónGobiernoGigital.png',
        contenido:[
          "Trazendo Estado para o povo. Esse é o objetivo que tem a equipe de Modernização e Governo Digital, melhorar o atendimento e a qualidade dos serviços prestados diariamente pelas instituições públicas aos cidadãos.",
          "Modernização do Estado e Governo Eletrônico aborda este desafio, não apenas como uma tecnologización do estado, mas como uma mudança de paradigma: um processo abrangente que visa criar as condições para viver em um estado vizinho, inclusivo, transparente e participativo, voltado para melhor atender as necessidades dos cidadãos, ajudando a melhorar sua qualidade de vida.",
          "As três áreas de trabalho são: Governo Aberto, Governo Eficiente e Governo Perto. O Plano Estratégico de Governo Eletrônico tem como objetivo principal o desenvolvimento de políticas de e‐gov no interior do estado, a fim de oferecer um melhor serviço aos cidadãos, aumentar a eficiência e fortalecer a transparência e participação.",
          "Isto se consegue através de: padrões de governo eletrônico, monitoramento e avaliação de iniciativas no interior do Estado, implementação de projetos de e‐gov e assessoria técnica aos serviços públicos no desenvolvimento e implementação de iniciativas de e‐gov."
        ],
        web: 'http://www.modernizacion.gob.cl/',
        palestrante:[
          {id:'I',nombre:"Rafael Aristía, Coordenador Executivo da Unidade de Modernização e Governo Digital"},
          {id:'II',nombre:"Andrés Bustamante, Diretor de Governo Digital"},
          {id:'III',nombre:"Alejandra Garcia, Responsável da Área de Interoperabilidade."},
          {id:'IV',nombre:"Felipe Mancini Ruiz‐Tagle, Encarregado da Área de Tecnologia e Desenvolvimento."},
          {id:'V',nombre:"Miriam Manrique Chirimelli, Encarregada da Área de Coordenação Institucional."},
        ],
        inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/sistemas-de-apoio-a-decisao-em-governos?id=52',
        aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/sistemas-de-apoio-a-decisao-em-governos?id=53',
        apresentacao:[
          {id:1,titulo:'Chile Interoperabilidade de Governo Eletrônico',link:'http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/Modernizacion.pdf&embedded=true'}
        ],
          morada:'Teatinos 333 Piso 4, Santiago de Chile',
        contato:'Rafael Aristía',
        telefone: '00 56 2 28262500',
        email:['rariztia@minsegpres.gob.cl'],
        images:[
          { id:1,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/034.001.jpg'},
          { id:2,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/037.001.jpg'},
          { id:3,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/040.001.jpg'},
          { id:4,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/045.001.jpg'},
          { id:5,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/046.001.jpg'},
          { id:6,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/047.001.jpg'},
          { id:7,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/048.001.jpg'},
          { id:8,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/049.001.jpg'},
          { id:9,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/051.001.jpg'},
          { id:10,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/052.001.jpg'},
          { id:11,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/055.001.jpg'},
          { id:12,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/056.001.jpg'},
          { id:13,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/057.001.jpg'},
          { id:14,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/058.001.jpg'},
          { id:15,img:'/images/Agencias/Chile/Fotos unidad de modernizacion/065.001.jpg'}
        ]
        },
        {
          id: 2,
          nombre: 'Instituto Latino-americano e do Caribe de Planejamento Econômico e Social (ILPES), CEPAL',
          img:'/images/Agencias/Chile/2ILPESCEPAL.png',
          contenido:[
            "O ILPES é a entidade do sistema CEPAL líder na investigação, cooperação técnica e formação em planejamento, economia e Gestão do setor público para o desenvolvimento dos países de América Latina e do Caribe. Ele tem como um dos focos apoiar a discussão e reflexão sobre os desafios que o Estado enfrenta e também de suas estratégias de desenvolvimento.",
            "O perfil do ILPES incide na gestão pública e reconhece três prioridades. A primeira é contribuir para a construção de visões estratégicas para reforçar o quadro institucional para o planejamento como instrumento do governo, com base em experiências sistêmicas acordes com a política de desenvolvimento e de cooperação público‐privada, e que pode levar ou não a planos formais de desenvolvimento. A segunda prioridade é o planejamento e avaliação das atividades do setor público, incluindo as regras macrofiscais, programação multi‐anual, gerenciamento de projetos e bancos de investimento, cooperação pública e internacional de monitoramento e avaliação da gestão pública. A terceira prioridade são os processos de descentralização e de planejamento e gestão do desenvolvimento local e regional, com ênfase nas questões da descentralização fiscal e competitividade territorial. Além de produtos parciais, enfatiza o desenvolvimento de um documento institucional periódico (flag‐ship) denominado Panorama da Gestão Pública, aprovado no Conselho de CRP XXI, que foi realizado em maio de 2002 em Brasília, Brasil."
          ],
          web: 'http://www.eclac.org/ilpes',
          palestrante:[
            {id:'I',nombre:"Eduardo Aldunate, pesquisador do IILPES-CEPAL."},
            {id:'II',nombre:"Ricardo Sánchez, Chefe da divisão de recursos naturais e infra-estruturas da CEPAL"},
            {id:'III',nombre:"Patricia Rozas, funcionário da Divisão de Recursos Naturais e infra-estrutura da CEPAL."},
            {id:'IV',nombre:"Marcela Guzmán, consultor nacional e internacional."}
          ],
          inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=46',
          aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=47',
          apresentacao: [
            {id:1,titulo:"A gap de infra-estrutura na América Latina",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/CEPAL.pdf&embedded=true"},
            {id:2,titulo:"Avaliação de Programas Públicos na América Latina, no contexto da Gestão Pública por Resultados",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/CEPAL2.pdf&embedded=true"},
            {id:3,titulo:"Programa de intercâmbio para secretários estaduais brasileiros no Chile - BID",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/Public%20Private%20Partnerships%20CEPAL.pdf&embedded=true"}
          ],
          morada:'Av. Dag Hammarskjöld 3477, Vitacura, Casilla 179-D, Santiago de Chile',
          contato:'Eduardo Aldunate Riedemann',
          telefone: '00 56 2 2102615',
          email:[
            "eduardo.aldunate@cepal.org",
            "ilpes@cepal.org"
          ],
          images:[
            {img:'/images/galery/76/000.001-173fd37f39.jpg'},
            {img:'/images/galery/76/071.001-c482c280b3.jpg'},
            {img:'/images/galery/76/075.001-bdc19747fd.jpg'},
            {img:'/images/galery/76/080.001-37b5de081c.jpg'},
            {img:'/images/galery/76/081.001-1cf4570770.jpg'},
            {img:'/images/galery/76/084.001-c4b3ba5565.jpg'},
            {img:'/images/galery/76/140.001-df7a4f4dce.jpg'},
            {img:'/images/galery/76/Cepal.001-ba9cd985ec.jpg'},
          ]
        },
        {
          id: 3,
          nombre: 'Centro de Sistemas Públicos, Universidade do Chile',
          img:'/images/Agencias/Chile/9CSP.png',
          contenido:[
            "Depois de sua longa e vasta tradição de Políticas Públicas e Gestão (www.mgpp.cl), o Departamento de Engenharia Industrial da Universidade do Chile criou o Centro de Sistemas Públicos com a missão de integrar projetos de implementação de políticas, a fim de contribuir significadamente na reforma e modernização do Estado do Chile e na América Latina.",
            "O Diretor Acadêmico desta iniciativa é o professor Mario Waissbluth, Ph. D. en Engenharia, especialista e pesquisador em processos de modernização do setor público, com uma ampla experiência em instituições latino‐americanas e autor de numerosas publicações especializadas."
          ],
          web: 'http://www.sistemaspublicos.cl/',
          palestrante:[
            {id:'I',nombre:"Mario Waissbluth"},
            {id:'II',nombre:"Alejandro Barros"}
          ],
          inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=48',
          aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=49',
          apresentacao: [
            {id:1,titulo:"Apresentao Centro de Sistemas Públicos, Universidade do Chile",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Agencias/Chile/Presentaciones/Centro%20de%20Servicios%20Pblicos.pdf&embedded=true"}
          ],
          morada:'Domeyko 2369, Departamento de Ingeniería Industrial de la Universidad de Chile, Santiago de Chile',
          contato:'Mario Waissbluth',
          telefone: '00 56 2 9780726',
          email:[
            "mariow@dii.uchile.cl"
          ],
          images:[
            {img:'/images/galery/77/100.001-c59b82c843.jpg'},
            {img:'/images/galery/77/101.001-a6a970769c.jpg'},
            {img:'/images/galery/77/102.001-cc179744fd.jpg'},
            {img:'/images/galery/77/103.001-8545f8561b.jpg'},
            {img:'/images/galery/77/107.001-8e5510d2c2.jpg'},
            {img:'/images/galery/77/108.001-8cbf9de60f.jpg'},
            {img:'/images/galery/77/143.001-52f7b999a5.jpg'},
            {img:'/images/galery/77/144.001-07cb036cc8.jpg'},
            {img:'/images/galery/77/145.001-6f58b0502b.jpg'},
            {img:'/images/galery/77/160.001-f756d4da1d.jpg'},
            {img:'/images/galery/77/161.001-4a334e4015.jpg'}
          ]
        },
        {
          id: 4,
          nombre: 'Office of Management and Budget (OMB), Executive Office of the President',
          img:'/images/Agencias/USA/1omb-logo.png',
          contenido:[
            "A OMB auxilia o Presidente dos Estados Unidos da América na preparação do orçamento federal e avalia a eficiência dos programas, políticas e procedimentos das agências. Ao mesmo tempo, trabalha para que os relatórios, regras, testemunhos e legislações das agências governamentais sejam coerentes com o orçamento federal e os objetivos previstos para a Administração Pública."
          ],
          web: 'http://www.whitehouse.gov/omb',
          palestrante:[
            {id:'I',nombre:"Mark Bussow"}
          ],
          inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=50',
          aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=51',
          apresentacao: [
          ],
          morada:'726 Jackson Place NW, Washington, DC 20503',
          contato:'Debbie Williams',
          telefone: '00 1 202 3955017',
          email:[
            "Debra_L._Williams@omb.eop.gov"
          ],
          images:[
            {img:'/images/galery/78/005.001-ac015b84bc.jpg'},
            {img:'/images/galery/78/006.001-2554a166d6.jpg'},
            {img:'/images/galery/78/007.001-a839f3bc49.jpg'},
            {img:'/images/galery/78/008.001-2cbcf12c01.jpg'},
            {img:'/images/galery/78/011.001-8e8529061f.jpg'},
            {img:'/images/galery/78/012.001-6472f40dbf.jpg'},
            {img:'/images/galery/78/014.001-b7301aad67.jpg'},
            {img:'/images/galery/78/015.001-3103c6bbae.jpg'},
            {img:'/images/galery/78/016.001-1fc3074d16.jpg'},
            {img:'/images/galery/78/178.001-05b26e04ed.jpg'}

          ]
        },
        {
          id: 5,
          nombre: 'Centre of Excellence for Evaluation',
          img:'',
          contenido:[
            "The Centre of Excellence for Evaluation (CEE) desempenha uma liderança funcional para a implementação dos procedimentos de avaliação em todo o governo federal. Para isso, assessora, orienta e conduz o uso e a promoção de práticas de avaliação. O CEE cumpre a função, essencialmente, de participar e assessorar diretamente com as unidades de avaliação dos diferentes departamentos.",
            "Por sua vez, utiliza os resultados da avaliação para dar feedback do trabalho desenvolvido pelos diferentes órgãos. Em seu papel de líder para a avaliação institucional, o centro está vinculado a um número importante de sócios internos e externos."
          ],
          web: 'http://www.tbs-sct.gc.ca/cee/index-eng.asp',
          palestrante:[
            {id:'I',nombre:"Ms. Anne Routhier, Diretora Geral, Centro de Excelência em Avaliação"}
          ],
          inovacion: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=117',
          aplicabilidade: 'https://gestaoeplanejamento.com/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=118',
          apresentacao: [
            {id:1,titulo:"Centre of Excellence",link:"http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Centre%20of%20Excellence.pdf&embedded=true"}
          ],
          morada:'LEsplanade Laurier, 9th Floor, East Tower 140 OConnor Street OCawa, Canada K1A 0R5',
          contato:'Dennis Orbay',
          telefone: '00 1 613 9574202',
          email:[
            "Dennis.Orbay@tbs‐sct.gc.ca"
          ],
          images:[
            
          ]
        },
      ]

    },
    {
      id: 3,
      nombre: 'Integração e modernização de serviços aos cidadãos',
      img: '',
      titulo: '',
      linkTo: '',
      contenido:[
      ],
      web:''
    },
    {
      id: 4,
      nombre: 'Planejamento e gestão do desempenho do serviço civil e sistemas de alta direção pública',
      img: '',
      titulo: '',
      linkTo: '',
      contenido:[
      ],
      web:''
    },
    {
      id: 5,
      nombre: 'Serviços administrativos compartilhados',
      img: '',
      titulo: '',
      linkTo: '',
      contenido:[
      ],
      web:''
    },
    {
      id: 6,
      nombre: 'Avaliação de desempenho governamental',
      img: '',
      titulo: '',
      linkTo: '',
      contenido:[
      ],
      web:''
    },
    {
      id: 7,
      nombre: 'Economia de custos em licitações e compras',
      img: '',
      titulo: '',
      linkTo: '',
      contenido:[
      ],
      web:''
    },
    {
      id: 8,
      nombre: 'Transparência governamental e accountability',
      img: '',
      titulo: '',
      linkTo: '',
      contenido:[
      ],
      web:''
    },
    {
      id: 9,
      nombre: 'Avaliação do de investimento social',
      img: '',
      titulo: '',
      linkTo: '',
      contenido:[
      ],
      web:''
    },
    {
      id: 10,
      nombre: 'Parceria público-privada',
      img: '',
      titulo: '',
      linkTo: '',
      contenido:[
      ],
      web:''
    }
  ])
  const [instituições, setInstituições] = useState([
    {
      id: 1,
      nombre: 'BID',
      img: '/images/BID2.png',
      img2: '/images/BID2_1.png',
      titulo: 'Banco Interamericano de Desenvolvimento',
      linkTo: '',
      contenido:[
        "O BID é a principal fonte de financiamento multilateral e de conhecimentos para o desenvolvimento econômico, social e institucional sustentável na América Latina e no Caribe.",
        "O Grupo do BID é constituído pelo Banco Interamericano de Desenvolvimento, pela Corporação Interamericana de Investimentos (CII) e pelo Fundo Multilateral de Investimentos (Fumin). A CII concentra-se no financiamento de médias e pequenas empresas, enquanto o Fumin promove o crescimento do setor privado com investimentos e operações de cooperação técnica não-reembolsáveis, com un ênfase na microempresa."
      ],
      web:'http://www.iadb.org/'
    },
    {
      id: 2,
      nombre: 'Ministerio do Planejamento, Orçamento e Gestão',
      img: '/images/ministerio.jpg',
      img2: '/images/ministerio2.jpg',
      titulo: 'Ministerio do Planejamento, Orçamento e Gestão',
      linkTo: '',
      contenido:[
        "O Ministério do Planejamento, Orçamento e Gestão é um órgão central da Administração pública federal, por conseguinte, é um Ministério do Poder Executivo do Brasil. Sua função é planejar a administração governamental, planejar custos, analisar a viabilidade de projetos, controlarem orçamentos, liberar fundos para estados e projetos do governo.",
        "O ministério tem como objetivo planejar e coordenar as políticas de gestão da administração pública federal, para fortalecer as capacidades do Estado para promoção do desenvolvimento sustentável e do aprimoramento da entrega de resultados ao cidadão. E sua visão do futuro é ser reconhecido pela excelência e competência na gestão pública e por uma administração moderna, transparente e eficiente que resulta em: ser a organização de excelência na gestão dos recursos públicos federais; promoção do cumprimento do Plano Plurianual com participação da sociedade e diálogo com os planos de desenvolvimento de longo prazo."
      ],
      web:'http://www.planejamento.gov.br'
    },
    {
      id: 3,
      nombre: 'BB&R',
      img: '/images/BBR.png',
      img2: '/images/BBR2.jpg',
      titulo: 'Biderbost, Boscan & Rochin (BB&R)',
      linkTo: '',
      contenido:[
        "Biderbost, Boscan & Rochin (BB&R) é uma empresa internacional de consultoria, pesquisa e treinamento na área de Eleições, Governo e Políticas Públicas, Inovação Social, Relações Público-Privadas e Responsabilidade Social.",
        "BB&R e os seus consultores têm uma reputação internacional de qualidade e desenvolvimento organizacional em grandes projetos. Seu trabalho é caracterizado pela aplicação de novas tendências, metodologias e as últimas descobertas científicas em suas áreas de especialização. Os consultores do BB&R têm trabalhado para, entre outros, o Banco Mundial, PNUD, UNESCO, Organização Internacional para as Migraçoes, Instituto Interamericano de Direitos Humanos, Ministério das Relações Exteriores e Comércio Internacional do Canadá, Instituto Argentino de Responsabilidade Social Empresarial, Fórum Ecumênico Social, Associação Navarra de Empresas de Consultoria o Câmara de Comércio do Peru na Espanha.",
        "Cada um dos seus consultores tem um histórico comprovado em suas áreas de especialização. Isto permite-lhe oferecer serviços de alta qualidade e construir um relacionamento com os clientes, onde a responsabilidade e compromisso são as principais características."
      ],
      web:'https://www.bbyr.com'
    },
    {
      id: 4,
      nombre: 'e-StratégiaPública',
      img: '/images/logo_FF.png',
      img2: '/images/ff_e-strategia_1.jpg',
      titulo: 'e-StratégiaPública',
      linkTo: '',
      contenido:[
        "e-StratégiaPública é uma empresa de consultoria criado em 2002. É a única consultoria brasileira especializada em e-governo, é uma referência no Brasil e no exterior, especialmente nos países da América Latina.",
        "E-Strategia Pública mantém na plena convicção de que o governo eletrônico não é uma opção, mas sim uma condição de uma administração pública eficiente, pois promove a redução estrutural da despesa e possível ação pública torna-se transparente. Nosso trabalho vai desde o desenvolvimento de políticas públicas para o desenvolvimento e coordenação de programas de governo, através da prestação de contas para a sociedade."
      ],
      web:'http://www.e-strategiapublica.com.br/'
    },
    {
      id: 5,
      nombre: 'Consad',
      img: '/images/Consad.png',
      img2: '/images/Consad2.png',
      titulo: 'Conselho Nacional de Secretários de Estado da Administração',
      linkTo: '/images/consad.png',
      contenido:[
        "O Conselho Nacional de Secretários de Estado da Administração (Consad) é um organismo que é responsável pelo debate entre os secretários de Administração do Estado da gestão pública e os desafios das políticas públicas no Brasil, bem como uma reflexão rigorosa da gestão pública. A missão do Consad é fomentar padrões de gestão pública baseados na qualidade, na eficiência, no mérito, na transparência e no comprometido com resultados que contribuam para o equilíbrio federativo, o desenvolvimento do Brasil e o fortalecimento da democracia. Com uma visão do desenvolvimento a modernização e defesa da administração pública de resultados, baseada na eficiência e na qualidade e orientada para o cidadão."
      ],
      web:'http://www.consad.org.br/'
    },
    {
      id: 6,
      nombre: 'Conseplan',
      img: '/images/Conseplan.png',
      img2: '/images/Conseplan2.png',
      titulo: 'Conselho Nacional de Secretários de Estado de Planejamento',
      linkTo: 'conseplan',
      contenido:[
        "O Conselho Nacional de Secretários de Estado de Planejamento (CONSEPLAN) foi criado no final de 2006, como parte do Fórum Nacional de Secretários Estaduais de Planejamento, a fim de ser responsável pelo estado de planejamento do desenvolvimento entre os secretários de vista Planejamento desenvolvimento conjunto do Estado da gestão pública e os desafios das políticas públicas de planejamento no Brasil."
      ],
      web:'http://www.conseplan.org.br/'
    }
  ])

  const [chile, setChile] = useState([
    {
      id: 1,
      nombre: 'Chile',
      img: '/images/Agencias/Chile/1DIPRES.png',
      titulo: 'Direção de Orçamentos (DIPRES), Ministério das Finanças',
      linkTo: '',
      contenido:[
        "Sua missão é assegurar o eficiente uso dos recursos públicos no âmbito da política fiscal, através da aplicação de sistemas e instrumentos de gestão financeira, programação e controle de gestão.",
        "Isso envolve a formulação da Lei do Orçamento, realizar modificações no orçamento atual através de decretos, criação de programas e registro de despesa mensal e de competência por instituição. Como parte de sua missão, o Orçamento define um conjunto de objetivos estratégicos."
      ],
      web:'http://www.iadb.org/',
      palestrante:[
        {id:'I',nombre:'Rossana Costa, Diretor do Direção de orçamento'},
        {id:'II',nombre:'Paula Darville, Chefe da Divisão de Controle de Gestão Pública'}
      ]
    },
    {
      id: 2,
      nombre: 'Chile',
      img: '',
      titulo: 'Unidade de Modernização e Governo Digital, Ministério da Secretaria Geral da Presidência',
      linkTo: '',
      contenido:[
        "Trazendo Estado para o povo. Esse é o objetivo que tem a equipe de Modernização e Governo Digital, melhorar o atendimento e a qualidade dos serviços prestados diariamente pelas instituições públicas aos cidadãos.",
        "Modernização do Estado e Governo Eletrônico aborda este desafio, não apenas como uma tecnologización do estado, mas como uma mudança de paradigma: um processo abrangente que visa criar as condições para viver em um estado vizinho, inclusivo, transparente e participativo, voltado para melhor atender as necessidades dos cidadãos, ajudando a melhorar sua qualidade de vida.",
        "As três áreas de trabalho são: Governo Aberto, Governo Eficiente e Governo Perto. O Plano Estratégico de Governo Eletrônico tem como objetivo principal o desenvolvimento de políticas de e‐gov no interior do estado, a fim de oferecer um melhor serviço aos cidadãos, aumentar a eficiência e fortalecer a transparência e participação.",
        "Isto se consegue através de: padrões de governo eletrônico, monitoramento e avaliação de iniciativas no interior do Estado, implementação de projetos de e‐gov e assessoria técnica aos serviços públicos no desenvolvimento e implementação de iniciativas de e‐gov."
      ],
      web:''
    },
    {
      id: 3,
      nombre: 'Chile',
      img: '',
      titulo: 'Direção Nacional do Serviço Cívil, Ministério das Finanças',
      linkTo: '',
      contenido:[
        "O Serviço Nacional Civil tem como finalidade promover e contribuir para a modernização do estado, colocando como um elemento central – a gestão estratégica das pessoas que trabalham na administração pública.",
        "É um serviço publico descentralizado, criado pela lei nº 19.882 de 23 de junho de 2003, que se relaciona com o Presidente da República através do Ministério das Finanças. Através da Divisão de Gestão Pública, desenvolve e implementações para o funcionamento do Sistema de Alta Gestão Pública. Além disto, através do Poder de Desenvolvimento de Pessoas projeta e implementações e políticas para avançar no sentido de uma gestão mais eficiente e estratégica de recursos humanos na administração civil do Estado."
      ],
      web:''
    },
    {
      id: 4,
      nombre: 'Chile',
      img: '',
      titulo: 'Direção ChileCompra, Ministério das Finanças',
      linkTo: '',
      contenido:[
        "A Dirección ChileCompra é uma instituição que administra o Sistema de Compras Públicas do Chile, ChileCompra (www.chilecompra.cl), trabalha com um quadro jurídico único, baseado na transparência, na eficiência, na universalidade, na acessibilidade e não discriminação. É um serviço público descentralizado, que é vinculado com o Ministério das Finanças sujeito a supervisão do Presidente da República. Ele foi criado com a contratação pública Lei nº 19.886 e iniciou formalmente as suas operações em 29 de agosto de 2003.",
        "A Dirección ChileCompra administra a plataforma de licitações do Estado, www.mercadopublico.cl, a maior plataforma de comercio eletrônico do país através da qual cerca de 900 órgãos do Estado realizam de maneira autônoma suas compras e contratações e participam ativamente mais de 100 mil empresas."
      ],
      web:''
    },
    {
      id: 5,
      nombre: 'Chile',
      img: '',
      titulo: 'Divisão de Avaliação Social de Investimentos, Ministério do Desenvolvimento Social',
      linkTo: '',
      contenido:[
        "O Ministério de Desenvolvimento Social é uma instituição que administra e avalia o subsistema do Sistema Nacional de Investimentos, realiza um conjunto de atividades destinadas a apoiar o processo de tomada de decisões na utilização dos recursos públicos.",
        "A Divisão de Avaliação Social de Investimento, no âmbito da Secretaria de Avaliação Social, é composto pelos departamentos de estudos de investimento, metodologias e unidade de treinamento.",
        "Esta divisão é responsável pelo desenvolvimento das normas, instruções e procedimentos para o desenvolvimento e avaliação das iniciativas de investimento, desenvolvimento e atualização de metodologias de avaliação social, formando funcionários públicos nesses assuntos e operação de Sistema Integrado de Gestão Bancária (BIP).",
        "Suas principais funções são as seguintes: revisão de iniciativas de investimentos, sugerindo que o financiamento público, a preparação e atualização de metodologias para a avaliação, o cálculo do preço social do projeto, a administração de um inventário atualizado de projetos em vários estágios do ciclo da vida e da avaliação ex post de projetos."
      ],
      web:'http://www.consad.org.br/'
    },
    {
      id: 6,
      nombre: 'Chile',
      img: '',
      titulo: 'Coordenação Interministerial (Unidade de Entrega), Ministério da Secretaria Geral da Presidência',
      linkTo: '',
      contenido:[
        "A Divisão de Coordenação Interministerial é responsável pela coordenação do programa de governo e setores, de apoiar as decisões do Presidente sobre o mérito técnico das políticas públicas e promover a modernização do Estado.",
      ],
      web:''
    },
    {
      id: 7,
      nombre: 'Chile',
      img: '',
      titulo: 'Comissão Defensora da Cidadania e Transparência, Ministério da Secretaria Geral da Presidência',
      linkTo: '',
      contenido:[
        "A Comissão de Defesa do Cidadão (CDC) intercede livremente pelo usuário ou quando não houver resposta no prazo legal (20 dias úteis) a partir de qualquer uma das 338 instituições de serviços públicos dependentes do Governo, ou quando a resposta afetar os direitos do usuário do Estado. Isto significa que a Comissão age depois que a pessoa foi para o Gabinete de Informações, Reclamações e Sugestões (OIRS), que está presente nos serviços e instituições. Assim, a Comissão coloca a disposição do usuário um profissional, para notificar a instituição ou autoridade sobre a reclamação. Esta intermediação é gratuita para os usuários e usuárias."
      ],
      web:''
    },
    {
      id: 8,
      nombre: 'Chile',
      img: '',
      titulo: 'Instituto Latino-americano e do Caribe de Planejamento Econômico e Social (ILPES), CEPAL',
      linkTo: '',
      contenido:[
        "O ILPES é a entidade do sistema CEPAL líder na investigação, cooperação técnica e formação em planejamento, economia e Gestão do setor público para o desenvolvimento dos países de América Latina e do Caribe. Ele tem como um dos focos apoiar a discussão e reflexão sobre os desafios que o Estado enfrenta e também de suas estratégias de desenvolvimento.",
        "O perfil do ILPES incide na gestão pública e reconhece três prioridades. A primeira é contribuir para a construção de visões estratégicas para reforçar o quadro institucional para o planejamento como instrumento do governo, com base em experiências sistêmicas acordes com a política de desenvolvimento e de cooperação público‐privada, e que pode levar ou não a planos formais de desenvolvimento. A segunda prioridade é o planejamento e avaliação das atividades do setor público, incluindo as regras macrofiscais, programação multi‐anual, gerenciamento de projetos e bancos de investimento, cooperação pública e internacional de monitoramento e avaliação da gestão pública. A terceira prioridade são os processos de descentralização e de planejamento e gestão do desenvolvimento local e regional, com ênfase nas questões da descentralização fiscal e competitividade territorial. Além de produtos parciais, enfatiza o desenvolvimento de um documento institucional periódico (flag‐ship) denominado Panorama da Gestão Pública, aprovado no Conselho de CRP XXI, que foi realizado em maio de 2002 em Brasília, Brasil.",
      ],
      web:''
    },
    {
      id: 9,
      nombre: 'Chile',
      img: '',
      titulo: 'Centro de Sistemas Públicos, Universidade do Chile',
      linkTo: '',
      contenido:[
        "Depois de sua longa e vasta tradição de Políticas Públicas e Gestão (www.mgpp.cl), o Departamento de Engenharia Industrial da Universidade do Chile criou o Centro de Sistemas Públicos com a missão de integrar projetos de implementação de políticas, a fim de contribuir significadamente na reforma e modernização do Estado do Chile e na América Latina.",
        "O Diretor Acadêmico desta iniciativa é o professor Mario Waissbluth, Ph. D. en Engenharia, especialista e pesquisador em processos de modernização do setor público, com uma ampla experiência em instituições latino‐americanas e autor de numerosas publicações especializadas.",
      ],
      web:''
    },
  ])
  const [canada, setCanada] = useState([
    {
      id: 1,
      nombre: 'Canadá',
      img: '',
      titulo: 'Direção de Orçamentos (DIPRES), Ministério das Finanças',
      linkTo: '',
      contenido:[
        "Sua missão é assegurar o eficiente uso dos recursos públicos no âmbito da política fiscal, através da aplicação de sistemas e instrumentos de gestão financeira, programação e controle de gestão.",
        "Isso envolve a formulação da Lei do Orçamento, realizar modificações no orçamento atual através de decretos, criação de programas e registro de despesa mensal e de competência por instituição. Como parte de sua missão, o Orçamento define um conjunto de objetivos estratégicos."
      ],
      web:'http://www.iadb.org/'
    },
    {
      id: 2,
      nombre: 'Canadá',
      img: '',
      titulo: 'Ministerio do Planejamento, Orçamento e Gestão',
      linkTo: '',
      contenido:[
        "O Ministério do Planejamento, Orçamento e Gestão é um órgão central da Administração pública federal, por conseguinte, é um Ministério do Poder Executivo do Brasil. Sua função é planejar a administração governamental, planejar custos, analisar a viabilidade de projetos, controlarem orçamentos, liberar fundos para estados e projetos do governo.",
        "O ministério tem como objetivo planejar e coordenar as políticas de gestão da administração pública federal, para fortalecer as capacidades do Estado para promoção do desenvolvimento sustentável e do aprimoramento da entrega de resultados ao cidadão. E sua visão do futuro é ser reconhecido pela excelência e competência na gestão pública e por uma administração moderna, transparente e eficiente que resulta em: ser a organização de excelência na gestão dos recursos públicos federais; promoção do cumprimento do Plano Plurianual com participação da sociedade e diálogo com os planos de desenvolvimento de longo prazo."
      ],
      web:''
    },
    {
      id: 3,
      nombre: 'Canadá',
      img: '',
      titulo: 'Biderbost, Boscan & Rochin (BB&R)',
      linkTo: '',
      contenido:[
        "Biderbost, Boscan & Rochin (BB&R) é uma empresa internacional de consultoria, pesquisa e treinamento na área de Eleições, Governo e Políticas Públicas, Inovação Social, Relações Público-Privadas e Responsabilidade Social.",
        "BB&R e os seus consultores têm uma reputação internacional de qualidade e desenvolvimento organizacional em grandes projetos. Seu trabalho é caracterizado pela aplicação de novas tendências, metodologias e as últimas descobertas científicas em suas áreas de especialização. Os consultores do BB&R têm trabalhado para, entre outros, o Banco Mundial, PNUD, UNESCO, Organização Internacional para as Migraçoes, Instituto Interamericano de Direitos Humanos, Ministério das Relações Exteriores e Comércio Internacional do Canadá, Instituto Argentino de Responsabilidade Social Empresarial, Fórum Ecumênico Social, Associação Navarra de Empresas de Consultoria o Câmara de Comércio do Peru na Espanha.",
        "Cada um dos seus consultores tem um histórico comprovado em suas áreas de especialização. Isto permite-lhe oferecer serviços de alta qualidade e construir um relacionamento com os clientes, onde a responsabilidade e compromisso são as principais características."
      ],
      web:''
    },
    {
      id: 4,
      nombre: 'Canadá',
      img: '',
      titulo: 'e-StratégiaPública',
      linkTo: '',
      contenido:[
        "e-StratégiaPública é uma empresa de consultoria criado em 2002. É a única consultoria brasileira especializada em e-governo, é uma referência no Brasil e no exterior, especialmente nos países da América Latina.",
        "E-Strategia Pública mantém na plena convicção de que o governo eletrônico não é uma opção, mas sim uma condição de uma administração pública eficiente, pois promove a redução estrutural da despesa e possível ação pública torna-se transparente. Nosso trabalho vai desde o desenvolvimento de políticas públicas para o desenvolvimento e coordenação de programas de governo, através da prestação de contas para a sociedade."
      ],
      web:''
    },
    {
      id: 5,
      nombre: 'Canadá',
      img: '',
      titulo: 'Conselho Nacional de Secretários de Estado da Administração',
      linkTo: '',
      contenido:[
        "O Conselho Nacional de Secretários de Estado da Administração (Consad) é um organismo que é responsável pelo debate entre os secretários de Administração do Estado da gestão pública e os desafios das políticas públicas no Brasil, bem como uma reflexão rigorosa da gestão pública. A missão do Consad é fomentar padrões de gestão pública baseados na qualidade, na eficiência, no mérito, na transparência e no comprometido com resultados que contribuam para o equilíbrio federativo, o desenvolvimento do Brasil e o fortalecimento da democracia. Com uma visão do desenvolvimento a modernização e defesa da administração pública de resultados, baseada na eficiência e na qualidade e orientada para o cidadão."
      ],
      web:'http://www.consad.org.br/'
    },
    {
      id: 6,
      nombre: 'Canadá',
      img: '',
      titulo: 'Conselho Nacional de Secretários de Estado de Planejamento',
      linkTo: 'conseplan',
      contenido:[
        "O Conselho Nacional de Secretários de Estado de Planejamento (CONSEPLAN) foi criado no final de 2006, como parte do Fórum Nacional de Secretários Estaduais de Planejamento, a fim de ser responsável pelo estado de planejamento do desenvolvimento entre os secretários de vista Planejamento desenvolvimento conjunto do Estado da gestão pública e os desafios das políticas públicas de planejamento no Brasil."
      ],
      web:''
    },
    {
      id: 7,
      nombre: 'Canadá',
      img: '',
      titulo: 'Conselho Nacional de Secretários de Estado de Planejamento',
      linkTo: 'conseplan',
      contenido:[
        "O Conselho Nacional de Secretários de Estado de Planejamento (CONSEPLAN) foi criado no final de 2006, como parte do Fórum Nacional de Secretários Estaduais de Planejamento, a fim de ser responsável pelo estado de planejamento do desenvolvimento entre os secretários de vista Planejamento desenvolvimento conjunto do Estado da gestão pública e os desafios das políticas públicas de planejamento no Brasil."
      ],
      web:''
    },
    {
      id: 8,
      nombre: 'Canadá',
      img: '',
      titulo: 'Conselho Nacional de Secretários de Estado de Planejamento',
      linkTo: 'conseplan',
      contenido:[
        "O Conselho Nacional de Secretários de Estado de Planejamento (CONSEPLAN) foi criado no final de 2006, como parte do Fórum Nacional de Secretários Estaduais de Planejamento, a fim de ser responsável pelo estado de planejamento do desenvolvimento entre os secretários de vista Planejamento desenvolvimento conjunto do Estado da gestão pública e os desafios das políticas públicas de planejamento no Brasil."
      ],
      web:''
    },
  ])
  const [usa, setUsa] = useState([
    {
      id: 1,
      nombre: 'USA',
      img: '',
      titulo: 'Direção de Orçamentos (DIPRES), Ministério das Finanças',
      linkTo: '',
      contenido:[
        "Sua missão é assegurar o eficiente uso dos recursos públicos no âmbito da política fiscal, através da aplicação de sistemas e instrumentos de gestão financeira, programação e controle de gestão.",
        "Isso envolve a formulação da Lei do Orçamento, realizar modificações no orçamento atual através de decretos, criação de programas e registro de despesa mensal e de competência por instituição. Como parte de sua missão, o Orçamento define um conjunto de objetivos estratégicos."
      ],
      web:'http://www.iadb.org/'
    },
    {
      id: 2,
      nombre: 'USA',
      img: '',
      titulo: 'Ministerio do Planejamento, Orçamento e Gestão',
      linkTo: '',
      contenido:[
        "O Ministério do Planejamento, Orçamento e Gestão é um órgão central da Administração pública federal, por conseguinte, é um Ministério do Poder Executivo do Brasil. Sua função é planejar a administração governamental, planejar custos, analisar a viabilidade de projetos, controlarem orçamentos, liberar fundos para estados e projetos do governo.",
        "O ministério tem como objetivo planejar e coordenar as políticas de gestão da administração pública federal, para fortalecer as capacidades do Estado para promoção do desenvolvimento sustentável e do aprimoramento da entrega de resultados ao cidadão. E sua visão do futuro é ser reconhecido pela excelência e competência na gestão pública e por uma administração moderna, transparente e eficiente que resulta em: ser a organização de excelência na gestão dos recursos públicos federais; promoção do cumprimento do Plano Plurianual com participação da sociedade e diálogo com os planos de desenvolvimento de longo prazo."
      ],
      web:''
    },
    {
      id: 3,
      nombre: 'USA',
      img: '',
      titulo: 'Biderbost, Boscan & Rochin (BB&R)',
      linkTo: '',
      contenido:[
        "Biderbost, Boscan & Rochin (BB&R) é uma empresa internacional de consultoria, pesquisa e treinamento na área de Eleições, Governo e Políticas Públicas, Inovação Social, Relações Público-Privadas e Responsabilidade Social.",
        "BB&R e os seus consultores têm uma reputação internacional de qualidade e desenvolvimento organizacional em grandes projetos. Seu trabalho é caracterizado pela aplicação de novas tendências, metodologias e as últimas descobertas científicas em suas áreas de especialização. Os consultores do BB&R têm trabalhado para, entre outros, o Banco Mundial, PNUD, UNESCO, Organização Internacional para as Migraçoes, Instituto Interamericano de Direitos Humanos, Ministério das Relações Exteriores e Comércio Internacional do Canadá, Instituto Argentino de Responsabilidade Social Empresarial, Fórum Ecumênico Social, Associação Navarra de Empresas de Consultoria o Câmara de Comércio do Peru na Espanha.",
        "Cada um dos seus consultores tem um histórico comprovado em suas áreas de especialização. Isto permite-lhe oferecer serviços de alta qualidade e construir um relacionamento com os clientes, onde a responsabilidade e compromisso são as principais características."
      ],
      web:''
    },
    {
      id: 4,
      nombre: 'USA',
      img: '',
      titulo: 'e-StratégiaPública',
      linkTo: '',
      contenido:[
        "e-StratégiaPública é uma empresa de consultoria criado em 2002. É a única consultoria brasileira especializada em e-governo, é uma referência no Brasil e no exterior, especialmente nos países da América Latina.",
        "E-Strategia Pública mantém na plena convicção de que o governo eletrônico não é uma opção, mas sim uma condição de uma administração pública eficiente, pois promove a redução estrutural da despesa e possível ação pública torna-se transparente. Nosso trabalho vai desde o desenvolvimento de políticas públicas para o desenvolvimento e coordenação de programas de governo, através da prestação de contas para a sociedade."
      ],
      web:''
    },
    {
      id: 5,
      nombre: 'USA',
      img: '',
      titulo: 'Conselho Nacional de Secretários de Estado da Administração',
      linkTo: '',
      contenido:[
        "O Conselho Nacional de Secretários de Estado da Administração (Consad) é um organismo que é responsável pelo debate entre os secretários de Administração do Estado da gestão pública e os desafios das políticas públicas no Brasil, bem como uma reflexão rigorosa da gestão pública. A missão do Consad é fomentar padrões de gestão pública baseados na qualidade, na eficiência, no mérito, na transparência e no comprometido com resultados que contribuam para o equilíbrio federativo, o desenvolvimento do Brasil e o fortalecimento da democracia. Com uma visão do desenvolvimento a modernização e defesa da administração pública de resultados, baseada na eficiência e na qualidade e orientada para o cidadão."
      ],
      web:'http://www.consad.org.br/'
    },
    {
      id: 6,
      nombre: 'USA',
      img: '',
      titulo: 'Conselho Nacional de Secretários de Estado de Planejamento',
      linkTo: 'conseplan',
      contenido:[
        "O Conselho Nacional de Secretários de Estado de Planejamento (CONSEPLAN) foi criado no final de 2006, como parte do Fórum Nacional de Secretários Estaduais de Planejamento, a fim de ser responsável pelo estado de planejamento do desenvolvimento entre os secretários de vista Planejamento desenvolvimento conjunto do Estado da gestão pública e os desafios das políticas públicas de planejamento no Brasil."
      ],
      web:''
    },
    {
      id: 7,
      nombre: 'USA',
      img: '',
      titulo: 'Conselho Nacional de Secretários de Estado da Administração',
      linkTo: '',
      contenido:[
        "O Conselho Nacional de Secretários de Estado da Administração (Consad) é um organismo que é responsável pelo debate entre os secretários de Administração do Estado da gestão pública e os desafios das políticas públicas no Brasil, bem como uma reflexão rigorosa da gestão pública. A missão do Consad é fomentar padrões de gestão pública baseados na qualidade, na eficiência, no mérito, na transparência e no comprometido com resultados que contribuam para o equilíbrio federativo, o desenvolvimento do Brasil e o fortalecimento da democracia. Com uma visão do desenvolvimento a modernização e defesa da administração pública de resultados, baseada na eficiência e na qualidade e orientada para o cidadão."
      ],
      web:'http://www.consad.org.br/'
    },
    {
      id: 8,
      nombre: 'USA',
      img: '',
      titulo: 'Conselho Nacional de Secretários de Estado de Planejamento',
      linkTo: 'conseplan',
      contenido:[
        "O Conselho Nacional de Secretários de Estado de Planejamento (CONSEPLAN) foi criado no final de 2006, como parte do Fórum Nacional de Secretários Estaduais de Planejamento, a fim de ser responsável pelo estado de planejamento do desenvolvimento entre os secretários de vista Planejamento desenvolvimento conjunto do Estado da gestão pública e os desafios das políticas públicas de planejamento no Brasil."
      ],
      web:''
    },
  ])

  const [especialistas, setEspecialistas] = useState([
    {
      id: 1,
      nombre: 'Alejandro Barros',
      img: '/images/Alejandro_Barros.jpg',
      contenido:{
        detalles:'Alejandro Barros (Universidade do Chile) visitou Brasília, durante o VI Congresso do CONSAD (abril de 2013). Nesta reunião, foi responsável pela palestra de abertura. Por sua vez, durante a sua estadia, conversou com os funcionários públicos federais e estaduais do Brasil na incorporação de novas tecnologias nos processos de atendimento ao cidadão.',
        contacto:{
          email: 'abc@alejandrobarros.com',
          telefono: '0056 9 82596860',
          informacion: 'Consultor Internacional e Acadêmico Associado. Centro de Sistemas Públicos, Escola de Engenharia. Universidade do Chile.'
        },
        tituloArticulo:'Canais de atendimento Serviços Cidadão-Cêntricos',
        articulos:'http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/AlejandroBarrosA.pdf&embedded=true',
        tituloPresentacion:'Algumas Idéias e Desafios Congresso CONSAD de Gestão Pública',
        presentacion:'http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Canales%20de%20Atencion.pdf&embedded=true'
      }
    },
    {
      id: 2,
      nombre: 'Jean Shaoul',
      img: '/images/Jean_Shaoul.jpg',
      contenido:{
        detalles:'A Investigadora no Manchester Business School participou da reunião em São Paulo do CONSEPLAN e apresentaram suas visões sobre as Parcerias Público-Privadas (PPPs). No dia de 19 de março de 2013, a especialista britânica visitou as instalações do Ministério do Planejamento para trocar pontos de vista com as autoridades federais brasileiras.',
        contacto:{
          email: 'Jean.shaoul@mbs.ac.uk',
          telefono: '0044-161-275-4027',
          informacion: 'Manchester Business School, University of Manchester, Manchester M15 6PB'
        },
        tituloArticulo:'A experiência de Parcerias Público-Privadas',
        articulos:'http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/JeanShaoulA.pdf&embedded=true',
        tituloPresentacion:'Public Private Partnerships Whose risk and whose reward?',
        presentacion:'http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/JeanShaoulP.pdf&embedded=true'
      }
    },
    {
      id: 3,
      nombre: 'Ian Sanderson',
      img: '/images/Ian_Sanderson.jpg',
      contenido:{
        detalles:'O pesquisador da Universidade Metropolitana de Leeds participou do forum CONSAD-CONSEPLAN em Canela (Rio Grande do Sul), apresentando a conferencia magistral sobre Evidence-Based Government. No dia 20 de novembro de 2013, o especialista britânico visitou as instalações do Ministério do Planejamento para intercambiar ideias com as autoridades federais brasileiras.',
        contacto:{
          email: 'i.sanderson@leedsmet.ac.uk',
          telefono: '0044 11 3 81 27533',
          informacion: 'Leeds Business School, Leeds Metropolitan University, Rose Bowl, Portland Crescent, Leeds LS2 3HB, UK'
        },
        tituloArticulo:'O papel da formulação de políticas baseadas em evidências no “Bom Governo”',
        articulos:'http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Artigo%20-%20Ian%20Sanderson.pdf&embedded=true',
        tituloPresentacion:'Evidence-Based or Intelligent Government? International Trends and Examples',
        presentacion:'http://docs.google.com/viewer?url=http://gestaoeplanejamento.com/images/Evidence-Based%20or%20Intelligent%20Government_%20International%20Trends%20and%20Examples.pdf&embedded=true'
      }
    },
  ])

  return (
  <ThemeProvider theme={theme}>
    <div className="Aplicacion">
      <Routes>
        <Route path="Instituições/:id" element={ <Instituiçõe instituições={instituições}  /> } />
        <Route path="Instituições" element={ <Instituições instituições={instituições} /> } />
        <Route path="Inovações/:id/:id2" element={ <Item inovações={inovações} /> } />
        <Route path="Inovações/:id" element={ <Inovaçõe inovações={inovações} /> } />
        <Route path="Inovações" element={ <Inovações inovações={inovações} /> } />
        <Route path="Países/Canadá/:id" element={ <PaísItem paísItem={canada} /> } />
        <Route path="Países/USA/:id" element={ <PaísItem paísItem={usa} /> } />
        <Route path="Países/Chile/:id" element={ <PaísItem paísItem={chile} /> } />
        <Route path="Países/Canadá" element={ <País país={canada} /> } />
        <Route path="Países/USA" element={ <País país={usa} /> } />
        <Route path="Países/Chile" element={ <País país={chile} /> } />
        <Route path="Países" element={ <Países /> } />
        <Route path="Especialista/:id" element={ <Especialista especialistas={especialistas} /> } />
        <Route path="Especialistas" element={ <Especialistas especialistas={especialistas} /> } />
        <Route path="Contato" element={ <Contato /> } />
        <Route path="/" element={ <Iniciação /> } />
      </Routes>
      </div>
    </ThemeProvider>
    
  )
}


export default App