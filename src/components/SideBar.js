'use client';
import { Layout, Menu, theme } from 'antd';

import {
    DropboxOutlined,
    FileSearchOutlined,
} from '@ant-design/icons';
import React from 'react';
import { useRouter } from 'next/navigation';

const { Header, Content, Sider } = Layout;

const SideBar = () => {
    const route = useRouter();
    const items2 = [
        {
            key: '1',
            icon: <DropboxOutlined />,
            label: 'Products',
            onClick: () => route.replace('/productt'),
        },
        {
            key: '2',
            icon: <FileSearchOutlined />,
            label: 'Track',
            onClick: () => route.push('/track'),
        },
    ];
    return (
        <div className="sidebar">
            <Layout>
                <Sider width={200}>
                    <Menu
                        onClick={(value) => console.log(value)}
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                </Sider>
            </Layout>
        </div>
    );
};

export default SideBar;
