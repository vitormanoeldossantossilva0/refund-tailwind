import { use, useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passWordConfirm, setPassWordConfirm] = useState ("")
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault;
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Nome"
        placeholder="Seu Nome"
        onChange={(e) => setName(e.target.value)}
      />

         <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
      />

        <Input
        required
        legend="Confirme sua senha"
        type="password"
        placeholder="Confirme Sua Senha"
        onChange={(e) => setPassWordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Ja tenho uma conta 
      </a>
    </form>
  );
}
