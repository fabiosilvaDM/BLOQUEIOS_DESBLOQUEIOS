import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft,
  AlertCircle,
  Lock,
  Unlock
} from 'lucide-react';
import { BLOCK_TYPES, DESBLOQUEIOS_DATA } from './data';

export default function App() {
  const [actionType, setActionType] = useState<'bloqueio' | 'desbloqueio' | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'clientes' | 'fornecedores' | 'temporario' | 'permanente' | null>(null);

  const selectedBlock = actionType === 'bloqueio' && selectedId ? BLOCK_TYPES.find(b => b.id === selectedId) : null;
  const selectedDesbloqueio = actionType === 'desbloqueio' && selectedId ? DESBLOQUEIOS_DATA.find(b => b.id === selectedId) : null;

  const currentBlockData = selectedBlock && (activeTab === 'clientes' || activeTab === 'fornecedores') ? selectedBlock[activeTab] : null;
  const currentDesbloqueioData = selectedDesbloqueio && (activeTab === 'temporario' || activeTab === 'permanente') ? selectedDesbloqueio[activeTab] : null;

  const handleSelectAction = (type: 'bloqueio' | 'desbloqueio') => {
    setActionType(type);
    setSelectedId(null);
    setActiveTab(null);
  };

  const handleSelectCategory = (id: string) => {
    setSelectedId(id);
    setActiveTab(null);
  };

  const handleBack = () => {
    if (activeTab) {
      setActiveTab(null);
    } else if (selectedId) {
      setSelectedId(null);
    } else {
      setActionType(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#3e2723] font-sans uppercase selection:bg-[#c68e58] selection:text-white">
      
      {/* Header */}
      <header className="border-b border-[#e8e3db] px-6 py-10 flex flex-col items-center justify-center sticky top-0 z-20 bg-[#fdfbf7]/90 backdrop-blur-md">
        <h1 className="text-xl md:text-2xl tracking-[0.4em] uppercase font-light text-[#3e2723] text-center">
          Dados Mestre
        </h1>
        <div className="w-16 h-[1px] bg-[#c68e58] mt-6 opacity-60"></div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Select Action Type */}
          {!actionType && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center min-h-[50vh]"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-[#a3978f] mb-12 text-center">Selecione a ação</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                <button
                  onClick={() => handleSelectAction('bloqueio')}
                  className="group flex flex-col items-center justify-center p-16 bg-[#fdfbf7] border border-[#e8e3db] hover:bg-[#f5f0e6] hover:border-[#c68e58] transition-all duration-500 rounded-sm shadow-sm hover:shadow-md"
                >
                  <div className="w-24 h-24 mb-10 rounded-2xl icon-container-3d flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2">
                    <Lock className="w-10 h-10 text-[#a98467] icon-3d transition-colors duration-500 group-hover:text-[#c68e58]" strokeWidth={1.2} />
                  </div>
                  <span className="text-sm tracking-[0.3em] uppercase text-[#a98467] group-hover:text-[#c68e58] transform transition-all duration-500 group-hover:-translate-y-2">Bloqueios</span>
                </button>
                
                <button
                  onClick={() => handleSelectAction('desbloqueio')}
                  className="group flex flex-col items-center justify-center p-16 bg-[#fdfbf7] border border-[#e8e3db] hover:bg-[#f5f0e6] hover:border-[#c68e58] transition-all duration-500 rounded-sm shadow-sm hover:shadow-md"
                >
                  <div className="w-24 h-24 mb-10 rounded-2xl icon-container-3d flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2">
                    <Unlock className="w-10 h-10 text-[#a98467] icon-3d transition-colors duration-500 group-hover:text-[#c68e58]" strokeWidth={1.2} />
                  </div>
                  <span className="text-sm tracking-[0.3em] uppercase text-[#a98467] group-hover:text-[#c68e58] transform transition-all duration-500 group-hover:-translate-y-2">Desbloqueios</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Select Category */}
          {actionType && !selectedId && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <button 
                onClick={handleBack}
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[#a3978f] hover:text-[#c68e58] hover:bg-[#f5f0e6] px-4 py-2 -ml-4 rounded-md transition-all duration-500 mb-12"
              >
                <ArrowLeft className="w-3 h-3" />
                Voltar
              </button>

              <p className="text-xs tracking-[0.2em] uppercase text-[#a3978f] mb-12 text-center">
                Selecione o tipo de {actionType}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#e8e3db] border border-[#e8e3db]">
                {(actionType === 'bloqueio' ? BLOCK_TYPES : DESBLOQUEIOS_DATA).map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectCategory(item.id)}
                      className="group flex flex-col items-center justify-center p-12 bg-[#fdfbf7] hover:bg-[#f5f0e6] transition-all duration-500"
                    >
                      <div className="w-16 h-16 mb-8 rounded-2xl icon-container-3d flex items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
                        <Icon className={`w-7 h-7 ${item.colorClass} icon-3d transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.2} />
                      </div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#3e2723] text-center transform transition-all duration-500 group-hover:-translate-y-2">{item.shortTitle}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 3 & 4: Selected Category & Tab Selection */}
          {actionType && selectedId && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <button 
                onClick={handleBack}
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[#a3978f] hover:text-[#c68e58] hover:bg-[#f5f0e6] px-4 py-2 -ml-4 rounded-md transition-all duration-500 mb-16"
              >
                <ArrowLeft className="w-3 h-3" />
                Voltar
              </button>

              {/* Category Header */}
              <div className="flex flex-col items-center text-center mb-20">
                <div className="w-20 h-20 mb-8 rounded-2xl icon-container-3d flex items-center justify-center">
                  {actionType === 'bloqueio' && selectedBlock && (
                    <selectedBlock.icon className={`w-10 h-10 ${selectedBlock.colorClass} icon-3d`} strokeWidth={1.2} />
                  )}
                  {actionType === 'desbloqueio' && selectedDesbloqueio && (
                    <selectedDesbloqueio.icon className={`w-10 h-10 ${selectedDesbloqueio.colorClass} icon-3d`} strokeWidth={1.2} />
                  )}
                </div>
                <h2 className="text-base md:text-lg tracking-[0.2em] uppercase text-[#c68e58]">
                  {actionType === 'bloqueio' ? selectedBlock?.title : selectedDesbloqueio?.title}
                </h2>
              </div>

              {/* Tab Selection */}
              <div className="flex justify-center gap-10 mb-16 border-b border-[#e8e3db]">
                {actionType === 'bloqueio' ? (
                  <>
                    <button
                      onClick={() => setActiveTab('clientes')}
                      className={`pb-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-500 relative ${
                        activeTab === 'clientes' ? 'text-[#3e2723] font-medium' : 'text-[#a3978f] hover:text-[#c68e58]'
                      }`}
                    >
                      Clientes
                      {activeTab === 'clientes' && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c68e58]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab('fornecedores')}
                      className={`pb-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-500 relative ${
                        activeTab === 'fornecedores' ? 'text-[#3e2723] font-medium' : 'text-[#a3978f] hover:text-[#c68e58]'
                      }`}
                    >
                      Fornecedores
                      {activeTab === 'fornecedores' && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c68e58]" />
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setActiveTab('temporario')}
                      className={`pb-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-500 relative ${
                        activeTab === 'temporario' ? 'text-[#3e2723] font-medium' : 'text-[#a3978f] hover:text-[#c68e58]'
                      }`}
                    >
                      Temporário
                      {activeTab === 'temporario' && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c68e58]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab('permanente')}
                      className={`pb-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-500 relative ${
                        activeTab === 'permanente' ? 'text-[#3e2723] font-medium' : 'text-[#a3978f] hover:text-[#c68e58]'
                      }`}
                    >
                      Permanente
                      {activeTab === 'permanente' && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c68e58]" />
                      )}
                    </button>
                  </>
                )}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab && actionType === 'bloqueio' && currentBlockData && selectedBlock && (
                  <motion.div
                    key={`bloqueio-${activeTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-14"
                  >
                    {/* Requerentes */}
                    <div>
                      <h3 className="text-sm tracking-[0.2em] uppercase text-[#c68e58] mb-6">Requerente</h3>
                      <ul className="space-y-4">
                        {selectedBlock.requerentes.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-[10px] tracking-[0.2em] uppercase text-[#3e2723]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c68e58] mt-1.5 shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Códigos */}
                    <div className="border-t border-[#e8e3db] pt-10">
                      <h3 className="text-sm tracking-[0.2em] uppercase text-[#c68e58] mb-6">Código a utilizar</h3>
                      <div className="flex flex-wrap gap-3">
                        {currentBlockData.codigos.map((codigo, idx) => (
                          <span key={idx} className="px-5 py-2.5 bg-[#f5f0e6] border border-[#e8e3db] text-[#3e2723] text-[10px] tracking-[0.2em] uppercase">
                            {codigo}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Âmbitos */}
                    <div className="border-t border-[#e8e3db] pt-10">
                      <h3 className="text-sm tracking-[0.2em] uppercase text-[#c68e58] mb-6">Âmbito</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentBlockData.ambitos.map((ambito, idx) => (
                          <div key={idx} className="p-5 border border-[#e8e3db] text-[10px] tracking-[0.2em] uppercase text-[#3e2723] flex items-center gap-4 bg-[#fdfbf7]">
                            <div className="w-1.5 h-1.5 bg-[#c68e58] rounded-full shrink-0"></div>
                            {ambito}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arquivo no Dado-Mestre */}
                    <div className="border-t border-[#e8e3db] pt-10">
                      <h3 className="text-sm tracking-[0.2em] uppercase text-[#c68e58] mb-6">Arquivo no Dado-Mestre</h3>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#3e2723] leading-relaxed">
                        {selectedBlock.arquivo}
                      </p>
                    </div>

                    {/* Feedback */}
                    <div className="border-t border-[#e8e3db] pt-10">
                      <h3 className="text-sm tracking-[0.2em] uppercase text-[#c68e58] mb-6">Resposta / Feedback</h3>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#3e2723] leading-relaxed">
                        {selectedBlock.feedback}
                      </p>
                      
                      <div className="mt-8 p-5 bg-[#f5f0e6] border border-[#e8e3db] flex items-start gap-4">
                        <AlertCircle className="w-5 h-5 text-[#c68e58] shrink-0 mt-0.5" />
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#3e2723]">
                          Aviso: {activeTab === 'clientes' 
                            ? 'Por favor, verificar se está aberto em Fornecedor e aplicar o respectivo bloqueio' 
                            : 'Por favor, verificar se está aberto em Clientes e aplicar o respectivo bloqueio'}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                )}

                {activeTab && actionType === 'desbloqueio' && currentDesbloqueioData && selectedDesbloqueio && (
                  <motion.div
                    key={`desbloqueio-${activeTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-14"
                  >
                    {/* Action Text Banner */}
                    <div className="bg-[#f5f0e6] border border-[#e8e3db] p-5 flex justify-center">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#c68e58]">
                        {currentDesbloqueioData.actionText}
                      </span>
                    </div>

                    {/* Âmbito */}
                    <div>
                      <h3 className="text-sm tracking-[0.2em] uppercase text-[#c68e58] mb-6">Âmbito</h3>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#3e2723] leading-relaxed">
                        {currentDesbloqueioData.ambito}
                      </p>
                    </div>

                    {/* Autorizações */}
                    <div className="border-t border-[#e8e3db] pt-10">
                      <h3 className="text-sm tracking-[0.2em] uppercase text-[#c68e58] mb-6">Autorização</h3>
                      
                      {currentDesbloqueioData.autorizacao ? (
                        <ul className="space-y-4">
                          {currentDesbloqueioData.autorizacao.map((auth, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-[10px] tracking-[0.2em] uppercase text-[#3e2723]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c68e58] mt-1.5 shrink-0"></span>
                              {auth}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                          {currentDesbloqueioData.autorizacaoVendasCompras && (
                            <div>
                              <h4 className="text-[11px] text-center tracking-[0.2em] uppercase text-[#a3978f] mb-5">Vendas / Compras</h4>
                              <ul className="space-y-4">
                                {currentDesbloqueioData.autorizacaoVendasCompras.map((auth, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-[10px] tracking-[0.2em] uppercase text-[#3e2723]">
                                    <span className="w-1 h-1 rounded-full bg-[#c68e58] mt-2 shrink-0"></span>
                                    {auth}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {currentDesbloqueioData.autorizacaoRegisto && (
                            <div>
                              <h4 className="text-[11px] text-center tracking-[0.2em] uppercase text-[#a3978f] mb-5">Registo (Fatura/Nota)</h4>
                              <ul className="space-y-4">
                                {currentDesbloqueioData.autorizacaoRegisto.map((auth, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-[10px] tracking-[0.2em] uppercase text-[#3e2723]">
                                    <span className="w-1 h-1 rounded-full bg-[#c68e58] mt-2 shrink-0"></span>
                                    {auth}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {currentDesbloqueioData.autorizacaoPagamentos && (
                            <div>
                              <h4 className="text-[11px] text-center tracking-[0.2em] uppercase text-[#a3978f] mb-5">Pagamentos</h4>
                              <ul className="space-y-4">
                                {currentDesbloqueioData.autorizacaoPagamentos.map((auth, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-[10px] tracking-[0.2em] uppercase text-[#3e2723]">
                                    <span className="w-1 h-1 rounded-full bg-[#c68e58] mt-2 shrink-0"></span>
                                    {auth}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Obs. Dados Mestre */}
                    <div className="border-t border-[#e8e3db] pt-10">
                      <h3 className="text-sm tracking-[0.2em] uppercase text-[#c68e58] mb-6">Obs. Dados Mestre</h3>
                      <ul className="space-y-4">
                        {currentDesbloqueioData.obsDadosMestre.map((obs, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-[10px] tracking-[0.2em] uppercase text-[#3e2723]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c68e58] mt-1.5 shrink-0"></span>
                            {obs}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
