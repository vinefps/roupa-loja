"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import React from 'react'

// Definindo a interface do tipo do contexto
interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

// Interface para o provider aceitar filhos como props
interface ChildrenContextProvider {
  children: ReactNode;
}

// Criando o contexto com o tipo definido e iniciando como indefinido
export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

// Hook para usar o contexto de busca com tipagem adequada
export function useSearchContext(): SearchContextType {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Nao foi possivel criar o context");
  }
  return context;
}

// Provider para o contexto de busca
export function SearchProvider({ children }: ChildrenContextProvider) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
