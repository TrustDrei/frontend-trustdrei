import MenuLayout from '@/app/components/MenuLayout';
import ProductComponent from '@/components/ProductsComponent';

export default function Productt() {
    return (
        <div>
            <MenuLayout>
                <h2 className="font-bold">Products</h2>
                <ProductComponent />
            </MenuLayout>
        </div>
    );
}
