import { useEffect, useState } from 'react';
import './nft.css';
import NFTContainer from './NFTContainer';

export function Nft() {
    const [walletAddress, setWalletAddress] = useState(null);
    const [nfts, setNfts] = useState([]);

    const connectWallet = async () => {
        try {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
            }
        } catch (error) {
            console.log('err1==>', error);
        }
    };

    const getNftData = async () => {
        try {
            if (!walletAddress) return;
            const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`);
            const data = await response.json();
            debugger
            setNfts(data.items);
        } catch (error) {
            console.log('err2==>', error);
        }
    };

    useEffect(() => {
        getNftData();
    }, [walletAddress]);

    return (
        <div className='Nft'>
            <div className='text'>Account: {walletAddress}</div>
            <button className='connect-button' onClick={connectWallet}>
                {!walletAddress ? 'Connect Wallet' : 'Wallet Connected'}
            </button>
            <NFTContainer nfts={nfts} />
        </div>
    );
}
export default Nft;