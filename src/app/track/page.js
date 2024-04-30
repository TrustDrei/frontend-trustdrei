import MenuLayout from '@/app/components/MenuLayout';
import TrackComponent from '@/components/Track';

export default function Track() {
    return (
        <div>
            <MenuLayout>
                <h2 className="font-bold">Track Products</h2>
                <TrackComponent />
            </MenuLayout>
        </div>
    );
}
