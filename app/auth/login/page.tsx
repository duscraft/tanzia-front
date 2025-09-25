import { H3 } from '@/ui-library/Typos/H3';
import { Paragraph } from "@/ui-library/Typos/Paragraph";
import { Link } from "@/ui-library/Typos/Link";
import { InputText } from "@/ui-library/InputText/InputText";
import { Button } from "@/ui-library/Button/Button";
import { Checkbox } from "@/ui-library/Checkbox/Checkbox";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-full px-12 md-p-32 xl:p-64 bg-light-purple-50">
      <H3>(Re) Bonjour!</H3>
      <div className="text-center">
        <Paragraph>Vous n&lsquo;avez pas encore de compte ? <Link href="/auth/register">Enregistrez-vous ici</Link></Paragraph>
      </div>
      <div className="w-full flex flex-col gap-4">
        <InputText label="Email" />
        <InputText label="Mot de passe" />
        <div className="w-full flex items-center justify-between gap-2">
          <Checkbox label="Se souvenir de moi" />
          <div className="text-right"><Link href="/auth/forgot-password">Problème de connexion ?</Link></div>
        </div>
      </div>
      <Button size="large" label="Se connecter" />
    </div>
  );
}

export default LoginPage;