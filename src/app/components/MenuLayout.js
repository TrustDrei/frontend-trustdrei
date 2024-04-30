'use client';

import { useEffect, useState } from 'react';
import SideBar from './SideBar';

import { Layout, Menu, theme, Typography } from 'antd';

const { Header, Content, Sider } = Layout;

const { Title } = Typography;

export default function MenuLayout({ children }) {
    const [walletAddress, setWalletAddress] = useState('');
    const connectWallet = async () => {
        console.log('connectWallet');
        // Check if metamask extension exists
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('Please install MetaMask!');
        }
    };

    useEffect(() => {
        connectWallet();
    }, []);
    return (
        <div className="p-4">
            <h2 className="font-bold">TrustDrei</h2>
            {walletAddress ? (
                <div>
                    <p>
                        <b> Wallet Address: </b> {walletAddress}{' '}
                    </p>
                    <div className="mt-4 flex flex-row">
                        <SideBar className="flex-1" />
                        <div className="px-4">{children}</div>
                    </div>
                </div>
            ) : (
                <div>
                    <p>Connect with metamask to view your wallet address</p>
                    <button onClick={connectWallet}>
                        Connect with metamask
                    </button>
                </div>
            )}
        </div>
    );
}
