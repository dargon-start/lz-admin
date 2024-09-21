import { Button, Flex } from 'antd';
const Header = () => (
    <div className="bg-gray-800 text-white p-4">
        <Flex gap="small" wrap>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </Flex>
    </div>
);

export default Header
