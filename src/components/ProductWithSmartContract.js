'use client'

import { Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Web3 from 'web3'; // Import Web3 library

import { contractAddress, contractAbi } from '@/constants/constant'; // Import contract address and ABI
import { useState } from 'react';

const ProductComponentSmartContract = () => {
    const [products, setProducts] = useState([]); // State for products

    // Replace with your contract address and provider details
    const web3 = new Web3(new Web3.providers.HttpProvider('PROVIDER_URL'));
    const trustDreiContract = new web3.eth.Contract(
        contractAbi,
        contractAddress,
    );

    const getProducts = async () => {
        try {
            const fetchedProducts = await trustDreiContract.methods
                .getTotalProducts()
                .call();
            setProducts(fetchedProducts);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProducts(); // Fetch products on component mount
    }, []);

    // ... rest of your component code

    return (
        <div className="mt-2">
            <Input
                size="large"
                placeholder="Search track by product"
                prefix={<SearchOutlined />}
            />
            <Table dataSource={products} columns={columns} />;
        </div>
    );
};

export default ProductComponentSmartContract;
