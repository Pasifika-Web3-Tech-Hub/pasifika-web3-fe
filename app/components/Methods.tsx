'use client';
import { useState, useEffect } from 'react';
import { useDynamicContext, useIsLoggedIn, useUserWallets } from "@dynamic-labs/sdk-react-core";
import { isEthereumWallet } from '@dynamic-labs/ethereum'
import { isBitcoinWallet } from '@dynamic-labs/bitcoin'

import './Methods.css';

interface DynamicMethodsProps {
  isDarkMode: boolean;
}

export default function DynamicMethods({ isDarkMode }: DynamicMethodsProps) {
  const isLoggedIn = useIsLoggedIn();
  const { sdkHasLoaded, primaryWallet, user } = useDynamicContext();
  const userWallets = useUserWallets();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState('');

  
  const safeStringify = (obj: unknown): string => {
  const seen = new WeakSet();
  return JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return "[Circular]";
        }
        seen.add(value);
      }
      return value;
    },
    2
  );
};


  useEffect(() => {
    if (sdkHasLoaded && isLoggedIn && primaryWallet) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [sdkHasLoaded, isLoggedIn, primaryWallet]);

  function clearResult() {
    setResult('');
  }

  function showUser() {
    setResult(safeStringify(user));
  }

  function showUserWallets() {
    setResult(safeStringify(userWallets));
  }


async function fetchPublicClient() {
  if (!primaryWallet || !isEthereumWallet(primaryWallet)) return;

  const publicClient = await primaryWallet.getPublicClient();
  setResult(safeStringify(publicClient));
}

async function fetchWalletClient() {
  if (!primaryWallet || !isEthereumWallet(primaryWallet)) return;

  const walletClient = await primaryWallet.getWalletClient();
  setResult(safeStringify(walletClient));
}

async function signEthereumMessage() {
  if (!primaryWallet || !isEthereumWallet(primaryWallet)) return;

  const signature = await primaryWallet.signMessage("Hello World");

  if (typeof signature !== "string") {
    setResult("No signature returned");
    return;
  }
  setResult(signature);
}




   return (
    <>
      {!isLoading && (
        <div className="dynamic-methods" data-theme={isDarkMode ? 'dark' : 'light'}>
          <div className="methods-container">
            <button className="btn btn-primary" onClick={showUser}>Fetch User</button>
            <button className="btn btn-primary" onClick={showUserWallets}>Fetch User Wallets</button>

            
{primaryWallet && isEthereumWallet(primaryWallet) && (
    <>
      <button className="btn btn-primary" onClick={fetchPublicClient}>
        Fetch Public Client
      </button>
      <button className="btn btn-primary" onClick={fetchWalletClient}>
        Fetch Wallet Client
      </button>
      <button className="btn btn-primary" onClick={signEthereumMessage}>
        Sign &quot;Hello World&quot; on Ethereum
      </button>
    </>
  )}


        </div>
          {result && (
            <div className="results-container">
              <pre className="results-text">{result}</pre>
            </div>
          )}
          {result && (
            <div className="clear-container">
              <button className="btn btn-primary" onClick={clearResult}>Clear</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}