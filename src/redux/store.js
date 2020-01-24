import {renderEntireTree} from '../index'
const state = {
    nav: {
        logo: require('../logo.jpg'),
        logoName: 'Unical',
        linkNav: [
            {
                href: "#",
                name: 'Dashbord'
            },
            {
                href: "#",
                name: 'Policy managment'
            },
            {
                href: "#",
                name: 'User managment'
            },
            {
                href: "#",
                name: 'Settings'
            }
        ],
        navNotice: {
            icon: 'fa fa-bell',
            counter: 4
        },
        profileImg: "https://img5.goodfon.ru/wallpaper/nbig/7/bd/naruto-uzumaki-naruto-paren-sila.jpg",
        createPost: {
            name: 'Создать пост',
            popUp: [
                {
                  placeholder: 'Задание',
                  name: 'Задание',
                  id: 'Задание',
                  for: 'Задание',
                  labelName: 'Задание',
                  value: '',
                },
                {
                    placeholder: 'Опишите задание',
                    name: 'Опишите задание',
                    id: 'Опишите задание',
                    for: 'Опишите задание',
                    labelName: 'Опишите задание',
                    value: '',

                },
                {
                    placeholder: 'Ваш адрес',
                    name: 'Ваш адрес',
                    id: 'Ваш адрес',
                    for: 'Ваш адрес',
                    labelName: 'Ваш адрес',
                    value: '',
                },
                {
                    placeholder: 'Цена',
                    name: 'Цена',
                    id: 'Цена',
                    for: 'Цена',
                    labelName: 'Цена',
                    value: '',
                },
            ]
        },
    },
    taskContainer: {
        ddWrapper: {
            ddHeader: {
                title: 'Все задание',
                icon: 'fa fa-angle-down'
            },
        },
        taskItem: [
            {
                img: 'https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg',
                title: 'Ищу ученика для проекта сильная личность.',
                cost: '500р',
                time: '3 месяц',
                data: '0:48'
            },
            {
                img: 'https://sun9-42.userapi.com/c855420/v855420522/e6020/PIygrO_c5z0.jpg',
                title: 'Нужна самка на вечер',
                cost: '1500р',
                time: '30мин',
                data: '0:33'
            },
            {
                img: 'https://sun9-40.userapi.com/c844720/v844720507/1fe367/zI6WSsL2-Sg.jpg',
                title: 'Хочу секса.',
                cost: '10р',
                time: '1.5 месяца',
                data: '1:17'
            },
            {
                img: 'https://sun9-8.userapi.com/c856520/v856520157/7e517/7p99z8vSGKg.jpg',
                title: 'Сделать за меня дз.',
                cost: '500р',
                time: '1 день',
                data: '11:39'
            },
            {
                img: 'https://sun9-30.userapi.com/c205520/v205520263/226bb/fVqrYXi94XA.jpg',
                title: 'Разработать сайт.',
                cost: '145.000р',
                time: '3 месяц',
                data: '2:48'
            },
        ],
        addTask: (task) => {

           let newTask = {
                img: 'https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg',
                title: state.nav.createPost.popUp[0].value,
                cost: '500р',
                time: '3 месяц',
                data: '0:48'
           };
           state.taskContainer.taskItem.push(newTask);
           renderEntireTree()
        },
        ChangeInput: (text) => {
           console.log(text);
           renderEntireTree()
        },
    },
   
}

export default state;