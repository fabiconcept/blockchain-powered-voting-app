export const contractABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_electionSystemAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "electionSystem",
        "outputs": [
            {
                "internalType": "contract ElectionSystem",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "testElectionSystem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]