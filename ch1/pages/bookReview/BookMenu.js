import AppLayout from "../../components/AppLayout";
import {Card} from 'antd';

const {Meta} = Card;

const BookMenu = () => {


    return (
        <AppLayout>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Card
                    hoverable
                    style={{width: 240, margin: 4}}
                    cover={<img alt="example" src="http://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img alt="example" src="http://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img alt="example" src="http://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
            </div>
        </AppLayout>
    )
}

export default BookMenu;