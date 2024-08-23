import { enUsText } from "@/texts/en-us"
import { ptBrText } from "@/texts/pt-br"
import { TextInterface } from "@/texts/text-interface"
import { useState } from "react"

export const useLanguage = (): {text: TextInterface, changeLanguage: () => void, language: string} => {
  const [language, setLanguage] = useState('en-us')
  const [text, setText] = useState(enUsText)

  const changeLanguage = () => {
    if (language == 'pt-br') {
      setLanguage('en-us')
      setText(enUsText)
    } else {
      setLanguage('pt-br')
      setText(ptBrText)
    }
  }

  return {
    text,
    changeLanguage,
    language
  }
}