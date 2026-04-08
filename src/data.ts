import { Scale, RefreshCw, Landmark, CreditCard, FileText, FolderTree, Handshake, ShieldCheck, Package } from 'lucide-react';

export type EntityData = {
  codigos: string[];
  ambitos: string[];
};

export type BlockType = {
  id: string;
  title: string;
  shortTitle: string;
  icon: any;
  colorClass: string;
  requerentes: string[];
  clientes: EntityData;
  fornecedores: EntityData;
  arquivo: string;
  feedback: string;
};

export const BLOCK_TYPES: BlockType[] = [
  {
    id: 'insolvencia',
    title: 'Insolvência',
    shortTitle: 'Insolvência',
    icon: Scale,
    colorClass: 'text-[#b35a41]',
    requerentes: [
      'Análise Contas (procedimento PER/Insolventes)',
      'Direção Jurídica'
    ],
    clientes: {
      codigos: ['01'],
      ambitos: [
        'Empresa Selecionada [TODAS]',
        'Bloqueio p/ pagamento "A"',
        'Bloqueio p/ contabilização',
        'Bloqueio org. vendas'
      ]
    },
    fornecedores: {
      codigos: ['292'],
      ambitos: [
        'Empresa Selecionada [TODAS]',
        'Bloqueio p/ pagamento "A"',
        'Bloqueio p/ contabilização',
        'Bloqueio org. compras'
      ]
    },
    arquivo: 'Não aplicável',
    feedback: 'Não aplicável'
  },
  {
    id: 'per',
    title: 'Processo Especial Revitalização (PER)',
    shortTitle: 'PER',
    icon: RefreshCw,
    colorClass: 'text-[#c68e58]',
    requerentes: [
      'Análise Contas (procedimento PER/Insolventes)',
      'Direção Jurídica'
    ],
    clientes: {
      codigos: ['05'],
      ambitos: [
        'Empresa Selecionada [TODAS]',
        'Bloqueio p/ pagamento "A"',
        'Cond.Pagamento: "000"'
      ]
    },
    fornecedores: {
      codigos: ['340'],
      ambitos: [
        'Empresa Selecionada [TODAS]',
        'Bloqueio p/ pagamento "A"'
      ]
    },
    arquivo: 'Não aplicável',
    feedback: 'Não aplicável'
  },
  {
    id: 'tribunal',
    title: 'Tribunal / Injunção / Penhora',
    shortTitle: 'Tribunal',
    icon: Landmark,
    colorClass: 'text-[#8b5a2b]',
    requerentes: [
      'Prestação de Contas (procedimento penhoras EUROPA/LATAM)',
      'Prestação de Contas (procedimento penhoras AFRICA)',
      'Direção Jurídica'
    ],
    clientes: {
      codigos: ['10'],
      ambitos: [
        'Empresa Selecionada [ESPECIFICA]',
        'Bloqueio p/ pagamento "A"'
      ]
    },
    fornecedores: {
      codigos: [
        '285 (FINANCAS)', '286 (SEG. SOCIAL)', '287 (TRIB./SOLIC.EXECUCAO)',
        '288 (FIN. E TRIBUNAL)', '289 (FIN. E SEG. SOCIAL)', '290 (SEG.SOCIAL E TRIBUNAL)',
        '291 (FIN.,SEG.SOCIAL E TRIB)', '350 (PER + FINANÇAS)', '351 (PER + SEG. SOCIAL)',
        '352 (PER + FIN. E SEG. SOCIAL)', '353 (PER + TRIB./SOLIC)', '354 (PER + FIN. E TRIB)',
        '355 (PER + SS E TRIB)', '356 (PER + FIN,SS,TRIB)'
      ],
      ambitos: [
        'Empresa Selecionada [ESPECIFICA]',
        'Bloqueio p/ pagamento "P"'
      ]
    },
    arquivo: 'Anexar email/documento',
    feedback: 'Não aplicável'
  },
  {
    id: 'credito',
    title: 'Controlo de Crédito [SUMA]',
    shortTitle: 'Crédito',
    icon: CreditCard,
    colorClass: 'text-[#a98467]',
    requerentes: [
      'Patrícia Pereira / Ana Castelão / Dina Rodrigues',
      'controlo.credito@suma.pt'
    ],
    clientes: {
      codigos: ['11', '08 (PER + CONTROLO CRÉDITO)'],
      ambitos: [
        'Empresa Selecionada [TODAS]',
        'Bloqueio Vendas (ordem/remessa/faturamento)',
        'PER -> Bloq.Pag. "A"; Cond.Pag. "000"'
      ]
    },
    fornecedores: {
      codigos: ['Não aplicável'],
      ambitos: ['Não aplicável']
    },
    arquivo: 'Não aplicável',
    feedback: 'Ao requerente, com o CC: Ana Castelão + Dina Rodrigues + controlo.credito@suma.pt'
  },
  {
    id: 'dissolucao',
    title: 'Dissolução / Liquidação / Fusão',
    shortTitle: 'Dissolução',
    icon: FileText,
    colorClass: 'text-[#7f5539]',
    requerentes: [
      'Responsável Financeiro (da empresa)',
      'Prestador de Contas (da empresa)',
      'Equipa Dados-Mestre'
    ],
    clientes: {
      codigos: ['15'],
      ambitos: [
        'Todas as Empresas [CENTRAL]',
        'Bloqueio p/ contabilização',
        'Bloqueio org. vendas',
        'Marc. Eliminação',
        'Marc. Arquivamento',
        'Tipo de Imposto = CA'
      ]
    },
    fornecedores: {
      codigos: ['375'],
      ambitos: [
        'Todas as Empresas [CENTRAL]',
        'Bloqueio p/ contabilização',
        'Bloqueio org. compras',
        'Marc. Eliminação',
        'Marc. Arquivamento',
        'Tipo de Imposto = CA'
      ]
    },
    arquivo: 'Campo "Observações na conta": Dissolução e Enc. Liquid. (DD/MM/AAAA) / Extinção (DD/MM/AAAA) / Fusão (AAAA/MM/DD) - BP xxxxxxx',
    feedback: 'Ao requerente, com o conhecimento dos CFO das regiões do Grupo e do responsável corporativo da logística (Jose Duarte Araujo).'
  },
  {
    id: 'dado-mestre',
    title: 'Dado-Mestre (Duplicações ou erros)',
    shortTitle: 'Dado-Mestre',
    icon: FolderTree,
    colorClass: 'text-[#d4a373]',
    requerentes: [
      'Equipa Dados-Mestre'
    ],
    clientes: {
      codigos: ['16'],
      ambitos: [
        'Todas as Empresas [CENTRAL]',
        'Bloqueio p/ contabilização',
        'Bloqueio org. vendas',
        'Marc. Eliminação',
        'Marc. Arquivamento'
      ]
    },
    fornecedores: {
      codigos: ['376'],
      ambitos: [
        'Todas as Empresas [CENTRAL]',
        'Bloqueio p/ contabilização',
        'Bloqueio org. compras',
        'Marc. Eliminação',
        'Marc. Arquivamento'
      ]
    },
    arquivo: 'Campo "Observações na conta": Duplicado (DD/MM/AAAA) - BP xxxxxxx / Filial (migração)',
    feedback: 'Não aplicável'
  },
  {
    id: 'comercial',
    title: 'Comercial (Aprovisionamentos)',
    shortTitle: 'Comercial',
    icon: Handshake,
    colorClass: 'text-[#9c6644]',
    requerentes: [
      'Coordenador de Aprovisionamentos (da empresa)'
    ],
    clientes: {
      codigos: ['17', '06 (PER + COMERCIAL)'],
      ambitos: [
        'Empresa Selecionada [TODAS]',
        'Bloqueio p/ pagamento "A"',
        'PER -> Cond.Pag:"000"'
      ]
    },
    fornecedores: {
      codigos: ['377', '357 (PER + COMERCIAL)', '358 (PER + PENHOR + COMERC)', '365 (PENHORA + COMERCIAL)'],
      ambitos: [
        'Empresa Selecionada [TODAS]',
        'Bloqueio p/ pagamento "A"',
        'PENHORA -> Bloq.Pag."P"',
        'Bloqueio org. compras'
      ]
    },
    arquivo: 'Anexar email/documento',
    feedback: 'Ao requerente, com o conhecimento do Coordenador da Área de Procurement e do responsável corporativo da logística (Jose Duarte Araujo/Nuno Henrique Dias).'
  },
  {
    id: 'compliance',
    title: 'Compliance',
    shortTitle: 'Compliance',
    icon: ShieldCheck,
    colorClass: 'text-[#b07d62]',
    requerentes: ['Chief Compliance Officer (Sonia Torcato)'],
    clientes: { 
      codigos: ['18', '07 (PER + COMPLIANCE)'], 
      ambitos: [
        'Empresa Selecionada [TODAS]',
        'Bloqueio p/ contabilização',
        'Bloqueio org. vendas',
        'PER -> Bloq.Pag. "A"; Cond.Pag "000"'
      ] 
    },
    fornecedores: { 
      codigos: ['378', '359 (PER + COMPLIANCE)', '360 (PER + PENHOR + COMPL)', '366 (PENHORA + COMPLIANCE)'], 
      ambitos: [
        'Empresa Selecionada [TODAS]',
        'PENHORA -> Bloq.Pag."P"',
        'Bloqueio p/ contabilização',
        'Bloqueio org. compras'
      ] 
    },
    arquivo: 'Anexar email/documento',
    feedback: 'O bloqueio e desbloqueio por motivo 378-Compliance, o email deverá ser sempre dirigido à Sonia Torcato (responsável pelo Compliance) com o C/c do Jose Duarte Araujo (responsável Compras/Procurment).'
  },
  {
    id: 'outros',
    title: 'Outros / Migração',
    shortTitle: 'Outros',
    icon: Package,
    colorClass: 'text-[#6b4e3b]',
    requerentes: [
      'Responsável Financeiro (da empresa)',
      'Prestador de Contas (da empresa)',
      'Equipa Dados-Mestre'
    ],
    clientes: { 
      codigos: ['19'], 
      ambitos: [
        'Empresa Selecionada [ESPECIFICA]',
        'Bloqueios AD-HOC',
        'Se Bloqueio p/ pagamento -> "A"'
      ] 
    },
    fornecedores: { 
      codigos: ['379'], 
      ambitos: [
        'Empresa Selecionada [ESPECIFICA]',
        'Bloqueios AD-HOC',
        'Se Bloqueio p/ pagamento -> "A"'
      ] 
    },
    arquivo: 'Campo "Observação na conta" Empresa = SPN',
    feedback: 'Ao requerente.'
  }
];

export type DesbloqueioModeData = {
  ambito: string;
  autorizacaoVendasCompras?: string[];
  autorizacaoRegisto?: string[];
  autorizacaoPagamentos?: string[];
  autorizacao?: string[];
  obsDadosMestre: string[];
  actionText: string;
};

export type DesbloqueioType = {
  id: string;
  title: string;
  shortTitle: string;
  icon: any;
  colorClass: string;
  temporario: DesbloqueioModeData;
  permanente: DesbloqueioModeData;
};

export const DESBLOQUEIOS_DATA: DesbloqueioType[] = [
  {
    id: 'insolvencia',
    title: 'Insolvência',
    shortTitle: 'Insolvência',
    icon: Scale,
    colorClass: 'text-[#b35a41]',
    temporario: {
      actionText: 'REPOSTO NO FINAL DO DIA',
      ambito: '"Empresa Selecionada"',
      autorizacaoVendasCompras: [
        '1º consultar Direção Jurídica',
        '[Vendas] CFO da região, em consonância com a Direção Jurídica',
        '[Compras] Responsável corporativo da logística (Jose Duarte Araujo)'
      ],
      autorizacaoRegisto: ['Não é necessário autorização'],
      autorizacaoPagamentos: ['Apenas pode ser autorizado/validado pela Direção Jurídica ( de acordo com a resposta do Administrador Insolvência)'],
      obsDadosMestre: ['N/A']
    },
    permanente: {
      actionText: 'RETIRAR CÓDIGO E ELIMINAR BLOQUEIOS',
      ambito: '"Empresa Seleccionada" [TODAS]',
      autorizacao: ['Direção Jurídica'],
      obsDadosMestre: ['Anexar email/documento + ATUALIZAR RPA INSOLVENTES']
    }
  },
  {
    id: 'per',
    title: 'Processo Especial Revitalização (PER)',
    shortTitle: 'PER',
    icon: RefreshCw,
    colorClass: 'text-[#c68e58]',
    temporario: {
      actionText: 'REPOSTO NO FINAL DO DIA',
      ambito: '"Empresa Selecionada"',
      autorizacaoVendasCompras: ['N/A'],
      autorizacaoRegisto: ['N/A'],
      autorizacaoPagamentos: [
        '1º consultar Direção Jurídica',
        '2º pode ser autorizado/validado pelo CFO da região, em consonância com a Direção Jurídica'
      ],
      obsDadosMestre: ['N/A']
    },
    permanente: {
      actionText: 'RETIRAR CÓDIGO E ELIMINAR BLOQUEIOS',
      ambito: '"Empresa Seleccionada" [TODAS]',
      autorizacao: ['Direção Jurídica'],
      obsDadosMestre: ['Anexar email/documento + ATUALIZAR RPA INSOLVENTES']
    }
  },
  {
    id: 'tribunal',
    title: 'Tribunal / Injunção / Penhora',
    shortTitle: 'Tribunal',
    icon: Landmark,
    colorClass: 'text-[#8b5a2b]',
    temporario: {
      actionText: 'REPOSTO NO FINAL DO DIA',
      ambito: '"Empresa Selecionada"',
      autorizacaoVendasCompras: ['N/A'],
      autorizacaoRegisto: ['N/A'],
      autorizacaoPagamentos: ['Prestadores de Contas (procedimento penhoras)'],
      obsDadosMestre: ['N/A']
    },
    permanente: {
      actionText: 'RETIRAR CÓDIGO E ELIMINAR BLOQUEIOS',
      ambito: '"Empresa Seleccionada"',
      autorizacao: [
        'Prestadores de Contas (procedimento penhoras)',
        'Direção Jurídica'
      ],
      obsDadosMestre: ['Anexar email/documento']
    }
  },
  {
    id: 'credito',
    title: 'Controlo de Crédito [SUMA]',
    shortTitle: 'Crédito',
    icon: CreditCard,
    colorClass: 'text-[#a98467]',
    temporario: {
      actionText: 'REPOSTO NO FINAL DO DIA',
      ambito: '"Empresa Selecionada"',
      autorizacaoVendasCompras: [
        'Patrícia Pereira / Ana Castelão / Dina Rodrigues',
        'controlo.credito@suma.pt'
      ],
      autorizacaoRegisto: ['N/A'],
      autorizacaoPagamentos: ['N/A'],
      obsDadosMestre: ['N/A']
    },
    permanente: {
      actionText: 'RETIRAR CÓDIGO E ELIMINAR BLOQUEIOS',
      ambito: '"Empresa Seleccionada"',
      autorizacao: [
        'Patrícia Pereira / Ana Castelão / Dina Rodrigues',
        'controlo.credito@suma.pt'
      ],
      obsDadosMestre: ['N/A']
    }
  },
  {
    id: 'comercial',
    title: 'Comercial',
    shortTitle: 'Comercial',
    icon: Handshake,
    colorClass: 'text-[#9c6644]',
    temporario: {
      actionText: 'REPOSTO NO FINAL DO DIA',
      ambito: '"Empresa Selecionada"',
      autorizacaoVendasCompras: ['Responsável corporativo da logística (José Duarte Araújo)'],
      autorizacaoRegisto: ['Não é necessário autorização'],
      autorizacaoPagamentos: ['Apenas pode ser autorizado/validado pelo José Duarte Araújo <jose.d.araujo@mota-engil.com>'],
      obsDadosMestre: ['N/A']
    },
    permanente: {
      actionText: 'RETIRAR CÓDIGO E ELIMINAR BLOQUEIOS',
      ambito: '"Empresa Seleccionada" [TODAS]',
      autorizacao: ['Apenas com a autorização de todos os responsáveis: CFO das regiões do Grupo e responsável corporativo da logística (José Duarte Araújo)'],
      obsDadosMestre: ['Anexar email/documento']
    }
  },
  {
    id: 'compliance',
    title: 'Compliance',
    shortTitle: 'Compliance',
    icon: ShieldCheck,
    colorClass: 'text-[#b07d62]',
    temporario: {
      actionText: 'REPOSTO NO FINAL DO DIA',
      ambito: '"Empresa Selecionada"',
      autorizacaoVendasCompras: ['O bloqueio e desbloqueio por motivo 378 Compliance, o email deverá ser sempre dirigido à Sónia Torcato (responsável pelo Compliance) com o CC do José Duarte Araújo (responsável Compras/Procurment)'],
      autorizacaoRegisto: ['O bloqueio e desbloqueio por motivo 378 Compliance, o email deverá ser sempre dirigido à Sónia Torcato (responsável pelo Compliance) com o CC do José Duarte Araújo (responsável Compras/Procurment)'],
      autorizacaoPagamentos: ['O bloqueio e desbloqueio por motivo 378 Compliance, o email deverá ser sempre dirigido à Sónia Torcato (responsável pelo Compliance) com o CC do José Duarte Araújo (responsável Compras/Procurment)'],
      obsDadosMestre: ['N/A']
    },
    permanente: {
      actionText: 'RETIRAR CÓDIGO E ELIMINAR BLOQUEIOS',
      ambito: '"Empresa Seleccionada" [TODAS]',
      autorizacao: ['O bloqueio e desbloqueio por motivo 378 Compliance, o email deverá ser sempre dirigido à Sónia Torcato (responsável pelo Compliance) com o CC do José Duarte Araújo (responsável Compras/Procurment)'],
      obsDadosMestre: ['Anexar email/documento']
    }
  },
  {
    id: 'outros',
    title: 'Outros / Migração',
    shortTitle: 'Outros',
    icon: Package,
    colorClass: 'text-[#6b4e3b]',
    temporario: {
      actionText: 'REPOSTO NO FINAL DO DIA',
      ambito: '"Empresa Selecionada"',
      autorizacaoVendasCompras: [
        '[Vendas] CFO da região, em consonância com a Direção Jurídica',
        '[Compras] Responsável corporativo da logística (José Duarte Araújo)'
      ],
      autorizacaoRegisto: ['Não é necessário autorização'],
      autorizacaoPagamentos: ['Apenas pode ser autorizado/validado pelo CFO da região'],
      obsDadosMestre: ['N/A']
    },
    permanente: {
      actionText: 'RETIRAR CÓDIGO E ELIMINAR BLOQUEIOS',
      ambito: '"Empresa Seleccionada"',
      autorizacao: ['Apenas pode ser autorização/validado pelo CFO da região'],
      obsDadosMestre: ['Anexar email/documento']
    }
  }
];
