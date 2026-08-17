import { useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)


  function onAction(formData: FormData) {
    console.log(formData)
  }


  return (
    <form action={onAction} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      
      />

       <Input
        required
        legend="Senha"
        type="password"
        placeholder="********"
      
      />

      <Button type="submit" isLoading={isLoading} >Entrar</Button>

      <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar Conta</a>

    </form>
  );
}
