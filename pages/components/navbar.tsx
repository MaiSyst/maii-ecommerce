import Link from 'next/link';
import { MaiLiv, MaiNav } from "../assets/styles/navbar";

const Navbar = () => (
  <MaiNav>
    <MaiLiv active={true}>
      <Link href={"#home"}>
        Accueil
      </Link>
    </MaiLiv>
    <MaiLiv active={false}>
      <Link href={"#product"}>Produit</Link>
    </MaiLiv>
    <MaiLiv active={false}>
      <Link href={"#offer"}>Offres</Link>
    </MaiLiv>
    <MaiLiv active={false}>
      <Link href={"#contact"}>Contact</Link>
    </MaiLiv>
    <MaiLiv active={false}>
      <Link href={"/login"}>Compte</Link>
    </MaiLiv>
  </MaiNav>
);


export default Navbar;