import React,{useState} from "react";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import PreferencesSection from "../sections/PreferencesSection";
import WalletsSection from "../sections/WalletsSection";
import DialogComponent from "../components/DialogComponent";
import { useRouter } from "next/router";

// picks up a nested color value using dot notation
// => `theme.colors.gray[50]`

export default function Home() {
  const [Open, setOpen] = useState();
  const router = useRouter();

  const handleAction = (target) => {
    if (target === "wallets") {
      router.push("/walletDetails");
    } else if (target === "users") {
      router.push("/users/wallet");
    } else if (target === "devs") {
      router.push("/devs/walletDiscovery");
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <DialogComponent open={Open} setOpen={setOpen} />
      <HeroSection handleAction={handleAction} />
      <PreferencesSection handleAction={handleAction} />
      <FeaturesSection handleAction={handleAction} />
      <WalletsSection handleAction={handleAction} />
    </>
  );
}
