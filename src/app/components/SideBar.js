'use client';
import { Layout, Menu, theme } from 'antd';

import {
    DropboxOutlined,
    FileSearchOutlined,
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const { Header, Content, Sider } = Layout;

const SideBar = () => {
    const route = useRouter();

    const items2 = [
        {
            key: '1',
            icon: <DropboxOutlined />,
            label: 'Productt',
            onClick: () => route.push('/productt'),
        },
        {
            key: '2',
            icon: <FileSearchOutlined />,
            label: 'Track',
            onClick: () => route.push('/track'),
        },
    ];
    return (
        <Menu
            mode="inline"
            selectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0, width: 256 }}
            items={items2}
        />
    );
};

export default SideBar;
