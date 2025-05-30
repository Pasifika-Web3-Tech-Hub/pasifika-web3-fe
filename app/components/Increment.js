import { useWriteContract } from "wagmi";
import { abi } from "@/lib/abi";

export default function Increment() {
  const { writeContract, isPending } = useWriteContract();

  const handleIncrement = () => {
    writeContract({
      address: "0x80d3c57b95a2fca3900f3EAC71196Bf133aaa517", 
      abi: abi,
      functionName: "pasifika", 
    });
  };

  return (
    <button 
      className="docs-button" 
      onClick={handleIncrement}
      disabled={isPending}
    >
      {isPending ? "Incrementing..." : "Increment Counter"}
    </button>
  );
}