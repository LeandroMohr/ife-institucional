import type { SvgIconComponent } from '@mui/icons-material';

import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BusinessIcon from '@mui/icons-material/Business';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ApartmentIcon from '@mui/icons-material/Apartment';

export interface TransparencyDocument {
  id: string;
  title: string;
  description: string;
  href: string;
  openLabel: string;
  downloadLabel: string;
  icon: SvgIconComponent;
}

export const transparencyDocuments: TransparencyDocument[] = [
  {
    id: 'estatuto-social',
    title: 'Estatuto Social Consolidado do Instituto Futuro de Excelência',
    description:
      'Consulte o estatuto social consolidado do Instituto Futuro de Excelência com regras de governança, objetivos institucionais, estrutura administrativa e diretrizes da organização da sociedade civil.',
    href: '/docs/transparency/estatuto-consolidado.pdf',
    openLabel: 'Abrir estatuto social',
    downloadLabel: 'Baixar estatuto social',
    icon: GavelIcon,
  },
  {
    id: 'cartao-cnpj',
    title: 'Comprovante de Inscrição e Situação Cadastral do CNPJ',
    description:
      'Acesse o cartão CNPJ atualizado do Instituto Futuro de Excelência com dados cadastrais oficiais da Receita Federal, situação ativa e informações institucionais da OSC.',
    href: '/docs/transparency/cartao-cnpj-ife.pdf',
    openLabel: 'Abrir cartão CNPJ',
    downloadLabel: 'Baixar cartão CNPJ',
    icon: BusinessIcon,
  },
  {
    id: 'alvara-funcionamento',
    title: 'Alvará de Funcionamento e Licença Municipal',
    description:
      'Confira o alvará de funcionamento emitido pela Prefeitura de Curitiba, comprovando a regularidade de localização e funcionamento do Instituto Futuro de Excelência.',
    href: '/docs/transparency/alvara-funcionamento.pdf',
    openLabel: 'Abrir alvará municipal',
    downloadLabel: 'Baixar alvará municipal',
    icon: ApartmentIcon,
  },
  {
    id: 'cnd-federal',
    title: 'Certidão Negativa de Débitos Federais',
    description:
      'Consulte a certidão negativa de débitos federais e dívida ativa da União do Instituto Futuro de Excelência, comprovando regularidade fiscal perante a Receita Federal e PGFN.',
    href: '/docs/transparency/cnd-federal.pdf',
    openLabel: 'Abrir certidão federal',
    downloadLabel: 'Baixar certidão federal',
    icon: FactCheckIcon,
  },
  {
    id: 'cnd-estadual',
    title: 'Certidão Negativa de Débitos Estaduais do Paraná',
    description:
      'Acesse a certidão negativa estadual emitida pela Secretaria da Fazenda do Paraná, comprovando a regularidade tributária do Instituto Futuro de Excelência.',
    href: '/docs/transparency/cnd-estadual.pdf',
    openLabel: 'Abrir certidão estadual',
    downloadLabel: 'Baixar certidão estadual',
    icon: VerifiedUserIcon,
  },
  {
    id: 'cnd-municipal',
    title: 'Certidão Negativa de Débitos Municipais de Curitiba',
    description:
      'Confira a certidão negativa municipal emitida pela Prefeitura de Curitiba, demonstrando a regularidade tributária e fiscal da instituição.',
    href: '/docs/transparency/cnd-municipal.pdf',
    openLabel: 'Abrir certidão municipal',
    downloadLabel: 'Baixar certidão municipal',
    icon: AccountBalanceIcon,
  },
  {
    id: 'cnd-trabalhista',
    title: 'Certidão Negativa de Débitos Trabalhistas (CNDT)',
    description:
      'Consulte a Certidão Negativa de Débitos Trabalhistas do Instituto Futuro de Excelência, emitida pelo Tribunal Superior do Trabalho, comprovando conformidade trabalhista.',
    href: '/docs/transparency/cnd-trabalhista.pdf',
    openLabel: 'Abrir certidão trabalhista',
    downloadLabel: 'Baixar certidão trabalhista',
    icon: WorkOutlineIcon,
  },
  {
    id: 'utilidade-publica-estadual',
    title: 'Utilidade Pública Estadual do Paraná',
    description:
      'Acesse a lei estadual que concede o título de utilidade pública ao Instituto Futuro de Excelência, reconhecendo oficialmente sua relevância social no Estado do Paraná.',
    href: '/docs/transparency/utilidade-estadual.pdf',
    openLabel: 'Abrir reconhecimento estadual',
    downloadLabel: 'Baixar reconhecimento estadual',
    icon: DescriptionIcon,
  },
];