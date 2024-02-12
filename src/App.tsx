import { useAccount } from "wagmi";
import { SendTransaction } from "./components/SendTransaction";
import { Account } from "./components/Account";
import { Connect } from "./components/Connect";

export default function App() {
  const { isConnected } = useAccount();
  return (
    <>
      {isConnected ? <Account /> : <Connect />}
      {isConnected && <SendTransaction />}
    </>
  );
}
