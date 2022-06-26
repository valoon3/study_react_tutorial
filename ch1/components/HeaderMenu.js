import { Menu, Input } from 'antd';
import Link from 'next/link'
import AppLayout from "./AppLayout";

const HeaderMenu = () => {
    // 메뉴창 구성
    const items = [
        getItem(<Link href="/"><a>노드버드</a></Link>, "1"),
        getItem(<Link href="/"><a>프로필</a></Link>, "2"),
        getItem(
            <div>
                <Input.Search
                    enterButton
                    onSearch={ onSearch }
                    style={{verticalAlign: 'middle'}}
                />
            </div>, "3"),
        getItem(<Link href="/"><a>회원가입</a></Link>, "4"),
        ];

    // 검색 액션
    function onSearch(value){
        console.log(value);
    }

    // item 만들기
    function getItem(label, key, icon, children, type) {
        return {
            //label: <Link href={href}><a>{label}</a></Link>,
            label,
            key,
            icon,
            children,
            type,
        };
    };

    return (
        <>
            <Menu items={ items } mode="horizontal" />
        </>
    )
}

//HeaderMenu.prototype.getItem =

export default HeaderMenu;