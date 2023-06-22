import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI } from '../Smart Contract/utils';

export default function ConnectWeb3() {
    const [contract, setContract] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const connectWeb3 = async () => {
            if (window.ethereum) {
                await window.ethereum.enable();
                const web3Provider = new ethers.BrowserProvider(window.ethereum);
                const signer = web3Provider.getSigner();

                // Replace 'YourContractAddress' with your actual smart contract address
                const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRES;


                // Instantiate the contract
                const deployedContract = new ethers.Contract(contractAddress, contractABI, signer);
                setContract(deployedContract);
            } else {
                console.error('Ethereum provider not found.');
            }

            setIsLoading(false);
        };

        connectWeb3();
    }, []);

    const callSmartContractMethod = async () => {
        if (contract) {
            try {
                // Replace 'yourMethod' with the actual method you want to call on your smart contract
                const result = await contract.yourMethod();

                // Handle the result of the method call
                console.log('Smart contract method result:', result);
            } catch (error) {
                console.error('Error calling smart contract method:', error);
            }
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Connected to Smart Contract!</h1>
            <button onClick={callSmartContractMethod}>Call Smart Contract Method</button>
        </div>
    );
}
